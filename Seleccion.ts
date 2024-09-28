import { Jugador } from "./Jugador";
import { DirectorTecnico } from "./DirectorTecnico";
import { MedicoDeportivo } from "./MedicoDeportivo";


export class Seleccion{
    plantilla: Jugador[];
    cuerpoTecnico: DirectorTecnico;
    cuerpoMedico: MedicoDeportivo;

    constructor(cuerpoTecnico:DirectorTecnico, cuerpoMedico:MedicoDeportivo){
        this.plantilla=[];
        this.cuerpoTecnico=cuerpoTecnico;
        this.cuerpoMedico=cuerpoMedico;

    }
    
    //Metodo para agregar jugador.
    agregarJugador(jugador:Jugador):void{
        this.plantilla.push(jugador);
    }

    //Metodo para quitar jugador por su numero.
    quitarjugador(numero:number):void{
        this.plantilla = this.plantilla.filter(Jugador => Jugador.numero !== numero);
    }

    //Metodo para editar las caracteristicas de un jugador por su numero.
    editarJugador(numero:number, nuevosDatos:Partial<Jugador>):void{
        const jugador=this.plantilla.find(j => j.numero === numero);
        if(jugador){
            if(nuevosDatos.nombre) jugador.nombre=nuevosDatos.nombre;
            if(nuevosDatos.edad) jugador.edad=nuevosDatos.edad;
            if(nuevosDatos.posicion) jugador.posicion=nuevosDatos.posicion;
            if(nuevosDatos.goles !== undefined) jugador.anotarGol();
        }
    }

    //Metodo para mostar lista de jugadores y sus detalles.
    obtenerListaJugadores(): string {
        let detalles = '';
        this.plantilla.forEach(jugador => {
            detalles += jugador.obtenerDetalles() + '\n';
        });
        return detalles;
    }



}