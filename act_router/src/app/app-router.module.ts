import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { ListadoComponent } from './principal/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    component: FormularioComponent,
    pathMatch: 'full',
  },
  {
    path: 'listado',
    component: ListadoComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
