import * as React from "react";
import {Link} from "react-router-dom";
import {HiOutlineMail} from "react-icons/hi";
import {BsGithub, BsLinkedin} from "react-icons/bs";
export function Footer(){
    const css =`
            .footer-pagemap-btn{
                font-family: monospace;
                padding: 15px 25px;
                margin: 15px;
                padding: 15px 25px;
                margin: 15px;
                background: #2D2E32;
                color: #19F4D6;
                cursor: pointer;
                
            }
            .footer-pagemap-btn:hover{
                border: 2px solid #19F4D6;
            }
            .footer-flex-horizontal-wrap{
                   display: flex;
                    flex-wrap: wrap;
                    max-width: 1200px;
                    flex-direction: row;
                    margin: auto;
                    justify-content: space-between;
            }
        `
    return(
        <div className={'footer'}>
            <style>
                {css}
            </style>
            <hr></hr>
            <div className={'footer-flex-horizontal-wrap'}>
                <h1> Joel Dias Correia </h1>
            </div>
            <div className={'footer-flex-horizontal-wrap'}>
                <div>
                    <Link to={'home'}>
                        <button className={'footer-pagemap-btn'}>
                            Inicio
                        </button>
                    </Link>
                    <Link to={'portfolio'}>
                        <button className={'footer-pagemap-btn'}>
                            Portafolio
                        </button>
                    </Link>
                    <Link to={'services'}>
                        <button className={'footer-pagemap-btn'}>
                            Servicios
                        </button>
                    </Link>
                    <Link to={'skills'}>
                        <button className={'footer-pagemap-btn'}>
                            Habilidades
                        </button>
                    </Link>
                    <Link to={'contact'}>
                        <button className={'footer-pagemap-btn'}>
                            Contacto
                        </button>
                    </Link>
                </div>
                <div>
                    <a href={'https://www.linkedin.com/in/joeldiascorreia'}>
                        <button className={'footer-pagemap-btn'}>
                            <BsLinkedin></BsLinkedin>
                            LinkedIn
                        </button>
                    </a>
                    <a href={"https://github.com/JoelDiasCorreia"} >
                        <button className={'footer-pagemap-btn'}>
                            <BsGithub></BsGithub>
                            GitHub
                        </button>
                    </a>
                    <a href={"mailto:dias.correia.joel@gmail.com"} >
                        <button className={'footer-pagemap-btn'}>
                            <HiOutlineMail></HiOutlineMail>
                            Email
                        </button>
                    </a>
                </div>
            </div>
            <div className={'footer-flex-horizontal-wrap'}>
                <p>Copyright 2022 - Descargo Legal - Terminos y condiciones - Acuerdo de privacidad</p>
            </div>

        </div>
    )
}
