import React, {Component} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';
import ErrorFeedBack from './ErrorFeedBack';

class WeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "password",
            classShow: "fa-eye-slash",
            show: false

        }

        this.handleClick = this
            .handleClick
            .bind(this);
    }
    handleClick(event) {
        if(this.state.show === false){
            this.setState({
                classShow: "fa-eye",
                show: true,
                type: "text"
             })
        }else{
            this.setState({
                classShow: "fa-eye-slash",
                show: false,
                type: "password"
             })
        }
   
    }
    render() {
        const {
            onInputEmail, 
            onInputPsw, 
            onSubmitBtn,
            getToken
        } = this.props;
   
        return (
            <div className="container--form-landing">
                <Form className="form--style" onSubmit={onSubmitBtn}>
                        <FormGroup role="form">
                            <Input
                                onChange={onInputEmail}
                                type="text"
                                className="form-control input--login-style"
                                id="email"
                                placeholder="Usuario"
                                name="email"/>
                        </FormGroup>
                        <FormGroup role="form">
                            <Input
                                onChange={onInputPsw}
                                type={this.state.type}
                                className="form-control input--login-style"
                                id="pwd"
                                placeholder="Contraseña"
                                name="pswd"/>
                            <i
                                onClick={this.handleClick}
                                id="hide-psw"
                                className={`far ${this.state.classShow} icon--psw `}  ></i>
                        </FormGroup>
                        <ErrorFeedBack
                            errorClass= {this.props.errorClass}
                            className="error-message"
                        />
                        
                        <Button 
                            type="submit" 
                            className="btn btn--login"  
                        >
                            <i className="fas fa-chevron-right"></i>
                        </Button>
            
                </Form>
            </div>
        );
    }
}

export default WeForm;