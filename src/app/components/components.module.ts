import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CategoryComponent,
  ]
})
export class ComponentsModule { }
