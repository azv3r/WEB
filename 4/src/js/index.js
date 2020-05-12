import { home } from './home';
import { pokemon } from './pokemon';
import { jigglypuff } from './jigglypuff.js'

let btnHome = document.querySelector('.home'),
    btnPokemon = document.querySelector('.pokemon'),
    btnJiggly = document.querySelector('.jigglypuff'),
    app = document.querySelector('#app')

home()
btnHome.onclick = home
btnPokemon.onclick = pokemon
btnJiggly.onclick = jigglypuff