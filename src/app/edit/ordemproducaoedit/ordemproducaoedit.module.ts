import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemproducaoeditComponent } from './ordemproducaoedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    OrdemproducaoeditComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [OrdemproducaoeditComponent],
})
export class OrdemproducaoeditModule { }
