import { ServiciosVuelosComponent } from './components/servicios-vuelos/servicios-vuelos.component';
import { AgregaVuelosComponent } from './components/agrega-vuelos/agrega-vuelos.component';
import { AgregaEmpresaComponent } from './components/agrega-empresa/agrega-empresa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'empresas', component: AgregaEmpresaComponent},
  {path: 'servicios', component: ServiciosVuelosComponent},
  {path: 'vuelos', component: AgregaVuelosComponent},
  {path:':id', component: AgregaVuelosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
