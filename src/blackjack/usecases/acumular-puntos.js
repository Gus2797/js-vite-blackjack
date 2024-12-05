
/**
 * Turno 0 = primer jugador y el ultimo será la computadora
 * @param {String} carta carta del jugador/computadora
 * @param {Number} turno turno del jugador/computadora
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {Array<Number>} puntosJugadores puntos del jugador
 * @param {Number} valorCarta valor de la carta
 * @returns 
 */
export const acumularPuntos = (carta, turno, puntosHTML, puntosJugadores, valorCarta) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}