import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteeditComponent } from './edit/clienteedit/clienteedit.component';
import { FuncionarioeditComponent } from './edit/funcionarioedit/funcionarioedit.component';
import { MaquinaeditComponent } from './edit/maquinaedit/maquinaedit.component';
import { OrdemproducaoeditComponent } from './edit/ordemproducaoedit/ordemproducaoedit.component';
import { ProdutoeditComponent } from './edit/produtoedit/produtoedit.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { MaquinaComponent } from './pages/maquina/maquina.component';
import { OrdemproducaoComponent } from './pages/ordemproducao/ordemproducao.component';
import { ProdutoComponent } from './pages/produto/produto.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/cliente' },
  { path: 'cliente', component: ClienteComponent},
  { path: 'produto', component: ProdutoComponent},
  { path: 'maquina', component: MaquinaComponent},
  { path: 'funcionario', component: FuncionarioComponent},
  { path: 'ordemproducao', component: OrdemproducaoComponent},
  { path: 'clienteedit', component: ClienteeditComponent},
  { path: 'funcionarioedit', component: FuncionarioeditComponent},
  { path: 'maquinaedit', component: MaquinaeditComponent},
  { path: 'ordemproducaoedit', component: OrdemproducaoeditComponent},
  { path: 'produtoedit', component: ProdutoeditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
