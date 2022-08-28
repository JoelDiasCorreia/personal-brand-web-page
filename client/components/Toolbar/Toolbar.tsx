import * as React from "react";
import {Link} from "react-router-dom";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import { LanguageContext } from "../../contexts/language";
import { AiOutlineMenu } from "react-icons/ai";

export const Toolbar = (changeLanguage: any) => {
    const css =`
            .toolbar{
                position: fixed;
                background: #2D2E32;
                max-width: 98%;
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
                padding: 0px 14px;
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
                -webkit-transition: all 200ms ease-in;
                -moz-transition: all 200ms ease-in;
                -o-transition: all 200ms ease-in;
                transition: all 200ms ease-in;
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

            #menu{
                display: none;
            }
            
            #menu ul li {
                background-color: #2D2E32;
            }
            
            #menu ul {
              list-style:none;
              margin:0;
              padding:0;
              background-color: #2D2E32;
            }
            
            #menu ul a {
              display:block;
              color:#fff;
              text-decoration:none;
              font-weight:400;
              font-size:15px;
              padding:10px;
              font-family:"HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
              text-transform:uppercase;
              letter-spacing:1px;
            }
            
            #menu ul li {
              position:relative;
              float:left;
              margin:0;
              padding:0;
            }
            
            #menu ul ul {
              display:none;
              position:absolute;
              top:100%;
              right:0;
              padding:0;
            }
            
            #menu ul ul li {
              float:none;
              width:150px
            }
            
            #menu ul ul a {
              line-height:120%;
              padding:10px 15px;
            }
            
            #menu ul li:hover > ul {
              display:block;
              border: 2px solid #19F4D6;
            }
            @media (max-width: 1200px) {
                .menu-md-lg-xl {
                  display: block;
                }
                #menu{
                    display: none;
                }
            }
            @media (max-width: 768px ) {
                #menu{
                    display: block;
                }
                .menu-md-lg-xl {
                    display: none;
                }
            }
            .logo{
                color: #19F4D6;
                text-decoration: none;
            }
            .logo:hover {
                color: #FF004D;
                cursor: pointer;
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
                        <Link to="/" className="logo">
                            <h1 >{'<Joel Dias Correia/>'}</h1>
                        </Link>
                    </nav>
                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="#"><AiOutlineMenu size={28}></AiOutlineMenu></a>
                                <ul>
                                    <Link to="/">
                                        <li><a href="#" className="toolbar-btn">Inicio</a></li>
                                    </Link>
                                    <Link to="/about">
                                        <li><a href="#" className="toolbar-btn">Sobre Mi</a></li>
                                    </Link>
                                    <Link to="/services">
                                        <li><a href="#" className="toolbar-btn">Servicios</a></li>
                                    </Link>
                                    <Link to="/contact">
                                        <li><a href="#" className="toolbar-btn">Contacto</a></li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <nav className="menu-md-lg-xl">
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
                    <nav className="menu-md-lg-xl">

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
                        {/* <a >
                            <button  onClick={switchLang} id="button-lang-switcher">
                                { 
                                    lang == 'ES' ? 
                                        <img src="assets/EN.webp" alt="spanish Flag"  height={'30px'}  />
                                    : 
                                        <img src="assets/ES.jpeg" alt="spanish Flag" height={'30px'} />
                                }
                            </button>
                        </a> */}
                    </nav>

                    </div>
                )}
                </LanguageContext.Consumer>
            
        </div>
    )
}

