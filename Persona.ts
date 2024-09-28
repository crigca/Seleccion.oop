export abstract class Persona {
    nombre:string;
    edad:number;

    constructor(nombre:string, edad:number) {
        this.nombre=nombre;
        this.edad=edad;
    }

    //Metodo abstracto para implementar en las clases que heredan.
    abstract obtenerDetalles(): string;
}