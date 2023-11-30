import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interfaces';

import { environment } from "../../environments/environment";

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor( private http: HttpClient ) { }

  crearEstudiante( formData: RegisterForm ) {
    console.log('Creando estudiante');

    //  return this.http.post( `${ base_url }/estudiantes`, formData )  //El 'post' regresa un Observablecon la info q responde el backend
    return this.http.post( `http://localhost:3002/api/estudiantes`, formData )  //El 'post' regresa un Observablecon la info q responde el backend
      /*.subscribe( resp => {
        console.log('usuario creado');
        console.log("respuesta", resp);
      }, (err) => console.warn("error: ", err ));  */
  }

}
