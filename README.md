
# Proyecto de Selección de Fútbol - TypeScript

Este proyecto implementa un sistema de gestión para una selección de fútbol utilizando los principios de la **Programación Orientada a Objetos (POO)** en TypeScript. El sistema incluye jugadores, cuerpo técnico y médico, con funcionalidades para agregar, editar y quitar jugadores de la selección.

# Estructura del Proyecto

├── DirectorTecnico.ts
├── IJugador.ts
├── Jugador.ts
├── MedicoDeportivo.ts
├── Persona.ts
├── README.md
├── Seleccion.ts
├── UML Seleccion.png
└── main.ts


### Métodos:

- **agregarJugador(jugador: Jugador)**: 
  Agrega una instancia de `Jugador` a la plantilla de la selección. Este método asegura que el jugador sea parte de la selección y pueda ser gestionado a través de los demás métodos de la clase `Seleccion`.

- **quitarJugador(numero: number)**: 
  Elimina un jugador de la plantilla basándose en su número de camiseta. El método recorre la plantilla, encuentra al jugador con el número proporcionado y lo remueve, asegurando que ya no forme parte de la selección.

- **editarJugador(numero: number, nuevosDatos: Partial<Jugador>)**: 
  Actualiza la información de un jugador específico. Para identificar al jugador, se usa su número de camiseta. Puedes pasar solo los datos que desees modificar (como el nombre, la edad, la posición o los goles) y solo esos atributos serán actualizados, mientras los demás permanecen igual.

- **obtenerListaJugadores()**: 
  Devuelve una lista con los detalles de todos los jugadores en la plantilla. Los detalles incluyen el nombre, la edad, la posición en la cancha, el número de camiseta y la cantidad de goles que han marcado. Este método es útil para obtener un resumen de la selección completa.

