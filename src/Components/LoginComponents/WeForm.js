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
        this.handleClick = this
            .handleClick
            .bind(this);
    }
    handleClick(event) {
        if (event.target.classList.contains('show-off')) {
            document
                .getElementById('pwd')
                .type = 'text';
            document
                .getElementById('hide-psw')
                .classList
                .remove('show-off');
            document
                .getElementById('hide-psw')
                .classList
                .remove('fa-eye-slash');
            document
                .getElementById('hide-psw')
                .classList
                .add('fa-eye');
        } else {
            document
                .getElementById('pwd')
                .type = 'password';
            document
                .getElementById('hide-psw')
                .classList
                .add('show-off');
            document
                .getElementById('hide-psw')
                .classList
                .add('fa-eye-slash');
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
                                type="password"
                                className="form-control input--login-style"
                                id="pwd"
                                placeholder="Contraseña"
                                name="pswd"/>
                            <i
                                onClick={this.handleClick}
                                id="hide-psw"
                                className="far fa-eye-slash icon--psw show-off"></i>
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
