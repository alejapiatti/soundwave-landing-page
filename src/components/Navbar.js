import React from 'react';
import Logo from '../images/logo.png';
import {Navbarestilo} from './Estilonavbar.js';

export default function Navbar(){
    return(
    <Navbarestilo calssName="Navbar">
        <div>
        <button><a href ="#front"><img src={Logo}/>Soundwave</a></button>
        </div>
        
        <div>
        <button><a href= "#segunda">Discover</a></button>
        <button><a href= "#tercera">Join</a></button>
        </div>
    </Navbarestilo>
    )

    }