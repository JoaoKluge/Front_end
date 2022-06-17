import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaquinaeditComponent } from './maquinaedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    MaquinaeditComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [MaquinaeditComponent],
})
export class MaquinaeditModule { }
