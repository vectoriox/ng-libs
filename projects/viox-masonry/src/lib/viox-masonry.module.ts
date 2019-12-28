import { NgModule } from '@angular/core';
import { VioxMasonryComponent } from './viox-masonry.component';
import { VioxMasonryItemDirective } from './viox-masonry-item.directive';



@NgModule({
  declarations: [VioxMasonryComponent, VioxMasonryItemDirective],
  imports: [
  ],
  exports: [VioxMasonryComponent, VioxMasonryItemDirective]
})
export class VioxMasonryModule { }
