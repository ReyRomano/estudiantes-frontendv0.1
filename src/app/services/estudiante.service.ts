import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudiante, _EstudianteSignature } from '../models/estudiante.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EstudianteService implements OnInit {

  constructor( private http: HttpClient ) {}

  ngOnInit(): void {
    
    
  }
  cargarEstudiantes(){
  
    //Ruta completa:  http://localhost:3002/api/estudiantes
    const url = `${base_url}/estudiantes`;
    //return this.http.get<any>('http://localhost:3002/api/estudiantes');
    // return this.http.get(url);
    //Obteniendo sólo lo q me sirve:
    return this.http.get<Estudiante[]>(url)
                .pipe(
                  //map( (resp: {ok:boolean, estudiantes: Estudiante[]}) => resp.estudiantes )
                  map( (resp: any) => resp.estudiantes )
                );
  
  }

  cargarEstudiantesPorId(id: string){
  
    //Ruta completa:  http://localhost:3002/api/estudiantes/:id
    const url = `${base_url}/estudiantes/${id}`;
    //Obteniendo sólo lo q me sirve:
    return this.http.get<Estudiante[]>(url)
                 .pipe(
                   map( (resp: any) => resp.estudiante )
                 );
  
  }

  crearEstudiante( nombre: string, telefono: string, email: string, edad: number, estatus: string, asignaturas: _EstudianteSignature ){
    
    //Ruta completa:  http://localhost:3002/api/estudiantes
    const url = `${base_url}/estudiantes`;
    //Obteniendo sólo lo q me sirve:
    return this.http.post(url, {nombre, telefono, email, edad, estatus, asignaturas} );  //Ésta petición 'post' regresa un estudiante;

  }

  actualizarEstudiante( _id: string, nombre: string, telefono: string, email: string, edad: number, estatus: string, asignaturas: _EstudianteSignature ){
    
    //Ruta completa:  http://localhost:3002/api/estudiantes/:id
    const url = `${base_url}/estudiantes/${ _id }`;
    //Obteniendo sólo lo q me sirve:
    return this.http.put(url, {nombre, telefono, email, edad, estatus, asignaturas} );  //Ésta petición 'post' regresa un estudiante               ;

  }

}
