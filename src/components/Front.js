
import React from 'react';
import girl from '../images/landing-page-girl.png';
import Footer from './Footer.js';

export default function Front(){
    return(
    <div id= "front">
        <img src={girl}/>
        <p>Feel the music</p>
        <button> Join Now </button>
        <p>Stream over 20 thousand songs with one click</p>
        <Footer/>
    </div>
    )




    
    }
