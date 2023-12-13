import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Mio:
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
// import {MatInputModule} from '@angular/material/input';  //La estoy pasando a './angular-material-module.ts'

import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages/pages.component';

//Importando el modulo q creé especifica~ para el AngunlarMaterial
import { AngularMaterialModule } from './angular-material.module';
import { EstudiantesComponent } from './pages/mantenimientos/estudiantes/estudiantes.component';
import { AsignaturasComponent } from './pages/mantenimientos/asignaturas/asignaturas.component';
import { NewTableComponent } from './pages/mantenimientos/new-table/new-table.component';
import { EditarEstudianteComponent } from './pages/mantenimientos/estudiantes/editar-estudiante.component';



@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    RegisterComponent,
    DashboardComponent,
    NopagefoundComponent,
    PagesComponent,
    EstudiantesComponent,
    AsignaturasComponent,
    NewTableComponent,
    EditarEstudianteComponent
  ],
  exports: [
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatSlideToggleModule,
    AngularMaterialModule //Importando el modulo q creé especifica~ para el AngunlarMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
