
/**
 * Esta función crea la carta para mostrarla
 * @param {String} carta carta del jugador/computadora
 * @param {Number} turno turno del jugador/computadora
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);
}