import * as React from "react";
import {Link} from "react-router-dom";
export class Toolbar extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    render() {
        const css =`
            .toolbar{
                    position: fixed;
                    background: #2D2E32;
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
            <div className={'toolbar'}>
                <style>
                    {css}
                </style>
                <nav>
                    <h1>Joel Dias Correia</h1>
                </nav>
                <nav>
                    <Link to="/">
                        <button className={'toolbar-btn'}>
                            Home
                        </button>
                    </Link>
                    <Link to="/portfolio">
                        <button className={'toolbar-btn'}>
                            Portfolio
                        </button>
                    </Link>
                    <Link to="/services">
                        <button className={'toolbar-btn'}>
                            Services
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className={'toolbar-btn'}>
                            Contact
                        </button>
                    </Link>
                </nav>
                <nav>


                    <Link to="/nothing-here">
                        <button className={'toolbar-btn'}>
                            LinkedIn
                        </button>
                    </Link>

                    <a href={"https://github.com/JoelDiasCorreia"} >

                        <button className={'toolbar-btn'}>
                            GitHub
                        </button>
                    </a>
                    <button className={'toolbar-btn'}>
                        Email
                    </button>
                </nav>

            </div>

        );
    }

}
