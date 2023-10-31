import { AgregaVuelosComponent } from './components/agrega-vuelos/agrega-vuelos.component';
import { AgregaEmpresaComponent } from './components/agrega-empresa/agrega-empresa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'empresas', component: AgregaEmpresaComponent},
  {path:':id', component: AgregaVuelosComponent},
  {path: 'vuelos', component: AgregaVuelosComponent},
  {path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
