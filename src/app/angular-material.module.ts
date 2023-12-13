import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importar aquí todo lo q se use de Angular Material:
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from "@angular/material/list";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatDividerModule
  ],
  exports: [
    //Exportar aquí todo lo q se use de Angular Material p´/q lo use './app.module.ts':
    MatInputModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatDividerModule
  ]
})
export class AngularMaterialModule { }
