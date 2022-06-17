import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ClienteModule } from './pages/cliente/cliente.module';
import { ProdutoModule } from './pages/produto/produto.module';
import { MaquinaModule } from './pages/maquina/maquina.module';
import { FuncionarioModule } from './pages/funcionario/funcionario.module';
import { OrdemproducaoModule } from './pages/ordemproducao/ordemproducao.module';
import { ClienteeditModule } from './edit/clienteedit/clienteedit.module';
import { FuncionarioeditModule } from './edit/funcionarioedit/funcionarioedit.module';
import { MaquinaeditModule } from './edit/maquinaedit/maquinaedit.module';
import { OrdemproducaoeditModule } from './edit/ordemproducaoedit/ordemproducaoedit.module';
import { ProdutoeditModule } from './edit/produtoedit/produtoedit.module';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    ClienteModule,
    ProdutoModule,
    MaquinaModule,
    FuncionarioModule,
    OrdemproducaoModule,
    ClienteeditModule,
    FuncionarioeditModule,
    MaquinaeditModule,
    OrdemproducaoeditModule,
    ProdutoeditModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_BR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
