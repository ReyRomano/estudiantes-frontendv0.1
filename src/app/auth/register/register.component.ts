import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css'
  ]
})
export class RegisterComponent {

  public formSubmitted = false;  //Formulario posteado

  public registerForm: FormGroup = this.fb.group({  //ó:  public registerForm: formGroup = this.fb.group({
    //  _id: ['', Validators.required ],  //Comentado x q se generará autpmáticamente
    nombre: ['Fernando', Validators.required],
    edad: [29],
    estatus: ['Apr']
  });

  constructor( private fb: FormBuilder,
              private estudianteService: EstudianteService) {}

  crearEstudiante() {
  this.formSubmitted = true;
    console.log( "Valor", this.registerForm?.value );
    console.log( "Valor nombre: ", this.registerForm?.value.nombre );
    console.log( "Valor: edad:", this.registerForm?.value.edad );
    console.log( "Valor: estatus:", this.registerForm?.value.estatus );

  /*if ( this.registerForm.valid ) {
    console.log('posteando formulario');
    else {
      console.log('Formulario no es correcto...');  
  }  */
    if ( this.registerForm?.invalid ) {  //Si formulario no es correcto
      console.log('Formulario no es correcto...');
      return;
    }
    
    //Realizar el posteo si el formulario sí es correcto
    /*this.estudianteService.crearEstudiante( this.registerForm?.value )  //Mandando toda la data del formulario
      .subscribe(resp => {
        console.log('usuario creado');
        console.log('respuesta', resp);
      }, (err) => console.warn(err));  */
    this.estudianteService.crearEstudiante( this.registerForm?.value)
      .subscribe( resp => {
        console.log('Estudiante creado');
        console.log("Respuesta: ", resp );
      }, (err) => console.warn("Error: ", err));
      //Mostrar Error a detalle:   }, (err) => console.warn("Error: ", err.error.msg));
  }

  campoNoValido( campo: string ): boolean{

    if( this.registerForm?.get(campo)?.invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }

}




/*
//  -------------------

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css'
  ]
})
export class RegisterComponent {

  public formSubmitted = false;  //'false': sin tocarse el botón

  public registerForm: any = this.fb.group({
    nombre: ['Fernando',  Validators.required ],
    edad: [30, Validators.required ],
    estatus: ['Aprobado', Validators.required ]
  } );

  constructor (  private fb: FormBuilder,
                private estudianteService: EstudianteService,
                private router: Router ) {}

    crearEstudiante() {
      this.formSubmitted = true;   //formSubmitted cambia a 'true': cuando se toca el botón 
      console.log("Valores:", this.registerForm.value );
      //console.log( this.registerForm );  //Imprimir en consola q contras no son iguales, como 'true'

      //if ( this.registerForm.valid ) {
      if ( this.registerForm.invalid ) {
        //console.log('Posteando formulario')
        return;
        console.log('Formulario no es correcto...');console.log('Formulario no es correcto...');
      } /*  else {
        console.log('Formulario no es correcto...');
      }  */
      /*

      //realizar el posteo
      this.estudianteService
          .crearEstudiante( this.registerForm?.value )
          .subscribe( resp => {
            console.log('Usuario creado');
            console.log("Respuesta: ", resp);
          }, (err) =>  {
          //Si sucede un error
          console.warn("Mensaje d error: ", err.error.msg )   //Lo reemplazo x el sweetalert2:
          console.warn("error: ", err )

          });
    }

    campoNoValido( campo: string): boolean {

      if ( this.registerForm?.get(campo)?.invalid && this.formSubmitted ) {
      return true;
      } else {
        return false;
      }
    }

}
//  -----------------------
*/
