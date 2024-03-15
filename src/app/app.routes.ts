import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdRecomendadosComponent } from './pages/prod-recomendados/prod-recomendados.component';
import { VuelosComponent } from './pages/vuelos/vuelos.component';
import { OpinionesComponent } from './pages/opiniones/opiniones.component';
import { CrearCuentaComponent } from './pages/crear-cuenta/crear-cuenta.component';
import { IniciarSeccionComponent } from './pages/iniciar-seccion/iniciar-seccion.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'productos',
    component: ProdRecomendadosComponent,
  },
  {
    path: 'vuelos',
    component: VuelosComponent,
  },
  {
    path: 'opiniones',
    component: OpinionesComponent,
  },

  {
    path:'crear-cuenta',
    component:CrearCuentaComponent,
  },
  {
    path:'iniciar-sesion',
    component:IniciarSeccionComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
