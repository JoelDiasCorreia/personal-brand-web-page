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
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    title:'Desarrollo Frontend',
                },
                {
                    picture:'/assets/undraw_design_notes.svg',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    title:'Diseño UI',
                },
                {
                    picture:'/assets/undraw_server_cluster.svg',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
                   width: 300px;
                    margin: 20px;
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
                                        this.state.rendered ?  <img src={service.picture}  width={'200px'} height={'200px'}></img>: <h2>foto</h2>
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
