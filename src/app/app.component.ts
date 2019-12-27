import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngio-masonary';
  options ={};

  constructor(){
    this.options= {
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      gutter:'.gutter-sizer',
      percentPosition: true,
      transitionDuration: '0.2s'
    } 
  }
  
  layoutComplete(items:any){
    console.log("layout completed !!!");
    console.log(items);
  }
}
