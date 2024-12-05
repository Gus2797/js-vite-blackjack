import { crearCarta, pedirCarta, acumularPuntos } from "./";

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos que la computadora necesita para ganar
 * @param {Array<String>} deck
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {Array<Number>} puntosJugadores puntos del jugador
 * @param {Number} valorCarta valor de la carta
 * @param {HTMLElement} divCartasJugadores elemento HTML que muestra las cartas
 */
export const turnoComputadora = (puntosMinimos, deck = [], puntosHTML, puntosJugadores, valorCarta, divCartasJugadores) => {
    if(!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if(!puntosHTML) throw new Error('Argumento puntosHTML es necesario');
    if(!puntosJugadores) throw new Error('Arreglo puntosJugadores es necesario');
    if(!puntosJugadores) throw new Error('Argumento divCartasJugadores es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosHTML, puntosJugadores, valorCarta);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);

    } while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinaGanador(puntosJugadores);
}

const determinaGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('La computadora gana');
        } else if (puntosComputadora > 21) {
            alert('El jugador gana');
        } else if (puntosComputadora > puntosMinimos) {
            alert('La computadora gana');
        } else if (puntosMinimos > puntosComputadora) {
            alert('El jugador gana');
        } 
    }, 100);
}