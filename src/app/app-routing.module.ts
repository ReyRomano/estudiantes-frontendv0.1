import { NgModule } from '@angular/core';
//  import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent ,
    children: [  
      //Pags hijas con el mismo template y diseño:
      { path: 'dashboard', component: DashboardComponent },
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
