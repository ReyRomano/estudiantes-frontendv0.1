import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { Estudiante } from 'src/app/models/estudiante.model';

import { EstudianteService } from 'src/app/services/estudiante.service';

//  --------  Para tabla de AngularMaterial
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  edad: number;
  estatus: string;
  asignaturas: string;  //Queda pendiente para cambiarlo a tipo Obbject Id
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', edad: 12, estatus: 'aprobado', asignaturas: 'esp,mate,etc'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', edad: 34, estatus: 'reprobado', asignaturas: 'esp,mate,etc'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', edad: 45, estatus: 'aprobado', asignaturas: 'esp,mate,etc'},
];

const columnsToDisplay = ['userName', 'age'];
//  ---------------------------

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styles: [
  ]
})
export class EstudiantesComponent implements OnInit{

  public estudiantes: Estudiante[] =[];
  public cargando: boolean = true;  //Bandera q indica q está cargando

  constructor( private estudianteService: EstudianteService ) {}

  ngOnInit(): void {

    this.cargarEstudiantes();
    
  }

  cargarEstudiantes(){
    this.cargando = true; //Inicia bandera

    //Con tipado
    this.estudianteService.cargarEstudiantes()
    .subscribe(( estudiantes: Estudiante[] ) => {
      console.log( "estudiantes: ", estudiantes );
      
      this.cargando = false;  //Termina bandera
      this.estudiantes = estudiantes;
    });
  }

  guardarCambios(estudiante: any) {
    console.log("Enviando estudiante", estudiante);
    this.estudianteService.actualizarEstudiante(estudiante._id, estudiante.nombre, estudiante.telefono, estudiante.email, estudiante.edad, estudiante.estatus, estudiante.asignaturas )
        .subscribe( resp => {
          //alert(`Estudiante ${ estudiante.nombre } Actualizado Correctamente`);
          Swal.fire('Actualizado', ` " ${ estudiante.nombre } " Actualizado correctamente`, 'success');

        });
  }

  //P´/Tabla:
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edad', 'estatus', 'asignaturas'];
  dataSource = ELEMENT_DATA;

  // P´/Input
  public value = '';
}