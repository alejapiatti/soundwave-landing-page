
import React from 'react';
import girl from '../images/landing-page-girl.png';
import Footer from './Footer.js';
import {Frontestilo} from './Estilosfront.js';

export default function Front(){
    return(
    <Frontestilo id= "front">
        <div id="foto"><img src={girl}/></div>

        <div id= "body"><p>Feel the music</p>
        <button> Join Now </button>
        <p>Stream over 20 thousand songs with one click</p>
        </div>
        <Footer/>
    </Frontestilo>
    )




    
    }
