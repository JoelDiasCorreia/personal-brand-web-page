import * as React from "react";
interface Experience {
    title: string;
    company: string;
    role: string;
    description: string;
    startYear: string;
    endYear: string;
}
export class About extends React.Component<any, { experiencies:Experience[] }>{
    constructor(props: any) {
        super(props);
        this.state ={
            experiencies: [
                {
                    title: 'Desarrollador Profesional',
                    company: 'OpenDevPro',
                    description: 'Desarrollo de interfaces de usuario en Angular y desarrollo de microservicios en Springboot y NodeJs. Metodologia Agil SCRUM con sprints de 14 dias..',
                    role: 'Desarrollador Fullstack',
                    startYear: '2022',
                    endYear: 'actualidad'
                },
                {
                    title: 'Freelance developer',
                    company: '2 Clientes',
                    description: 'Consultoria. Diseño de paginas web y aplicaciones web. ',
                    role: 'Desarrollador Fullstack & Diseñador UX/UI',
                    startYear: 'Nov 2020',
                    endYear: 'Nov 2021'
                },
                {
                    title: 'Asesor de Ciberseguridad',
                    company: 'Siemens Mobility Argentina',
                    description: 'Comunicación Remota en ingles con equipos distribuidos internacionalmente. Realizada reportes mensuales a presentar a el director ejecutivo y a la directoria de ciberseguridad de la region.',
                    role: 'Asesor de ciberseguridad',
                    startYear: 'Mar 2020',
                    endYear: 'Ago 2021'
                },
                {
                    title: 'Soporte de ventas',
                    company: 'Siemens Mobility Argentina',
                    description: 'Desarrollo de presentaciones e investigaciones estrategicas. Soporte en generación de ofertas para licitaciones publicas.',
                    role: 'Desarrollador de probadores y soporte de ventas',
                    startYear: 'Dic 2018',
                    endYear: 'Mar 2020'
                },
                {
                    title: 'Proyecto Simulador de pasos a nivel',
                    company: 'Siemens Mobility Argentina',
                    description: 'Diseñe , Propuse y desarrolle un Simulador de pasos a Nivel para realizar presentaciones de ventas de los Productos de Siemens Mobility a sus Clientes.  ',
                    role: 'Pasante en el area de ventas',
                    startYear: 'Dic 2018',
                    endYear: 'Mar 2020'
                } ,
                {
                    title: 'Soporte tecnico en el Planetario',
                    company: 'Siemens Fundación Argentina',
                    description: 'Instalación de equipamientos electronicos en el planetario de la ciudad de Buenos Aires. tales como Equipos de luces y sistemas de control inalambrios',
                    role: 'Soporte Tecnico',
                    startYear: 'Jun 2018',
                    endYear: 'Sep 2018'
                }

            ]
        }
    }
    render(){
        const css = `
            .about{
                margin-top: 200px
            }
            .about-card{
                max-width: 1200px;
                margin: auto;
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                flex-direction: row;
                align-content: center;
                align-items: center;
            }
            .about-picture{
                padding: 15px;
                height: 400px;
                width: 400px;
            }
            .about-picture img{
                width: inherit;
                height: inherit;
            }
            
            .about-description{
                       padding: 15px;
                       max-width:700px;
            }
            .about-description h2 strong{
                color: #19F4D6;
            }
            .about-cv-btn{
                padding: 15px 25px;
                background: #2D2E32;
                color: #19F4D6;
                border: 2px solid #19F4D6;
                font-family: monospace;
                font-size: 18px;
                cursor: pointer;
            }
             .about-cv-btn:focus{
                background: #47484B;
                color: #19F4D6;
            }
            .about-cv-btn:hover{
                background: #47484B;
                color: #19F4D6;
            }
            .experiences{
                max-width: 1200px;
                  margin: auto;
                   padding: 15px;
            }
            
            .experiences-list{
                 max-width: 1200px;
                    padding: 15px;
            }
            .experience{
                  border: 2px solid #19F4D6;
                  max-width: 1200px;
                  margin: auto;
                  padding: 15px;
                  margin: 15px;
            }
             .experience h2{
                  color: #19F4D6;
                 
            }
        `;
        return (
            <div className={'about'}>
                <style>
                    {css}
                </style>

                <div className={'about-card'}>
                    <div className={'about-picture'}>
                        <img alt={"foto de Joel"} src={'/assets/joel.jpg'} />
                    </div>
                    <div className={'about-description'}>
                        <h1>Sobre mi</h1>

                        <h2> soy  <strong>Desarrollador FullStack </strong>  </h2>

                        <p>
                            Soy una persona proactiva, curiosa
                        </p>
                        <p>
                            Desde pequeño siempre tuve interés por la ciencia.
                            Comenze a los 11 años cuando mi hermano me enseño los conceptos basicos de la programación.
                            Luego continue mis estudios en el intento de desarrollar un videojuego.
                        </p>
                        <p>
                            En mi adolescencia fui a una escuela tecnica especializada en electronica EEST N°1 "Eduardo Ader".
                            donde aprendí multiples conceptos de electronica y telecomunicaciones. Entre esos conceptos,
                            por ejemplo el como la electricidad se transforma en información.
                        </p>
                        <p>
                            Tengo un gran interés por el desarrollo de negocios basados en modelos digitales.
                            Y la resolución de problemas de negocio a través de la tecnologia.
                        </p>
                        <p>
                            Mis Hobbies son Skateboard, Bodyboard, andar en bici y los tatuajes.
                        </p>
                        <a href={'/assets/CV - Joel Dias Correia_compressed.pdf' } target="_blank">
                            <button className={'about-cv-btn'}>
                                Ver mi CV
                            </button>
                        </a>


                    </div>

                </div>

                <div className={'experiences'}>
                    <h1>Experiencias</h1>
                    <div className={'experiences-list'}>
                        {
                            this.state.experiencies.map((exp: Experience, index:number)=>{
                                return <div className={'experience'} key={index} >
                                    <h2> { exp.title }</h2>
                                    <h3> { exp.company } </h3>
                                    <h4>Desde {exp.startYear} a { exp.endYear }</h4>
                                    <p> { exp.description } </p>
                                </div>
                            })
                        }
                    </div>

                </div>

            </div>
        )
    }
}
