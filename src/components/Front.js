
import React from 'react';
import girl from '../images/landing-page-girl.png';
import {Frontestilo} from './Estilosfront.js';

export default function Front(){
    return(
    <Frontestilo>
       <header> 
            <div id= "imagen"><img id="chica" src={girl}/></div>

            <div id= "body"><h1>Feel the Music</h1>
            <p>Stream over 20 thousand songs with one click</p>
            <button><a href= "#tercera">Join Now</a></button>
            </div>
        </header>
    </Frontestilo>
    )




    
    }
