import * as React from "react";
import {AiFillCheckCircle} from "react-icons/ai";

export class Contact extends React.Component<
    any,
    {
        search: string,
        messageSent:boolean,
        name: string,
        subject: string,
        email: string,
        phone: string,
        message: string,
        errorMessage: string | null;
    }>{
    constructor(props:any) {

        super(props);

        // function bidding
        this.handleChangeSubject = this.handleChangeSubject.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.setFieldValue = this.setFieldValue.bind(this);
        this.onSuccess = this.onSuccess.bind(this);

        // Query param
        let service: string = '';

        // GET Query params (Browser side)
        try {
            const queryParams = new URLSearchParams(document.location.search)
            service = queryParams.get("service") as string;
        }catch (e) {  }

        // set State
        this.state = {
            search: '',
            messageSent: false,
            name: '',
            subject: service ? service.toUpperCase() : '',
            email: '',
            phone: '',
            message: '',
            errorMessage: null
        }

    }

    setFieldValue(field:string, value: string){
        let rest:any = {}
        rest[field] = value;
        this.setState(rest);
    }

    onSuccess(){
        this.setState({
            search: '',
            messageSent: true,
            name: '',
            subject: '',
            email: '',
            phone: '',
            message: ''
        });
    }
    handleChangeName(event:any){
        this.setFieldValue('name', event.target.value)
    }
    handleChangeSubject(event:any){
        this.setFieldValue('subject', event.target.value)
    }
    handleChangeEmail(event:any){
        this.setFieldValue('email', event.target.value)
    }
    handleChangePhone(event:any){
        this.setFieldValue('phone', event.target.value)
    }
    handleChangeMessage(event:any){
        this.setFieldValue('message', event.target.value)
    }

    sendRequest() {
        // Validaciones del formulario
        if(!this.state.message){
            this.setFieldValue('errorMessage',`Debes completar el campo mensaje`);
            return;
        }
        else if(!this.state.subject){
            this.setFieldValue('errorMessage',`Debes completar el campo asunto`);
            return;
        }
        else if(!this.state.email){
            this.setFieldValue('errorMessage',`Debes completar el campo email`);
            return;
        }
        else if(!this.state.name){
            this.setFieldValue('errorMessage',`Debes completar el campo nombre`);
            return;
        } else if(!this.state.name){
            this.setFieldValue('errorMessage',`Debes completar el campo telefono`);
            return;
        }

        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    name: this.state.name,
                    subject: this.state.subject,
                    email: this.state.email,
                    phone: this.state.phone,
                    message: this.state.message
                }
            )
        };
        fetch('/contacto', requestOptions)
            .then(response => response.json())
            .then(res => {
                res.success ?  this.onSuccess(): alert('Ocurrió un error al enviar tu mensaje.');
            });
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
                -webkit-transition: all 0.15s ease-in;
                -moz-transition: all 0.15s ease-in;
                -o-transition: all 0.15s ease-in;
                transition: all 0.15s ease-in;
            }
            .flex-horizontal-wrapper{
                 display: flex;
                flex-wrap: wrap;
                flex-direction: row;
            }
            .contact-field{
                padding: 5px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
            .contact-field label input{
                background: #2D2E32;
                color: white;
                font-family: monospace;
                font-size: 18px;
                border: 2px solid #19F4D6;
                padding: 10px;
                margin: 10px 0px;
                width: 215px;
            }
            .contact-field label input:focus{
                border: none;
                
            }
            .contact-field label{
                background: #2D2E32;
                color: white;
                font-family: monospace;
                font-size: 16px;
                padding: 10px;
                margin: 10px 0px;
                display: flex;
                flex-direction: column;
                width: -webkit-fill-available;
            }
            .contact-field label textarea{
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
            .contact-success-message{
              display: flex;
                flex-direction: row;
                padding: 15px;
                flex-wrap: nowrap;
                align-content: center;
                align-items: center;
                justify-content: flex-start;
                color: #19F4D6;
            }
            .contact-success-message p{
                padding: 10px;
                color: #19F4D6;
                font-size: 18px;
            }
            `;
        return (
            <div className={'contact'}>
                <style>
                    {css}
                </style>
                <div className={'contact-form'}>
                    <h1>Contacto</h1>
                    {
                        !this.state.messageSent ?
                        <div>
                            <div className={'flex-horizontal-wrapper'}>
                                <div className={'contact-field'}>
                                    <label>
                                        Nombre
                                        <input value={this.state.name} onChange={this.handleChangeName} type={'text'}/>
                                    </label>

                                </div>
                                <div className={'contact-field'}>
                                    <label>
                                        Asunto
                                        <input type={'text'} value={this.state.subject} onChange={this.handleChangeSubject} />
                                    </label>

                                </div>
                                <div className={'contact-field'}>
                                    <label>
                                        Email
                                        <input type={'email'} value={this.state.email} onChange={this.handleChangeEmail} />
                                    </label>

                                </div>
                                <div className={'contact-field'}>
                                    <label>
                                        Phone
                                        <input type={'tel'} value={this.state.phone} onChange={this.handleChangePhone} />
                                    </label>

                                </div>

                            </div>
                            <div className={'contact-field'}>
                                <label>
                                    Mensaje
                                    <textarea value={this.state.message} onChange={this.handleChangeMessage} />
                                </label>

                            </div>
                            {
                                this.state.errorMessage ? this.state.errorMessage : null
                            }
                            <button className={'submit-btn'} onClick={()=>{this.sendRequest()}}>
                                Enviar
                            </button>
                        </div>
                        :
                        <div className={'contact-success-message'}>
                            <AiFillCheckCircle size={20} color={'#19F4D6'}></AiFillCheckCircle>
                            <p>
                                Mensaje Enviado con exito
                            </p>
                        </div>

                    }
                </div>
            </div>
        );
    }
}
