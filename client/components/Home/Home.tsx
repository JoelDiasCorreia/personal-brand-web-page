import * as React from "react";

export class Home extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
    }

    render() {
        const css =`
            .home{
   
                margin: 0px;
                width: 100%;
                min-height: 85vh
            }
            
            .home-fist-card{
                   margin: 25px;
                   margin-top: 100px;
                    padding: 15px;
                    position: absolute;
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
                position: absolute;
                right: 100px;
                top: 200px;
                background-image: url( ${'/assets/joel.jpg' } ) ;
                background-repeat: round;
                width: 350px;
                height: 350px;
                border-radius: 1000px;
                z-index:10;
            }
            
        `
        return (
            <div className={'home'}>
                <div className={'home-bkgnd-img'}>  </div>

                <style>
                    {css}
                </style>
                <div className={'home-fist-card'}>
                    <h1 className={'home-h1'}>
                        Hello
                    </h1>
                    <h1 className={'home-h1'}>
                        Im <strong>Joel</strong>,
                    </h1>
                    <h1 className={'home-h1'}>
                        Web developer
                    </h1>
                    <h2 className={'home-h2'}>Full Stack Developer</h2>

                    <button className={'home-cta-btn'}>
                        View my CV
                    </button>
                </div>
                <div className={'home-joel-img'}>  </div>
            </div>
        );
    }
}
