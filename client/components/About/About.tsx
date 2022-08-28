import * as React from "react";
import { LanguageContext } from "../../contexts/language";
import { Stars } from "../Stars/Stars";

import { TbFileDownload } from 'react-icons/tb'

interface Experience {
    title: string;
    company: string;
    role: string;
    description: string;
    startYear: string;
    endYear: string;
}
export class About extends React.Component<any, {experiencies:Experience[] }>{
    esExperiences: Experience[] = [
        {
            title: 'Desarrollador Full-stack',
            company: 'OpenDev Pro',
            description: `
                Trabajo en un pequeño equipo responsable del desarrollo y modernización 
                de un Software de seguros de salud. Los principales objetivos son fusionar 
                2 aplicaciones heredadas monolíticas en una aplicación de arquitectura 
                de microservicios y su integración con otras aplicaciones en el entorno 
                de TI del cliente.
<
                Desarrollo de interfaces con tecnología Angular a partir de prototipos realizados 
                con Figma. Desarrollo de microservicios HTTP con Swagger sobre NodeJS y Spring Boot. 
                Conexiones de microservicios a bases de datos Oracle PL/SQL. 
                Trabaja en entornos de bajo y alto nivel. Seguimiento y Documentación de todas las 
                tareas a realizar en JIRA.

                También hablar con el equipo sobre implementaciones, mejoras, problemas de alta concurrencia y corrección de errores.
            `,
            role: 'Desarrollador Full-stack',
            startYear: 'Agosto 2021',
            endYear: 'hoy'
        },
        // {
        //     title: 'Freelance developer',
        //     company: '2 Clientes',
        //     description: 'Consultoria. Diseño de paginas web y aplicaciones web. ',
        //     role: 'Desarrollador Fullstack & Diseñador UX/UI',
        //     startYear: 'Nov 2020',
        //     endYear: 'Nov 2021'
        // },
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
        }
    ] ;
    enExperiences: Experience[] =[
        {
            title: 'Full-stack Developer',
            company: 'OpenDev Pro',
            description: 
            `
                Work in a small team responsible for development and modernization of a health insurance Software. 
                The main goals are merging 2 monolithic legacy applications into one Microservices Architecture 
                application, and its integration with other applications in the client's IT environment.

                Development of interfaces with Angular technology from prototypes made with Figma. 
                Development of HTTP microservices with Swagger on NodeJS and Spring Boot. 
                Microservices connections to Oracle PL/SQL Databases. Work on low and high levels 
                environments. Tracking and Documentation of all tasks to get done on JIRA. 

                Also discuss Implementations, improvements, high concurrence issues and bug 
                fix with the team.
            `,
            role: 'Desarrollador Fullstack',
            startYear: 'August 2021',
            endYear: 'today'
        },
        // {
        //     title: 'Freelance developer',
        //     company: '2 Clientes',
        //     description: 'Consultoria. Diseño de paginas web y aplicaciones web. ',
        //     role: 'Desarrollador Fullstack & Diseñador UX/UI',
        //     startYear: 'Nov 2020',
        //     endYear: 'Nov 2021'
        // },
        {
            title: 'Solution Designer and Product Owner',
            company: 'Siemens Mobility Argentina',
            description: 
            `
                Design and plan a project to develop a local solution for local and regional 
                railway market. Understand the needs of the clients and their pain points. 
                Creation of service business model. Meetings with engineers to shape the solution. 
                Monthly presentations to local team, CEO and CFO. Presentation to the Headquarters.  
                Reshape the project after Headquarters feed-back.
            `,
            role: 'Solution Designer and Product Owner',
            startYear: 'Dic 2018',
            endYear: 'Mar 2020'
        },
        {
            title: 'Cybersecurity Ambassador',
            company: 'Siemens Mobility Argentina',
            description: 
            `
                Work in a team responsable for the maintentence of Confidentiality, 
                Integrity,  and Disponibility of corporative information. Reporting to 
                Cibersecurity Regional Chief at USA and Local CEOs and CFOs.  Presentation 
                of security measures to all company  at monthly meetings. 

                Risk and thread analisys and plan, present and implement security measures to 
                prevent and reduce those risks and threads. Management of Residual Risks.
            `
            ,
            role: 'Cybersecurity Ambassador',
            startYear: 'Mar 2020',
            endYear: 'Ago 2021'
        },
        {
            title: 'Sales Support and testing boxes Design',
            company: 'Siemens Mobility Argentina',
            description: 
            `
                Work in small team responsible for Sales in Railway public tenders. 
                Support for Sales Presentations. Design of Catalogs of Products and solutions. 
                Design of whitepapers and Brochures. Communication in English with collaborators 
                distributed world-wide.

                Plan, develop and present of a Level Crossing Simulator project with Siemens Crossing 
                Controllers and Siemens PLC technology. It was a testing box to show customers the
                features and security of Siemens's Crossing Controllers.
            `,
            role: 'Sales Support and testing boxes Design',
            startYear: 'Dic 2018',
            endYear: 'Mar 2020'
        }
    ];
    constructor(props: any) {
        console.log("About constructor");
        super(props);
        this.state ={
            experiencies:this.esExperiences
        }
    }
    render(){
        const css = `
            .about{
                margin-top: 200px;
                position: relative;
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
                position: relative;
            }
            .about-picture img{
                width: inherit;
                height: inherit;
            }
            
            .about-description{
                padding: 15px;
                max-width:700px;
            }
            .about-extended-description{
                padding: 15px;
                display: flex;
                max-width: 1200px;
                flex-direction: column;
                align-content: center;
                align-items: center;
                margin: auto;
            
            }
            .about-description h2 strong{
                color: #19F4D6;
            }
            a{
                text-decoration: none;
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
            .cv-btn p{
                text-decoration: none;
                margin: 5px;
            }
             .cv-btn:focus{
                background: #47484B;
                color: #19F4D6;
            }
            .cv-btn:hover{
                color: #FF004D;
                border: 2px solid #FF004D;
                font-weight: 900;
            }
            .experiences{
                max-width: 1200px;
                margin: auto;
                padding: 15px;
            }
            
            .experiences-list{
                max-width: 1200px;
                padding: 15px;
                position: relative;
            }
            .experience{
                background: #2b2b2b;
                border-radius: 20px;
                border: 2px solid #19F4D6;
                max-width: 1200px;
                margin: auto;
                padding: 40px;
                margin: 15px;
            }
             .experience h2{
                color: #19F4D6;
                font-size: 24px;
                 
            }
            .experience h3{
                font-size: 20px;
            }
            .experience h4{
                font-size: 18px;
            }
        `;
        return (
            <div className={'about'}>
                <Stars></Stars>
                <style>
                    {css}
                </style>
                
                <LanguageContext.Consumer>
                    
                    {
                        ({lang, switchLang}) => (
                            <div>
                                <div className={'about-card'}>
                                <div className={'about-picture'}>
                                    <img alt={"foto de Joel"} src={'/assets/joel.jpg'} />
                              
                                </div>
                                {
                                    lang === 'ES' ?
                                    <div className={'about-description'}>
                                        <h1>Sobre mi</h1>
                                        <h2> Mi nombre es  <strong>Joel Dias Correia</strong>. </h2>
                                        <p>
                                            Me apasiona resolver problemas de negocios a través de la tecnología. 
                                            Me especializo en desarrollo de software y diseño UX/UI.
                                        </p>
                                        <p>
                                            Aspiro a desarrollarme en la industria de IT como ingeniero de software y diseñador de productos.
                                        </p>
                                        <a href={'/assets/CV - Joel Dias Correia_compressed.pdf' } target="_blank">
                                            <button className={'cv-btn'}>
                                                <TbFileDownload size={28}></TbFileDownload>
                                                <p>Ver mi CV</p>
                                            </button>
                                        </a>
                                    </div>
                                    :
                                    <div className={'about-description'}>
                                
                                    <h1>About me</h1>

                                    <h2> My name is <strong>Joel Dias Correia</strong>. </h2>
                                    <p>
                                        Hello, my name is Joel and I am passionate about solving business problems throw technology. 
                                        I specialize on Software development and UX/UI design.
                                    </p>
                                    <p>
                                        I look forward to developing myself in the IT industry as a software engineer and product designer.
                                    </p>
                                    <a href={'/assets/CV - Joel Dias Correia_compressed.pdf' } target="_blank">
                                        <button className={'cv-btn'}>
                                            Download my CV
                                        </button>
                                    </a>
                                </div>
                            }
                            
                            </div>
                            {
                                    lang === 'ES' ?
                                    <div className={'about-extended-description'}>
                                        <p>
                                            Mi carrera comenzó hace 4 años en la industria de la tecnología 
                                            ferroviaria en una empresa multinacional donde me profesionalicé 
                                            en habilidades blandas y comunicación mientras aprendía sobre sus 
                                            tecnologías. Allí aprendí a trabajar de forma remota con equipos
                                            distribuidos por todo el mundo utilizando el inglés como herramienta
                                            de comunicación.
                                        </p>
                                        <p>
                                            En 2021, me mudé a la industria del desarrollo de software. 
                                            Porque he estado estudiando software desde los 11 años. 
                                            En mi primera experiencia de desarrollo, pude fusionar todo 
                                            el conocimiento que había aprendido cuando era más joven 
                                            con las metodologías que incorporé en ese trabajo.
                                        </p>
                                    </div>
                                    :
                                    <div className={'about-extended-description'}>
                                        <p>
                                            My career started 4 years ago on the railway technology industry 
                                            at a multinational company where I got professional on soft-skills and 
                                            communication while I was learning about its technologies. 
                                            There I learned how to work remotely with world-wide distributed 
                                            teams using English as communication tool.
                                        </p>
                                        <p>
                                            In 2021, I moved to software development industry. Because
                                            I have been studying software it since I was 11. At my first 
                                            development experience, I could merge all the knowledge I had
                                            learned when I was younger with the methodologies I incorporated 
                                            in that job.
                                        </p>
                                  </div>
                            }
                            <div className={'experiences'}>
                                {
                                    lang === 'EN' ? <h1>Experiences</h1> : <h1>Experiencias</h1>
                                }
                                
                                <div className={'experiences-list'}>
                                    {
                                        this.state.experiencies.map((exp: Experience, index:number)=>{
                                            return <div className={'experience'} key={index} >
                                                <h2> { exp.title }</h2>
                                                <h3> { exp.company } </h3>
                                                {
                                                    lang === 'EN' ? <h4>Since {exp.startYear} to { exp.endYear }</h4> : <h4>Desde {exp.startYear} a { exp.endYear }</h4>
                                                }
                                                <p> { exp.description } </p>
                                            </div>
                                        })
                                    }
                                </div>

                            </div>
                            </div>
                            

                        )
                    }
                </LanguageContext.Consumer>
                
            </div>
        )
    }
}
