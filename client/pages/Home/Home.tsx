import * as React from "react";
import {Contact} from "../../components/Contact/Contact";
import {Services} from "../Services/Services";
import { DiLinux, DiReact } from "react-icons/di";
import {FaAngular, FaFigma, FaHtml5, FaJava, FaJira, FaNodeJs} from "react-icons/fa";
import {FaGit} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiFirebase, SiJavascript, SiMongodb, SiOracle, SiSwagger, SiTypescript } from "react-icons/si"
import { BsTerminal } from "react-icons/bs";
import { Stars } from "../../components/Stars/Stars";
import { TbFileDownload } from "react-icons/tb";
interface Skill {
    name: string,
    description: string
}

export class Home extends React.Component<any, { skills:Skill[] }>{
    constructor(props:any) {
        super(props);
        this.state = {
            skills: [
                {
                    name:'Prototipado de aplicaciones y paginas',
                    description:'Prototipado animado de aplicaciones y paginas web'
                },
                {
                    name:'Desarrollo de páginas web',
                    description:'Diseño de interfaces de usuario para aplicaciones mobiles o de escritorio. '
                },
                {
                    name:'Control de versiones con Git',
                    description:'Control de versiones de los proyectos a traves de arboles de ramas y commits '
                },
                {
                    name:'Bases de Datos SQL y NoSQL',
                    description:'Desarrollo con bases de datos relacionales como tambien con Bases de Datos no relacionales.'
                },
                {
                    name:'Desarrollo de Interfaces',
                    description:'Desarrollar los Interfaces de usuarios en tecnologias como React y Angular.'
                },
                {
                    name:'Diseño y desarrollo de Microservicios',
                    description:'Diseño de microservicios en multiples arquitecturas. En tecnologias como Spring-Boot o NodeJS.'
                },
                {
                    name:'Sistemas operativos',
                    description:'Desempeño de tareas de desarrollo en Sistemas operativos basados en linux y consola.'
                },
                {
                    name:'Gestion de proyectos y SCRUM',
                    description:'Gestion de proyectos a traves de la metodologia SCRUM.'
                }
            ]
        }
    }

    render() {
        const css =`
            .home{
   
                margin: 0px;
                width: 100%;
                min-height: 85vh
            }
            .first-impression-view{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                flex-wrap: wrap;
                align-content: center;
                margin: auto;
                max-width: 1200px;
                margin-top: 140px;
            }
            .home-fist-card{
                margin: 25px;
                padding: 15px;
                z-index: 10;
            }
            .home-h1{
                font-size: 46px;
                margin: 5px;
            }
            .home-h1 strong{
                color: #19F4D6;
            }
             .home-h2{
                font-family: monospace;
            }
            .cv-btn{
                padding: 15px 25px;
                background: #2D2E32;
                color: #19F4D6;
                border: 2px solid #19F4D6;
                font-family: monospace;
                font-size: 18px;
                cursor: pointer;
                display: flex;
                align-content: center;
                align-items: center;
                justify-content: center;
                flex-wrap: nowrap;
                flex-direction: row;
                height: 55px;
                -webkit-transition: all 0.15s ease-in;
                -moz-transition: all 0.15s ease-in;
                -o-transition: all 0.15s ease-in;
                transition: all 0.15s ease-in;
                text-decoration: none;
            }
            a{
                text-decoration: none;
            }
            .cv-btn p{
                text-decoration: none;
                margin: 5px;
            }
            .cv-btn:hover{
                color: #FF004D;
                border: 2px solid #FF004D;
                font-weight: 900;
            }
            .cv-btn:focus{
                background: #47484B;
                color: #19F4D6;
            }
            .home-bkgnd-img{
                position: absolute;
                background-image: url( ${'/assets/code.jpg' } ) ;
                background-repeat: no-repeat;
                width: 100%;
                min-height: 150vh;
                opacity: 0.1;
                z-index:9;
            }
               .home-joel-img{
                box-shadow: 0px 5px 11px 5px rgb(0 0 0 / 9%);
                background-image: url( ${'/assets/joel_pequeño.webp' } ) ;
                background-repeat: round;
                width: 250px;
                height: 250px;
                border-radius: 1000px;
                z-index:10;
            }
            .skills{
                max-width: 1200px;
                margin: auto;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                align-content: center;
                flex-wrap: nowrap;
            }
            .skills h1{
                font-size: 38px;
            }
            .skills-flexbox{    
                max-width: 1200px;
                width: 100%;
                height: fit-content;
                z-index: 10;
                margin: auto;
                padding: 0px;
                
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;

            }
            .skill{
                width: 320px;
                height: fit-content;
                z-index:10;
                padding: 15px 25px;
                margin: 15px;
                background: #2D2E32;
                color: #19F4D6;
                border-bottom: 2px solid #19F4D6;
                -webkit-transition: all 0.15s ease-in;
                -moz-transition: all 0.15s ease-in;
                -o-transition: all 0.15s ease-in;
                transition: all 0.15s ease-in;

                cursor: pointer;

          
                border-radius: 0.8rem;    
                padding: 15px 25px;

                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-items: center;
                align-content: center;
                background: #2b2b2b;
                text-align: center;
            }
            
            .skill:hover{
                border-bottom: 2px solid #FF004D;
               
                color:  #19F4D6;
                box-shadow: 0 1.6rem 2.4rem rgb(0 0 0 / 25%);
            }
            .skill p{
                font-size: 18px;
                height: 100px;
            }
            .skill-icons{
                display: flex;
                width: 100%;
                height: fit-content;
                align-items: center;
                align-content: center;
                justify-content: center;
                flex-direction: row;
            }
            .skill-icons div{
                display: flex;
                flex-direction: column;
                margin: 10px;
                align-items: center;
                align-content: center;
                justify-content: space-around;
                flex-wrap: nowrap;
                height: fit-content;
            }
            .skill-icons p{
                height: 36px;
                font-size: 16px;
                margin-bottom: 0px;
            }

        .flip-container:hover .flipper,  
        .flip-container.hover .flipper {
                -webkit-transform: rotateY(360deg);
                -moz-transform: rotateY(360deg);
                -o-transform: rotateY(360deg);
                transform: rotateY(360deg);
                color: #FF004D;
            }
            
        .flipper {
            -webkit-transition: 0.4s;
            -webkit-transform-style: preserve-3d;
            -moz-transition: 0.4s;
            -moz-transform-style: preserve-3d;
            -o-transition: 0.4s;
            -o-transform-style: preserve-3d;
            transition: 0.4s;
            transform-style: preserve-3d;
            position: relative;
        }
        .flip-container {
            -webkit-perspective: 1000;
            -moz-perspective: 1000;
            -o-perspective: 1000;
            perspective: 1000;
        }
        .front, .back {
            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            -o-backface-visibility: hidden;
            backface-visibility: hidden;
            
        }
        `;
        return (
            <div className={'home'}>
                <Stars></Stars>
                {/* <div className={'home-bkgnd-img'}> </div> */}
                <div>
                    <div className={'first-impression-view'}>
                        <div className={'home-joel-img'}>  </div>
                        <div className={'home-fist-card'}>
                            <h1 className={'home-h1'}>
                                Hola
                            </h1>
                            <h1 className={'home-h1'}>
                                Soy <strong>Joel</strong>,
                            </h1>
                            <h1 className={'home-h1'}>
                                Desarrollador Fullstack ssr
                            </h1>
                            <h2 className={'home-h2'}>y diseñador UI jr.</h2>
                            <a href={'/assets/CV - Joel Dias Correia_compressed.pdf' } target="_blank">
                                
                                <button className={'cv-btn'}>
                                    <TbFileDownload size={28}></TbFileDownload> 
                                    <p>Ver mi CV</p>
                                </button>
                            </a>


                        </div>
                    </div>
                    
            
                    <div className={'skills'}>
                        <h1>Habilidades</h1>
                        <div className={'skills-flexbox'}>

                            {
                                this.state.skills.map((skill,index)=>{
                                    return <div className={'skill'} key={index}>
                                        <h2>{skill.name}</h2>
                                        <p>{skill.description}</p>
                                        {
                                            skill.name === 'Desarrollo de Interfaces' ? 
                                            <div className=" skill-icons ">

                                                <div className="flip-container">
                                                    <DiReact size={60} className="flipper"></DiReact>
                                                    <p  className="flipper">React</p>
                                                </div>

                                                <div className="flip-container">
                                                    <FaAngular size={50} className="flipper"></FaAngular>
                                                    <p  className="flipper">Angular</p>
                                                </div>

                                                <div className="flip-container">
                                                    <SiTypescript size={50} className="flipper"></SiTypescript>
                                                    <p  className="flipper">Typescript</p>
                                                </div>
                                               
                                            </div>
                                            : null 
                                        }
                                        {
                                            skill.name === 'Desarrollo de páginas web' ? 
                                            <div className="skill-icons">
                                                <div className="flip-container">
                                                    <FaHtml5 size={50}  className="flipper"></FaHtml5>
                                                    <p  className="flipper">HTML5</p>
                                                </div>

                                                <div className="flip-container">
                                                    <IoLogoCss3 size={50}  className="flipper"></IoLogoCss3>
                                                    <p  className="flipper">CSS3</p>
                                                </div>

                                                <div className="flip-container">
                                                    <SiJavascript size={50}  className="flipper"></SiJavascript>
                                                    <p  className="flipper">Javascript</p>
                                                </div>
                                            </div>
                                            : null 
                                        }
                                        {
                                            skill.name === 'Prototipado de aplicaciones y paginas' ? 
                                            <div className="skill-icons">
                                                <div className="flip-container">
                                                    <FaFigma  size={50}  className="flipper"> </FaFigma>
                                                    <p  className="flipper">Figma</p>
                                                </div>
                                            </div>
                                            : null 
                                        }
                                         {
                                            skill.name === 'Control de versiones con Git' ? 
                                            <div className="skill-icons">
                                                <div className="flip-container">
                                                    <FaGit size={50}  className="flipper"></FaGit>
                                                    <p  className="flipper">Git</p>
                                                </div>
                                         
                                            </div>
                                            : null 
                                        }
                                        {
                                            skill.name === 'Bases de Datos SQL y NoSQL' ? 
                                            <div className="skill-icons">
                                                <div  className="flip-container">
                                                    <SiOracle size={50}  className="flipper"></SiOracle>
                                                    <p  className="flipper">Oracle SQL</p>
                                                </div>
                                                <div className="flip-container">
                                                    <SiMongodb size={50}  className="flipper"></SiMongodb>
                                                    <p  className="flipper">MongoDB</p>
                                                </div>
                                                <div className="flip-container">
                                                    <SiFirebase size={50}  className="flipper"></SiFirebase>
                                                    <p  className="flipper">Firestore</p>
                                                </div>
                                            </div>
                                            : null 
                                        } 
                                         {
                                            skill.name === 'Diseño y desarrollo de Microservicios' ? 
                                            <div className="skill-icons">
                                                <div className="flip-container">
                                                    <FaNodeJs size={50} className="flipper"></FaNodeJs>
                                                    <p className="flipper">NodeJS</p>
                                                </div>
                                                <div className="flip-container">
                                                    <SiSwagger size={50}  className="flipper"></SiSwagger>
                                                    <p className="flipper">Swagger</p>
                                                </div>
                                                <div className="flip-container">
                                                    <FaJava size={50}  className="flipper"></FaJava>
                                                    <p className="flipper">Java</p>
                                                </div>
                                                <div className="flip-container">
                                                    <SiFirebase size={50} className="flipper"></SiFirebase>
                                                    <p className="flipper">Firebase</p>
                                                </div>
                                            </div>
                                            : null 
                                        }
                                        {
                                            skill.name === 'Sistemas operativos' ?
                                            <div className="skill-icons">
                                                <div  className="flip-container">
                                                    <DiLinux size={50} className="flipper"></DiLinux>
                                                    <p className="flipper">Linux</p>
                                                </div>
                                                <div  className="flip-container">
                                                    <BsTerminal size={50} className="flipper"></BsTerminal>
                                                    <p className="flipper">Terminal</p>
                                                </div>
                                            </div>
                                            :   null
                                        }
                                        {
                                            skill.name === 'Gestion de proyectos y SCRUM' ?
                                            <div className="skill-icons">
                                                <div className="flip-container">
                                                    <FaJira size={50} className="flipper"></FaJira>
                                                    <p className="flipper">JIRA</p>
                                                </div>
                                            </div>
                                            :   null
                                        }
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <Services></Services>
                    <Contact></Contact>
        
                </div>


                <style>
                    {css}
                </style>


            </div>
        );
    }
}
