import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Nav} from 'reactstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '@fortawesome/fontawesome-free/css/all.css';

class WeForm extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Form className="form--style">
                    <FormGroup className="form--group">
                        <FormGroup>
                            <Input
                                type="email"
                                className="form-control input--login-style"
                                id="email"
                                placeholder="Email"
                                name="email"/>
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="password"
                                className="form-control input--login-style"
                                id="pwd"
                                placeholder="Contraseña"
                                name="pswd"/>
                            <i className="far fa-eye-slash icon--psw"></i>
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