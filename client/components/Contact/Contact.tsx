import * as React from "react";

export class Contact extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    render() {
        const css = `
            .contact{
                max-width: 1200px;
                margin: auto;
                margin-top: 100px;
            }
            .contact-form{
                border: 2px solid #19F4D6;
                padding: 20px;
            }
            .flex-horizontal-wrapper{
                 display: flex;
                flex-wrap: wrap;
                flex-direction: row;
            }
            .contact-field{
                padding: 15px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
            .contact-field input{
                padding: 10px;
                margin: 10px 0px;
                background: #2D2E32;
                color: white;
                font-family: monospace;
                font-size: 18px;
                border: 2px solid #19F4D6;
            }
            .contact-field input:focus{
                border: none;
            }
            .contact-field label{
                background: #2D2E32;
                color: white;
                font-family: monospace;
                font-size: 16px;
            }
            .contact-field textarea{
                padding: 10px;
                background: #2D2E32;
                color: white;
                margin: 10px 0px;
                font-family: monospace;
                font-size: 18px;
                border: 2px solid #19F4D6;
                max-width: 98%;
                min-width: 98%;
                min-height: 200px;
                max-height: 300px;
            }
            .submit-btn{
                padding: 15px 25px;
                margin: 20px;
                background: #2D2E32;
                color: #19F4D6;
                border: 2px solid #19F4D6;
                font-family: monospace;
                font-size: 18px;
                cursor: pointer;
            }
             .submit-btn:focus{
                background: #47484B;
                color: #19F4D6;
            }
            .submit-btn:hover{
                background: #47484B;
                color: #19F4D6;
            }
            `;
        return (
            <div className={'contact'}>
                <style>
                    {css}
                </style>
                <div className={'contact-form'}>
                    <h1>Contacto</h1>
                    <div className={'flex-horizontal-wrapper'}>
                        <div className={'contact-field'}>
                            <label>Nombre</label>
                            <input type={'text'}/>
                        </div>
                        <div className={'contact-field'}>
                            <label>Asunto</label>
                            <input type={'text'}/>
                        </div>
                        <div className={'contact-field'}>
                            <label>Email</label>
                            <input type={'email'}/>
                        </div>
                        <div className={'contact-field'}>
                            <label>Phone</label>
                            <input type={'tel'}/>
                        </div>
                    </div>

                    <div className={'contact-field'}>
                        <label>Mensaje</label>
                        <textarea />
                    </div>

                    <button className={'submit-btn'}>
                        Enviar
                    </button>
                </div>
            </div>
        );
    }
}
