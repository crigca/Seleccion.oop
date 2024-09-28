import { Persona } from "./Persona";
import { IJugador } from "./IJugador";

export class Jugador extends Persona{
    posicion:string;
    numero:number;
    private _goles:number;

    constructor(nombre:string, edad:number, posicion:string, numero:number, goles:number){
            super(nombre,edad);
            this.posicion=posicion;
            this.numero=numero;
            this._goles=goles;
        }   

    //Getter para obtener numero de goles.
    get goles():number{
        return this._goles;
    }

    //Metodo para incrementar los goles del jugador.
    anotarGol():void{
        this._goles +=1;
    }

    //Metodo para obbtener el numero total de goles.
    obtenerGoles():number{
        return this._goles;
    }

    //Implementacion del metodo abstracto.
    obtenerDetalles(): string {
        return `El jugador ${this.nombre}, tiene ${this.edad} de edad, juega de ${this.posicion}, lleva en la camiseta el numero ${this.numero} y ha marcado ${this._goles}`
    }
}

 
 
 
 
 
    


