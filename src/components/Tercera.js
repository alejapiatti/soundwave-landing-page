import React from 'react';
import Footer from "./Footer.js";
import {Terceraestilo} from './Estilostercera.js';

export default function Tercera(){
    return(
<Terceraestilo>   
<header>     
    <div id="tercera">
        <p>Join the <span>fun</span></p>
    </div>
    <div class="email">
        <label for="name">Name:</label>
        <button></button>
         <label for="email">Email:</label>
         <button></button>
         <label for="psw">Password:</label>
         <button></button>
         <button><a href= "Segunda">Join Now</a></button>
    </div> 
</header>
    <Footer/>
</Terceraestilo>        
        

    )
    }
