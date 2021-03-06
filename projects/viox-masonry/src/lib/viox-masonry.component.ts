import { Component, OnInit, Input, Output, EventEmitter, HostListener,  ElementRef} from '@angular/core';
declare var require: any;
let imagesLoaded: any;
let masonryConstructor: any;


@Component({
  selector: "[viox-masonry], viox-masonry",
  template: `<ng-content></ng-content>`,
  styles: []
})
export class VioxMasonryComponent implements OnInit {

  public _msnry: any;

  // Inputs
  @Input() public options: IVioxMasonryOptions;
  @Input() public useImagesLoaded: Boolean = false;
  @Input() updateLayout: Boolean = false;

  @Output() layoutComplete: EventEmitter<any[]> = new EventEmitter<any[]>();
  
  public imagesLoaded;
  public elementsQueue= [];
  private isAppendAllowed:boolean = true;

  constructor(private _element: ElementRef) { }

  ngOnInit() {
    this.imagesLoaded = require('imagesloaded');
    let masonryConstructor = require('masonry-layout');
    this.options.initLayout = false;
    this._msnry = new masonryConstructor('.grid', this.options);
    this.layout();
    this._msnry.on('layoutComplete', (items: any) => {
      this.isAppendAllowed = true;
      if(this.elementsQueue.length > 0){
        this.add(this.elementsQueue.pop());
      }
    });

  }

  ngOnChanges(changes: any) {
    console.log(changes);
  }


  public add(element: HTMLElement){
    if(!this.isAppendAllowed){
      this.elementsQueue.push(element);
      return;
    }
    this.isAppendAllowed = false;
    setTimeout(()=>{
      this.imagesLoaded(element, (instance: any) => { 
          this._msnry.appended(element);
      }); 
    },200)

  }

  public remove(element: HTMLElement) {
    this._msnry.remove(element);
  }

  public layout() {
    setTimeout(() => {
      this._msnry.layout();
    });
  }

}

export interface IVioxMasonryOptions {
  itemSelector?: string;
  columnWidth?: number | string;
  gutter?: number | string;
  percentPosition?: boolean;
  stamp?: string;
  fitWidth?: boolean;
  originLeft?: boolean;
  originTop?: boolean;
  containerStyle?: string;
  transitionDuration?: string;
  resize?: boolean;
  initLayout?: boolean;
  horizontalOrder?: boolean;
}
