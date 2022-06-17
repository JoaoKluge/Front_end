import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioeditComponent } from './funcionarioedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    FuncionarioeditComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [FuncionarioeditComponent],
})
export class FuncionarioeditModule { }
