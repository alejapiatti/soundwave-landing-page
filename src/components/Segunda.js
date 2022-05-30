import React from 'react';
import Footer from "./Footer.js";
import covers from '../images/covers.jpg';
import Micro from '../images/microphone.svg';
import Albums from '../images/albums.svg';
import More from '../images/more.svg';
import {Segundaestilo} from './Estilossegunda.js';

export default function Segunda(){
return(

<Segundaestilo>
    <header>
    <div id= "musica">   
        <p><h1>Discover new music</h1></p>  
    <div id= "fila">      
        <button> <img src={Micro}/>Charts</button>
        <button> <img src={Albums}/>Albums</button>
        <button> <img src={More}/>More</button>
    </div>    
        <p>By joining you can benefit by listening to the latest albums released. </p>
    </div>
    <div id= "segunda"><img id= "caratula" src={covers}/>
        </div>
    </header>     
    <Footer/>
</Segundaestilo>
)

}
