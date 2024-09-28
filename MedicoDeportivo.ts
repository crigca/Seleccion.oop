import { Persona } from "./Persona";

export class MedicoDeportivo extends Persona{
    especialidad:string;

        constructor(nombre:string, edad:number, especialidad:string){
            super(nombre,edad);
            this.especialidad=especialidad;

        }

    //Implementacion de metodo abstracto.
    obtenerDetalles(): string {
        return `El miemro del cuerpo tecnico ${this.nombre}, tiene ${this.edad} de edad y su especialidad es ${this.especialidad}`
    }






}