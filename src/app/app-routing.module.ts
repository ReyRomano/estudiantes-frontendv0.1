import { NgModule } from '@angular/core';
//  import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesComponent } from './pages/pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { EstudiantesComponent } from './pages/mantenimientos/estudiantes/estudiantes.component';
import { AsignaturasComponent } from './pages/mantenimientos/asignaturas/asignaturas.component';
import { NewTableComponent } from './pages/mantenimientos/new-table/new-table.component';
import { EditarEstudianteComponent } from './pages/mantenimientos/estudiantes/editar-estudiante.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent ,
    children: [  
      //Pags hijas con el mismo template y diseño:
      { path: 'dashboard', component: DashboardComponent },
      { path: 'estudiantes', component: EstudiantesComponent, data: {titulo: 'Mantenimiento de Estudiantes'}},
      { path: 'editar-estudiante/:id', component: EditarEstudianteComponent, data: {titulo:'Mantenimiento de Estudiantes' }},
      { path: 'asignaturas', component: AsignaturasComponent, data: {titulo: 'Mantenimiento de Asignaturas'}},
      { path: 'new-table', component: NewTableComponent, data: {titulo: 'new-table'}},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ] 
  },
  //Paginas con diferente template y diseño
  { path: 'register', component: RegisterComponent },
  
  { path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [ [RouterModule.forRoot(routes)],
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
