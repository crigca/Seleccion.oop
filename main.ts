import { Jugador } from "./Jugador";
import { DirectorTecnico } from "./DirectorTecnico";
import { MedicoDeportivo } from "./MedicoDeportivo";
import { Seleccion } from "./Seleccion";

//Instancia Director tecnico y Medico deportivo
const directorTecnico = new DirectorTecnico("Lionel Scaloni",46, "Estrategia y Liderazgo");
const medicoDeportivo = new MedicoDeportivo("Ana Perez", 49, "Fisioterapia");

//Instancia de seleccion con el cuerpo tecnico.
const seleccion = new Seleccion(directorTecnico,medicoDeportivo);

//Crear jugadores.
const jugador1 = new Jugador("Lionel Messi", 34, "Delantero", 10, 50);
const jugador2 = new Jugador("Nicolas Otamendi", 36, "Defensor", 19, 4);
const jugador3 = new Jugador("Alexis Mac Allister", 26, "Mediocampista", 20, 12);

//Agregar jugadores.
seleccion.agregarJugador(jugador1);
seleccion.agregarJugador(jugador2);
seleccion.agregarJugador(jugador3);

//Mostrar lista de jugadores antes de editar.
console.log("---Lista de jugadores antes de editar---")
console.log(seleccion.obtenerListaJugadores());

//Editar jugadores.
seleccion.editarJugador(10,{nombre:"Lionel Andres Messi"});

//Mostrar lista de jugadores despues de editar.
console.log("---Lista de jugadores despues de editar---");
console.log(seleccion.obtenerListaJugadores());

//Quitar jugador por su numero y mostrar lista.
seleccion.quitarjugador(19);
console.log("---Nueva lista---");
console.log(seleccion.obtenerListaJugadores());

//mostrar cuerpo tecnico.
console.log("--- Cuerpo Tecnico---");
console.log(directorTecnico.obtenerDetalles());

//Mostrar cuerpo medico.
console.log("--- Cuerpo Medico---");
console.log(medicoDeportivo.obtenerDetalles());


