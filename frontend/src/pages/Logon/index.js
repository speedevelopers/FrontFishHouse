import React from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImgMidle from '../../assets/midle.png';
import { FiLogIn } from 'react-icons/fi';


export default function Logon () {
    return (
        <div className="logon-container">
           <div className="content">
            <section className="form">
            <img src={logoImgMidle} alt="House Fish" />

                <form >
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Seu login" />
                    <input placeholder="Sua senha"/>
                    <button className="button" type="submit">Entrar</button>

                
                </form>
            </section> 

            </div>  
        </div>
    ); 
}