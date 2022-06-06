import * as React from "react";
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
                    picture:'/assets/undraw_programming.svg',
                    description:'Consultoria para el desarrollo de proyectos de software. Consultoria para el desarollo, actualización de paginas web. Consultas sobre arquitectura de microservicios.',
                    title:'Consultoria',
                },
                {
                    picture:'/assets/undraw_programming.svg',
                    description:' Desarrollo de Frontend a partir de analisis funcional y diseño de interfaces. Implementacion de disintos patrones de diseño de POO.',
                    title:'Desarrollo Frontend',
                },
                {
                    picture:'/assets/undraw_design_notes.svg',
                    description:'Diseño de User Experience, User Interface y prototipado de aplicaciones y paginas web.',
                    title:'Diseño UI',
                },
                {
                    picture:'/assets/undraw_server_cluster.svg',
                    description:'Desarrollo de micro servicios.',
                    title:'Desarrollo Backend',
                }
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
            }
            .services-gallery{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                flex-direction: row;
                align-items: center;
            }
            .service-card{
                    width: 280px;
                    margin: 20px;
                    min-height: 600px;
                    padding: 15px;
                    border: 3px solid;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
            }
            
            .service-card-btn{
                padding: 15px 25px;
                background: #2D2E32;
                color: white;
                border: 2px solid white;
                font-family: monospace;
                font-size: 18px;
                cursor: pointer;
                width: 100%;
            }
             .service-card-btn:focus{
                background: #47484B;
                color: #19F4D6;
                border: 2px solid #19F4D6;
            }
            .service-card:hover{
                background: #2D2E32;
                color: #19F4D6;
       
            }
            .service-card-btn:hover{
                background: #47484B;
                color: #19F4D6;
                border: 2px solid #19F4D6;
            }
        `;
        return (
            <div className={'services'}>
                <style>
                    {css}
                </style>
                <div className={'services-gallery'}>
                    {
                        this.state?.services ?

                            this.state.services.map((service:Service,i:number) => {

                                return <div className={'service-card'} key={i}>
                                    <h1> {service.title } </h1>
                                    {
                                        this.state.rendered ?  <img src={service.picture}  width={'200px'} height={'200px'}  alt={"foto de Joel"}></img>: <h2>foto</h2>
                                    }

                                    <p>
                                        {service.description }
                                    </p>
                                    <button className={'service-card-btn'}>
                                        Contactar
                                    </button>
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
