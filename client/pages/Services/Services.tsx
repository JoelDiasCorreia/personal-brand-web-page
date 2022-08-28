import * as React from "react";
import {Link} from "react-router-dom";
interface Service {
    picture: string;
    description: string;
    title: string;
}

export class Services extends React.Component<any, { services:Service[],rendered:boolean}>{
    constructor(props:any) {
        super(props);
        this.state  = {
            rendered: false,
            services:[
                {
                    picture:'/assets/undraw_group_video.svg',
                    description:'Consultoria para el desarollo, actualización de paginas web.',
                    title:'Consultoria Web',
                },
                {
                    picture:'/assets/undraw_programming.svg',
                    description:'Diseño, Desarrollo y puesta en producción de Paginas Web',
                    title:'Desarrollo de Pagina Web',
                },
                {
                    picture:'/assets/undraw_responsive.svg',
                    description:'Diseño, Desarrollo y puesta en producción de Aplicaciones',
                    title:'Desarrollo de Aplicaciones',
                },
                // {
                //     picture:'/assets/undraw_programming.svg',
                //     description:' Desarrollo de Frontend a partir de analisis funcional y diseño de interfaces. Implementacion de disintos patrones de diseño de POO.',
                //     title:'Desarrollo Frontend',
                // },
                // {
                //     picture:'/assets/undraw_design_notes.svg',
                //     description:'Diseño de User Experience, User Interface y prototipado de aplicaciones y paginas web.',
                //     title:'Diseño UI',
                // },
                // {
                //     picture:'/assets/undraw_server_cluster.svg',
                //     description:'Desarrollo de micro servicios.',
                //     title:'Desarrollo Backend',
                // }
            ],
        };
    }
    componentDidMount(){
        // client side
        console.log("componentDidMount")
        this.setState({
            rendered: true,
        })
    }
    componentWillMount(){
        // server side
        console.log("componentWillMount")
    }

    componentDidUpdate(){

        // client side
        console.log("componentDidUpdate")
    }

    render() {
        const css = `
            .services{
                margin-top: 100px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                align-content: center;
            }
            .services-gallery{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                flex-direction: row;
                align-items: center;
                max-width: 1100px;
            }
            .service-card{
                z-index: 1;
                width: 265px;
                margin: 20px;
                height: 520px;
                padding: 15px 25px;
                border: 0px solid #2D2E32
                display: flex;
                flex-direction: column;
                align-items: center;
                -webkit-transition: all 200ms ease-in;
                -moz-transition: all 200ms ease-in;
                -o-transition: all 200ms ease-in;
                transition: all 200ms ease-in;
                background: #2b2b2b;
                border-radius: 0.8rem;
                border-bottom: 2px solid #19F4D6;
                color: #19F4D6;
                box-shadow: 0 1.6rem 2.4rem rgb(0 0 0 / 25%);
                align-content: center;
                justify-content: space-evenly;
                text-align: center;
            }
            
            .service-card:hover{
                color: #19F4D6;
                border: 3px solid #19F4D6;
                
            }
            .service-card-btn{
                padding: 15px 25px;
                background: #2D2E32;
                color: white;
                border: 2px solid transparent;
                border: 2px solid #19F4D6;
                font-family: monospace;
                font-size: 18px;
                cursor: pointer;
                width: 100%;
                border-radius: 10px;
                background: #2b2b2b;
                color: #19F4D6;

                -webkit-transition: all 200ms ease-in;
                -moz-transition: all 200ms ease-in;
                -o-transition: all 200ms ease-in;
                transition: all 200ms ease-in;
            }
            .service-card-btn:focus{
                background: #47484B;
                color: #19F4D6;
                border: 2px solid #19F4D6;
                
            }
            .service-card-btn:hover{
                color: #FF004D;
                border: 2px solid #FF004D;
            }
            .service-skeleton-img{
                width: 200px;
                height: 200px;
                background: #353536;
            }
        `;
        return (
            <div className={'services'}>
                <style>
                    {css}
                </style>
                <h1>Servicios</h1>
                <div className={'services-gallery'}>
                    {
                        this.state?.services ?

                            this.state.services.map((service:Service,i:number) => {

                                return <div className={'service-card'} key={i}>
                                    <h1> {service.title } </h1>
                                    {
                                        this.state.rendered ?
                                            <img src={service.picture}  width={'200px'} height={'200px'}  alt={"foto de Joel"}></img>
                                            :
                                            <div className={'service-skeleton-img'}> </div>
                                    }

                                    <p>
                                        {service.description }
                                    </p>
                                    <Link to={"/contact?service=" +  service.title.toLowerCase() }>
                                        <button className={'service-card-btn'}>
                                            Contactar
                                        </button>
                                    </Link>

                                </div>
                            })
                            :

                            null

                    }
                </div>
            </div>
        );
    }
}
