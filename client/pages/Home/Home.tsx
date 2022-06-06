import * as React from "react";
import {Contact} from "../../components/Contact/Contact";
import {Services} from "../Services/Services";

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
                    description:'Realizo prototipos animados de aplicaciones y paginas web'
                },
                {
                    name:'Diseño de interfaces',
                    description:'Realizo el diseño de interfaces de usuario para aplicaciones mobiles o de escritorio. '
                },
                {
                    name:'Control de versiones con Git',
                    description:'Control de versiones de los proyectos a traves del sistema de repositorios  y control de cambios de Git. Desarrollo en equipo sobre el sistema de ramas de Git.'
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
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                flex-wrap: wrap;
                align-content: center;
                margin: auto;
                max-width: 1200px;
            }
            .home-fist-card{
                   margin: 25px;
                   margin-top: 100px;
                    padding: 15px;
                    z-index: 10;
            }
            .home-h1{
                font-size: 70px;
                line-height: 50px;
            }
            .home-h1 strong{
                color: #19F4D6;
            }
             .home-h2{
                font-family: monospace;
            }
            .home-cta-btn{
                padding: 15px 25px;
                background: #2D2E32;
                color: #19F4D6;
                border: 2px solid #19F4D6;
                font-family: monospace;
                font-size: 18px;
                cursor: pointer;
            }
             .home-cta-btn:focus{
                background: #47484B;
                color: #19F4D6;
            }
            .home-cta-btn:hover{
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
            }
            .skills-flexbox{    
                max-width: 1200px;
                width: 100%;
                display: flex;
                height: 400px;
                z-index: 10;
                height: fit-content;
                margin: auto;
                padding: 15px;
                flex-wrap: wrap;
            }
            .skill{
                width: 260px;
                height: 300px;
                z-index:10;
                padding: 15px 25px;
                margin: 15px;
                background: #2D2E32;
                color: #19F4D6;
                border: 2px solid #19F4D6;
            }
            .skill:hover{
                color:  #FF004D;
                border: 2px solid #FF004D;
            }
            .skill p{
                font-size: 16px;
            }
        `
        return (
            <div className={'home'}>
                <div className={'home-bkgnd-img'}> </div>
                <div>
                    <div className={'first-impression-view'}>
                        <div className={'home-fist-card'}>
                            <h1 className={'home-h1'}>
                                Hola
                            </h1>
                            <h1 className={'home-h1'}>
                                Soy <strong>Joel</strong>,
                            </h1>
                            <h1 className={'home-h1'}>
                                 Fullstack Dev
                            </h1>
                            <h2 className={'home-h2'}>Desarrollador Fullstack </h2>

                            <button className={'home-cta-btn'}>
                                Ver mi CV
                            </button>

                        </div>
                        <div className={'home-joel-img'}>  </div>
                    </div>

                    <div className={'skills'}>
                        <h1>Habilidades</h1>
                        <div className={'skills-flexbox'}>

                            {
                                this.state.skills.map((skill,index)=>{
                                    return <div className={'skill'} key={index}>
                                        <h2>{skill.name}</h2>
                                        <p>{skill.description}</p>
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
