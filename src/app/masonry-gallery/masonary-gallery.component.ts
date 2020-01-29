import { Component } from '@angular/core';

@Component({
  selector: 'masonary-gallery',
  templateUrl: './masonary-gallery.component.html',
  styleUrls: ['./masonary-gallery.component.scss']
})
export class MasonryGalleryComponent {
  title = 'ngio-masonary';
  options ={};
  collection =[];

  constructor(){
    this.options= {
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      gutter:'.gutter-sizer',
      percentPosition: true,
      transitionDuration: '0.2s'
    } 
      this.collection.push({
        head:"Elvis Presly",
        description:`Elvis Aaron Presley (January 8, 1935 – August 16, 1977), also known mononymously as Elvis, was an American singer and actor. Regarded as one of the most significant cultural icons of the 20th century, he is often referred to as the "King of Rock and Roll" or simply "the King".`,
        img:"./assets/images/1.jfif"
    })
      this.collection.push({
          head:"Lana Del Rey",
          description:`Elizabeth Woolridge Grant (born June 21, 1985), known professionally as Lana Del Rey, is an American singer and songwriter.`,
          img:"./assets/images/2.jfif"
      })
      this.collection.push({
          head:"Amy Winehouse",
          description:`Amy Jade Winehouse (14 September 1983 – 23 July 2011) was an English singer and songwriter. She was known for her deep, expressive contralto vocals and her eclectic mix of musical genres.`,
          img:"./assets/images/3.jfif"
      })
      this.collection.push({
          head:"Kurt Cobain",
          description:`Kurt Donald Cobain (February 20, 1967 – April 5, 1994) was an American singer, songwriter, and musician, best known as the guitarist and frontman of the rock band Nirvana`,
          img:"./assets/images/4.png"
      })
      this.collection.push({
        head:"Kurt Cobain",
        description:`Kurt Donald Cobain (February 20, 1967 – April 5, 1994) was an American singer, songwriter, and musician, best known as the guitarist and frontman of the rock band Nirvana`,
        img:"./assets/images/5.jfif"
    })
    this.collection.push({
      head:"Kurt Cobain",
      description:`Kurt Donald Cobain (February 20, 1967 – April 5, 1994) was an American singer, songwriter, and musician, best known as the guitarist and frontman of the rock band Nirvana`,
      img:"./assets/images/6.jfif"
  })
    this.collection.push({
      head:"Kurt Cobain",
      description:`Kurt Donald Cobain (February 20, 1967 – April 5, 1994) was an American singer, songwriter, and musician, best known as the guitarist and frontman of the rock band Nirvana`,
      img:"./assets/images/7.jfif"
  })
  this.collection.push({
    head:"Kurt Cobain",
    description:`Kurt Donald Cobain (February 20, 1967 – April 5, 1994) was an American singer, songwriter, and musician, best known as the guitarist and frontman of the rock band Nirvana`,
    img:"./assets/images/8.jfif"
  })
  this.collection.push({
    head:"Kurt Cobain",
    description:`Kurt Donald Cobain (February 20, 1967 – April 5, 1994) was an American singer, songwriter, and musician, best known as the guitarist and frontman of the rock band Nirvana`,
    img:"./assets/images/9.jfif"
})
    }
  
  layoutComplete(items:any){ 
    console.log("layout completed2 !!!");
    console.log(items);
  }
}
