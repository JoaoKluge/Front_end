import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteeditComponent } from './clienteedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ClienteeditComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [ClienteeditComponent],
})
export class ClienteeditModule { }
