import React from 'react';
import Logo from '../images/logo.png';
import {Navbarestilo} from './Estilonavbar.js';

export default function Navbar(){
    return(
    <Navbarestilo calssName="Navbar">
    <navbar>
        <div>
            <img src={Logo} alt='logo' id='logo'/>
            <a id='text-logo' className='menu' href='#Front'>Soundwave</a>
        </div>
        
        <div>
        <button><a href= "#segunda">Discover</a></button>
        <button><a href= "#tercera">Join</a></button>
        </div>
        
    </navbar>
    </Navbarestilo>
    )

    }