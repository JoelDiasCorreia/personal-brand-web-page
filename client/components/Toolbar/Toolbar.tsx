import * as React from "react";
import {Link} from "react-router-dom";
import {BsGithub, BsLinkedin} from "react-icons/bs";
export class Toolbar extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    render() {
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
                    z-index:20;
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
                    font-size: 16px;
                }
            .toolbar-btn:hover{
                    color: #19F4D6;
        
                }
            .toolbar-btn:focus{
                    color: cornflowerblue;
                }
            nav{
                display: flex;
                align-content: center;
                align-items: center;
                flex-wrap: nowrap;
                flex-direction: row;
            }
        `
        return (
            <div>
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
                                Inicio
                            </button>
                        </Link>
                        <Link to={'about'}>
                            <button className={'toolbar-btn'}>
                                Sobre mi
                            </button>
                        </Link>
                        <Link to="/services">
                            <button className={'toolbar-btn'}>
                                Servicios
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className={'toolbar-btn'}>
                                Contacto
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

                    </nav>

                </div>
            </div>


        );
    }

}
