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
                            Home
                        </button>
                    </Link>
                    <Link to={'portfolio'}>
                        <button className={'footer-pagemap-btn'}>
                            Portfolio
                        </button>
                    </Link>
                    <Link to={'services'}>
                        <button className={'footer-pagemap-btn'}>
                            Services
                        </button>
                    </Link>
                    <Link to={'skills'}>
                        <button className={'footer-pagemap-btn'}>
                            Skills
                        </button>
                    </Link>
                    <Link to={'contact'}>
                        <button className={'footer-pagemap-btn'}>
                            Contact
                        </button>
                    </Link>




                </div>
                <div>
                    <button className={'footer-pagemap-btn'}>
                        <BsLinkedin></BsLinkedin>
                        LinkedIn
                    </button>
                    <button className={'footer-pagemap-btn'}>
                        <BsGithub></BsGithub>
                        GitHub
                    </button>
                    <button className={'footer-pagemap-btn'}>
                        <HiOutlineMail></HiOutlineMail>
                        Email
                    </button>
                </div>
            </div>
            <div className={'footer-flex-horizontal-wrap'}>
                <p>Copyright 2022 - Descargo Legal - Terminos y condiciones - Acuerdo de privacidad</p>
            </div>

        </div>
    )
}
