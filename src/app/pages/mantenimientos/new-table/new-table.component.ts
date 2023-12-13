import { Component, OnInit } from '@angular/core';

//  --------------------  Modal -------------------------------------------
import {MatDialog} from '@angular/material/dialog';
//  -------------------- -------------------------------------------

import { EstudianteService } from 'src/app/services/estudiante.service';
import { EstudiantesComponent } from '../estudiantes/estudiantes.component';
import { EditarEstudianteComponent } from '../estudiantes/editar-estudiante.component';

//  ----------  Tabla -------------------------------------------------------
          // export interface PeriodicoElemento {
          //   posicion: number;
          //   nombre: string;
          //   //peso: number;
          //   datoSimboloS: string;
          // }
          

          // const ELEMENTO_DATO: PeriodicoElemento[] = [
          //   /*  {posicion: 1, nombre: 'Hydrogen', peso: 1.0079, datoSimboloS: 'H'},
          //   {posicion: 2, nombre: 'Helium', peso: 4.0026, datoSimboloS: 'He'},  */
          //   {posicion: 1, nombre: 'Hydrogen', datoSimboloS: 'H'},
          //   {posicion: 2, nombre: 'Helium', datoSimboloS: 'He'}

          // ];
          // const ELEMENTO_DATO: PeriodicoElemento[] = [
          //   /*  {posicion: 1, nombre: 'Hydrogen', peso: 1.0079, datoSimboloS: 'H'},
          //   {posicion: 2, nombre: 'Helium', peso: 4.0026, datoSimboloS: 'He'},  */
          //   {posicion: 1, nombre: 'Hydrogen', datoSimboloS: 'H'},
          //   {posicion: 2, nombre: 'Helium', datoSimboloS: 'He'}

          // ];
//  -----------------------------------------------------------------

@Component({
  selector: 'app-new-table',
  templateUrl: './new-table.component.html',
  styleUrls: ['./new-table.component.css'],
})
export class NewTableComponent implements OnInit {

  public cargando: boolean = true;  //Bandera q indica q está cargando
  //  --------------- Tabla --------------------------------------------------------
  public datoCodigo: any;
  public desplayadasColumnas: any[] = [];
  //  -----------------------------------------------------------------------

  constructor( private estudianteService: EstudianteService,
              public dialog: MatDialog ){}
    ngOnInit(): void {

      this.cargarEstudiantes();
    }

    cargarEstudiantes(){
      this.cargando = true;   //Inicia bandera

      //  Funciona Pero Sin Tipado:
      this.estudianteService.cargarEstudiantes()
    .subscribe((resp:any) => {
      //console.log("resp: ", resp);
      //  this.estudiantes = resp;
      //  --------------- Tabla --------------------------------------------------------
      this.datoCodigo = resp;
      console.log("datoCodigo: ", this.datoCodigo);
      //  -----------------------------------------------------------------------
      this.cargando = false;
    });
    //  --------------- Tabla --------------------------------------------------------
    
      this.desplayadasColumnas = ['name', 'e-mail', 'tel', 'signatures', 'editar'];

      console.log("desplayadasColumnas: ", this.desplayadasColumnas);
    
    //  -----------------------------------------------------------------------

    }
    
    //  --------------------  Modal openDialog  -------------------------------------------
    
      openDialog() {
        const dialogRef = this.dialog.open(NewTableComponent, {
          height: '350px'
        });
    
        /*Para cerrar dialogo, recibiendo algo:
          dialogRef.afterClosed().subscribe((result: any) => {
          console.log(`Dialog result: ${result}`);
        });*/
      }
    //  ------------------------------------------------------------------------

    //  --------------------  Modal editarTodosEstudiantes -------------------------------------------
    editarTodosEstudiantes(){
      const dialogoRef = this.dialog.open( EstudiantesComponent, {
        height: '600px',
        width: '1500px'
      });

      /*  dialogoRef.afterClosed().subscribe((result: any) => {
        console.log(`Dialog result: ${result}`);
      }); */

      }
    //  ---------------------------------------------------------------

    //  --------------------  Modal editarEstudiantes -------------------------------------------
    //Llamando Componente:
    editarEstudiante(_id: any){
      console.log("_id: ", _id);
      localStorage.setItem('_id_Estudiante', _id);
      let editarEstudianteComponente = this.dialog.open(EditarEstudianteComponent, {
        height: '400px',
        width: '900px',
      });      
    }
    //  --------------------   -------------------------------------------
          
}