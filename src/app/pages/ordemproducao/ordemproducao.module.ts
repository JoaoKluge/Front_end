import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemproducaoComponent } from './ordemproducao.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    OrdemproducaoComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzTableModule,
    NzDividerModule,
    RouterModule
  ],
  exports:[
    OrdemproducaoComponent
  ]
})
export class OrdemproducaoModule { }
