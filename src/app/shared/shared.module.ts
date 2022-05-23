import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FatherSonComponent } from './father-son/components/father-son/father-son.component';




@NgModule({
  declarations: [
    FatherSonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, 
    FatherSonComponent,
  ]
})
export class SharedModule { }
