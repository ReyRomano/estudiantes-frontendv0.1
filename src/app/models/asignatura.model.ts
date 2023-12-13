export interface _AsignaturaStudent {
    nombre: string,
    _id: string,
    telefono?: string,
    email?: string,
    edad?: number,
    estatus?: string
}

export class Asignatura {
    constructor(
        public _id?: string,
        public espanol?: number,
        public matematicas?: number,
        public deportes?: number,
        public estudiante?: _AsignaturaStudent  //Está en la lín 1
    ) {}
}