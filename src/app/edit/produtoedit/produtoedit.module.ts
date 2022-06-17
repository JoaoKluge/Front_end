import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoeditComponent } from './produtoedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ProdutoeditComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [ProdutoeditComponent],
})
export class ProdutoeditModule { }
