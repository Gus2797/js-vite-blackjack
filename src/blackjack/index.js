
import _ from 'underscore';
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck';
// import crearDeck, { miNombre } from './usecases/crear-deck';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, acumularPuntos, crearCarta } from './usecases/index';

// console.log(miNombre)

/**
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
*/

const miModulo = (() => {

  'use strict';
  
  let deck = [];
  const tipos = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];

  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir   = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo   = document.querySelector('#btnNuevo');

  const divCartasJugadores   = document.querySelectorAll('.divCartas'),
        puntosHTML           = document.querySelectorAll('small');

  // Esta función inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];

      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);       
      }  
  
      puntosHTML.forEach(elem => elem.innerText = 0);
      divCartasJugadores.forEach(elem => elem.innerHTML = '');

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  }

  // pedirCarta();

  // Eventos
  btnPedir.addEventListener('click', () => {

      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0, puntosHTML, puntosJugadores, valorCarta);
      crearCarta(carta, 0, divCartasJugadores);

      if (puntosJugador > 21) {
          console.warn('Lo siento mucho, perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador,deck,puntosHTML,puntosJugadores,valorCarta,divCartasJugadores);
      } else if (puntosJugador === 21) {
          console.warn('21, genial!');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador,deck,puntosHTML,puntosJugadores,valorCarta,divCartasJugadores);
      } 
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0],deck,puntosHTML,puntosJugadores,valorCarta,divCartasJugadores);
  });

  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  });

  return {
      nuevoJuego: inicializarJuego
  };

})();


