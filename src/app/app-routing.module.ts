import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasonryGalleryComponent } from "./masonry-gallery/masonary-gallery.component";
import { AosComponent } from "./animtaion-on-scroll/aos.component"
const routes: Routes = [
  { path: '', redirectTo: '/masonryGallery' , pathMatch:'full'},
  { path: 'masonryGallery', component: MasonryGalleryComponent},
  { path: 'aos', component: AosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
