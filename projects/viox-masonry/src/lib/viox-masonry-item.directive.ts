import { Directive, Inject, ElementRef, forwardRef, OnDestroy, AfterViewInit } from '@angular/core';
import { VioxMasonryComponent } from './viox-masonry.component';
@Directive({
  selector: "[vioxMasonryItem], vioxMasonryItem"
})
export class VioxMasonryItemDirective implements OnDestroy, AfterViewInit {
    constructor(
      private _element: ElementRef,
      @Inject(forwardRef(() => VioxMasonryComponent))
      private _parent: VioxMasonryComponent) {
      }

      ngAfterViewInit() {
          console.log("add!!!!!!!!!!!!")
          console.log(this._element.nativeElement);
          this._parent.add(this._element.nativeElement);
      }

      ngOnDestroy() {
          this._parent.remove(this._element.nativeElement);
      }
}