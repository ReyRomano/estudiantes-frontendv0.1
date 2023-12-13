import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudianteService } from '../../services/estudiante.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css'
  ]
})
export class RegisterComponent {

  public formSubmitted = false;  //Formulario posteado

  public registerForm: FormGroup = this.fb.group({
    //  _id: ['', Validators.required ],  //Comentado x q se generará autpmáticamente
    nombre: ['Fernando', Validators.required],
    telefono: ['5511'],
    email: ['prueba@gmail.com'],
    edad: [29],
    estatus: ['Aprobado'],
    asignaturas: ['6571117999580dcebcc1bd1a']
  });

  constructor( private fb: FormBuilder,
              private estudianteService: EstudianteService) {}

  crearEstudiante() {
  this.formSubmitted = true;
    console.log( "Valor", this.registerForm?.value );
    /*  console.log( "Valor nombre: ", this.registerForm?.value.nombre ); */

    if ( this.registerForm?.invalid ) {  //Si formulario no es correcto
      console.log('Formulario no es correcto...');
      //alert(`No se creo estudiante, Formulario incorrecto, Pruebe de nuevo`);
      Swal.fire({
        title: 'No se creo estudiante!',
        text: 'Formulario incorrecto',
        icon: 'error',
        confirmButtonText: 'Probar de nuevo'
      });
      return;
    } else {
      if (!this.registerForm?.value.asignaturas) {

        console.log('Falta ID válido...');
        //alert(`No se creo estudiante, ID de Asignaturas no puede quedar vacío, Pruebe con un ID válido`);
        Swal.fire({
          title: 'No se creo estudiante!',
          text: 'ID de Asignaturas no puede quedar vacío, Pruebe con un ID válido',
          icon: 'error',
          confirmButtonText: 'Probar de nuevo'
        });
        return;      
      } else {

           if (this.registerForm?.valid) {
             console.log('posteando formulario, y enviando estudiante: ', this.registerForm?.value.nombre);
             //Realizar el posteo si el formulario sí es correcto
            this.estudianteService.crearEstudiante( this.registerForm?.value.nombre, this.registerForm?.value.telefono, this.registerForm?.value.email, this.registerForm?.value.edad, this.registerForm?.value.estatus, this.registerForm?.value.asignaturas )  //Mandando toda la data del formulario
              .subscribe(resp => {
                // console.log('estudiante creado correctamente');
                console.log('resp: ', resp);
                //alert(`Estudiante ' ${ this.registerForm?.value.nombre } ' Creado Correctamente`);
                Swal.fire({
                  title: 'Hecho!',
                  text: ` " ${ this.registerForm?.value.nombre } " Creado correctamente`,
                  icon: 'success',                  
                  showCancelButton: true,
                  cancelButtonColor: "#d33",
                  //showDenyButton: true,
                  confirmButtonText: "Crear otro estudiante",
                  confirmButtonColor: "#3085d6",
                  //denyButtonText: `Crear otro estudiante`
                  html: `<a href="/new-table">Ver mis Estudiantes</a>`
                }).then((result) => {
                  if (result.isConfirmed) {
                    return;
                  }
                });

              }, (err) => console.warn(err));
              }

      }

    }

  }

  campoNoValido( campo: string ): boolean{

    if( this.registerForm?.get(campo)?.invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }

}