import * as React from "react";
import {Link} from "react-router-dom";
import {HiOutlineMail} from "react-icons/hi";
import {BsGithub, BsLinkedin} from "react-icons/bs";
export function Footer(){
    const css =`
            .footer{
                background: #2b2b2b;
                z-index: 1;
                position: relative;
                min-height: 370px;
                padding: 15px;
                border-top: 2px solid #19F4D6;
            }
            .footer-pagemap-btn{
                font-family: system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';
                padding: 15px 10px;
                margin: 15px;
                background: #2b2b2b;
                color: #19F4D6;
                cursor: pointer;
                border: none;
                -webkit-transition: all 0.15s ease-in;
                -moz-transition: all 0.15s ease-in;
                -o-transition: all 0.15s ease-in;
                transition: all 0.15s ease-in;
                font-size: 20px;
                
            }
            .footer-pagemap-btn:hover{
                border-bottom: 2px solid #FF004D;

            }
            .footer-flex-horizontal-wrap{
                z-index: 1;
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
        </div>
    )
}
