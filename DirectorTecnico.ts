import { Persona } from "./Persona";

export class DirectorTecnico extends Persona{
    nivelDeExperiencia:string;

        constructor(nombre:string, edad:number, nivelDeExperiencia:string){
            super(nombre,edad);
            this.nivelDeExperiencia  = nivelDeExperiencia;

        }
    
    //Implementacion de metodo abstracto.
    obtenerDetalles(): string {
        return `El miembro del cuerpo tecnico ${this.nombre}, tiene ${this.edad} de edad y su experiencia es en ${this.nivelDeExperiencia}`
    }






}