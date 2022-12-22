import { PosicionamentoComponent } from './component/posicionamento/posicionamento.component';
import { NossasCelulasComponent } from './component/nossas-celulas/nossas-celulas.component';
import { AconselhamentoComponent } from './component/aconselhamento/aconselhamento.component';
import { PedidosDetalhesComponent } from './component/Pedido-de-oração/pedidos-detalhes/pedidos-detalhes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosFormComponent } from './component/Pedido-de-oração/pedidos-form/pedidos-form.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'pedidos', component: PedidosFormComponent},
  { path: 'aconselhamento', component: AconselhamentoComponent},
  { path: 'nossas-celulas', component: NossasCelulasComponent},
  { path: 'posicionamento', component: PosicionamentoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
