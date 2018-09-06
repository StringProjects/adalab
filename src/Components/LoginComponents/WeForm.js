import React, {Component} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Row,
    Col,
    Nav
} from 'reactstrap';

class WeForm extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this
            .handleClick
            .bind(this);
    }

    handleClick(event) {

        if (event.target.classList.contains('show-off')) {
            console.log("entra")
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
        const {onInputEmail, onInputPsw} = this.props;
        return (
            <div className="container--form-landing">
                <Form className="form--style">
                    <FormGroup className="form--group">
                        <FormGroup>
                            <Input
                                onChange={onInputEmail}
                                type="email"
                                className="form-control input--login-style"
                                id="email"
                                placeholder="Email"
                                name="email"/>
                        </FormGroup>
                        <FormGroup>
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
                    </FormGroup>
                    <Button type="submit" className="btn btn--login">
                        <i className="fas fa-chevron-right"></i>
                    </Button>
                </Form>
            </div>
        );
    }
}

export default WeForm;