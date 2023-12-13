export interface _EstudianteSignature {
    _id?: string;
    espanol?: number;
    matematicas?: number;
    deportes?: number;
}
export class Estudiante {

    constructor(
        //public _id: string,
        public nombre: string,
        public _id?: string,
        public telefono?: string,
        public email?: string,
        public edad?: number,
        public estatus?: string,
        public asignaturas?: _EstudianteSignature    //Está en la lín 1
    ) {}
}