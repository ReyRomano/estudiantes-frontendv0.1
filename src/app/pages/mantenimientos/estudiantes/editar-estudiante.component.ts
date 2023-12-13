import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { EstudianteService } from 'src/app/services/estudiante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit{

  //Declarando Vars Públicas:
  private _id_Estudiante:string = localStorage.getItem('_id_Estudiante') || '';  //Consiguiendo id_estudiante desde localStorage
  public infoEstudiante: any = {};

  //  ----------------- Formulario  -------------------------------
  public formEnviado = false;  //Formulario posteado
  public editarEstudianteForm: any;
  //  -------------------------------------------------------------

  constructor( private estudianteService: EstudianteService,
              //  ----------------- Formulario  -------------------------------
              private formBuilder: FormBuilder
              //  -------------------------------------------------------------
              ) {
  }
  
  ngOnInit(): void {

    //  ----------------- Formulario  -------------------------------
    this.editarEstudianteForm = this.formBuilder.group({
      nombre: [Validators.required],
      telefono: [],
      email: [],
      edad: [],
      estatus: [],
      asignaturas: []
    });
    //  -------------------------------------------------------------

    console.log("_id_Estudiante:", this._id_Estudiante );
    this.cargarEstudianteporID();
    
  }
  
  cargarEstudianteporID(){ 
    this.estudianteService.cargarEstudiantesPorId(this._id_Estudiante)
    .subscribe((resp:any) => {
      //console.log("estudiante por id(resp): ", resp);
      const { nombre, telefono, email, edad, estatus, asignaturas:{ _id } } = resp;  //Extrayendo sólo lo que me interesa
      console.log("nombreYtelefono: ", nombre, telefono, email, edad, estatus );  
      this.infoEstudiante = resp;
      console.log("infoEstudiante: ", this.infoEstudiante);
      this.editarEstudianteForm.setValue({ nombre, telefono, email, edad, estatus, asignaturas:{ _id } }); //CREO Q NO LO NECECSITO
    });
    
  }

  editarEstudiantePorId(){
    console.log("EnviandoInfoViejainfoEstudiante", this.infoEstudiante); //Sólo está consiguiendo la info, sin actualizarla aún

   this.estudianteService.actualizarEstudiante( this.infoEstudiante._id, this.editarEstudianteForm.value.nombre, this.editarEstudianteForm.value.telefono, this.editarEstudianteForm.value.email, this.editarEstudianteForm.value.edad, this.editarEstudianteForm.value.estatus, this.editarEstudianteForm.value.asignaturas )
      .subscribe( resp => {
        console.log("resp: ", resp);
        console.log(`Actualizado Correctamente: `, this.editarEstudianteForm.value.nombre );
        //alert(`Estudiante ${ estudiante.nombre } Actualizado Correctamente`);
        Swal.fire('Actualizado', ` " ${ this.editarEstudianteForm.value.nombre } " Actualizado correctamente`, 'success');
      });
  }
  
  cargarEstudantesPorUrl(){
    /*  Obtener ID desde url(Sccn 17, 234. Cargar un medico...):   this.activatedRoute.params.subscribe( params => {
      console.log("params: ", params);
    })  */
    
  }
}