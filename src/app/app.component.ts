import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isOpen= false;

  constructor(){

  }

  public toggleMenu(){
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }


}
