import * as React from "react";
import {Link} from "react-router-dom";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import { LanguageContext } from "../../contexts/language";

export const Toolbar = (changeLanguage: any) => {
    const css =`
            .toolbar{
                    position: fixed;
                    background: #2D2E32;
                    max-width: 100%;
                    padding: auto;
                    display: flex;
                    width: 100%;
                    align-content: center;
                    align-items: center;
                    flex-wrap: nowrap;
                    flex-direction: row;
                    justify-content: space-between;
                    border-bottom: 3px solid #47484B;
                    z-index: 20;
                    top: 0px;
                    left: 0px;
                }
            .toolbar-btn{
                border: none;
                background: none;
                color: white;
                font-family: monospace;
                cursor: pointer;
                margin: 5px;
                padding: 5px;
                font-size: 18px;
                border-bottom: 2px solid trasparent;
            }
            .toolbar-btn:hover{
                color: #19F4D6;
                border-bottom: 2px solid #19F4D6;
            }
            .toolbar-btn:focus{
                color: #FF004D;
                border-bottom: 2px solid #FF004D;
            }
            nav{
                display: flex;
                align-content: center;
                align-items: center;
                flex-wrap: nowrap;
                flex-direction: row;
            }
            #button-lang-switcher{
                padding: 0px;
                height: 30px;
                border: none;
                margin: 10px;
                cursor: pointer;
            }
            #button-lang-switcher img{
                height: inherit;
            }
        `;
    // const switchLanguage = () => {
    //     if(lang === 'EN'){
    //         setLanguage('ES');
    //     }else{
    //         setLanguage('EN');
    //     }
    // }
    return (
        <div>
              <LanguageContext.Consumer>
                {({lang, switchLang}) => (
                    <div className={'toolbar'}>
                    <style>
                        {css}
                    </style>
                    <nav>
                        <h1>{'<Joel Dias Correia/>'}</h1>
                    </nav>
                    <nav>
                        <Link to="/">
                            <button className={'toolbar-btn'}>
                                {
                                    lang === 'EN' ? 'Home' : 'Inicio'
                                }
                            </button>
                        </Link>
                        <Link to={'about'}>
                            <button className={'toolbar-btn'}>
                                {
                                    lang === 'EN' ? 'About' : ' Sobre mi'
                                }
                            </button>
                        </Link>
                        <Link to="/services">
                            <button className={'toolbar-btn'}>
                                {
                                    lang === 'EN' ? 'Services' : 'Servicios'
                                }
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className={'toolbar-btn'}>
                                {
                                    lang === 'EN' ? 'Contact' : 'Contacto'
                                }
                            </button>
                        </Link>
                    </nav>
                    <nav>

                        <a href={'https://www.linkedin.com/in/joeldiascorreia'}  target="_blank">
                            <button className={'toolbar-btn'}>
                                <BsLinkedin size={18}></BsLinkedin>
                                LinkedIn
                            </button>
                        </a>

                        <a href={"https://github.com/JoelDiasCorreia"}   target="_blank">

                            <button className={'toolbar-btn'}>
                                <BsGithub size={18}></BsGithub>
                                GitHub
                            </button>
                        </a>
                        <a >
                            <button  onClick={switchLang} id="button-lang-switcher">
                                { 
                                    lang == 'ES' ? 
                                        <img src="assets/EN.webp" alt="spanish Flag"  height={'30px'}  />
                                    : 
                                        <img src="assets/ES.jpeg" alt="spanish Flag" height={'30px'} />
                                }
                            </button>
                        </a>
                    </nav>

                    </div>
                )}
                </LanguageContext.Consumer>
            
        </div>
    )
}

