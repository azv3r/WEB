import { home } from './home';
import { pikachu } from './pikachu';
import { jigglypuff } from './jigglypuff.js'

let btnHome = document.querySelector('.home'),
    btnPikachu = document.querySelector('.pikachu'),
    btnJiggly = document.querySelector('.jigglypuff'),
    app = document.querySelector('#app')

home()
btnHome.onclick = home
btnPikachu.onclick = pikachu
btnJiggly.onclick = jigglypuff