import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Nav} from 'reactstrap';
import ErrorFeedback from '../LoginComponents/ErrorFeedback';
import { Link } from 'react-router-dom';

class WeForm extends Component {
    render() {
        const {
            openedErrorFeedback,
            toggleErrorFeedback,
        } = this.props;
        console.log('WeForm openedErrorFeedback',openedErrorFeedback);
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
                    { openedErrorFeedback && <ErrorFeedback />}
                    <button
                        onClick={toggleErrorFeedback}
                    >
                        Mostrar mensaje de error
                    </button>
                    <Link 
                        to='/private' 
                        className="Button-option-link">
                        <Button 
                            type="submit" 
                            className="btn btn--login" 
                        >
                            <i className="fas fa-chevron-right"></i>
                        </Button>
                    </Link>
                </Form>
            </div>
        );
    }
}

export default WeForm;