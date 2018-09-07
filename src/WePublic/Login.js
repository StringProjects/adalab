import React, {Component} from 'react';
import WeHeader from '../Components/WeHeader';
import WeHeaderThread from '../Components/WeHeaderThread';
import WeForm from '../Components/LoginComponents/WeForm';
import WeInputButton from '../Components/WeInputButton';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Row,
    Col,
    Nav
} from 'reactstrap';

class Login extends Component {
    render() {
        const {
            onInputEmail,
            onInputPsw,
            openedErrorFeedback,
            toggleErrorFeedback,
            onSubmitBtn
            } = this.props;
        console.log('Login openedErrorFeedback',openedErrorFeedback);
        return (
            <div className="wrapper">
                <header className="header--landing header">
                    <WeHeader/>
                </header>
                <main className="main--landing">
                    <Row>
                        <Col
                            xl={{
                            size: 4,
                            offset: 2
                        }}
                            lg={{
                            size: 6,
                            offset: 0
                        }}
                            md={{
                            size: 8,
                            offset: 2
                        }}>
                            <div className="container--text-login">
                                <h1 className="title--landing text-center">¡Hola de nuevo!</h1>
                                <p className="subtitle--landing text-center">Escribe tu email y contraseña para entrar en We.</p>
                            </div>
                        </Col>
                        <Col
                            xl="4"
                            lg={{
                            size: 6,
                            offset: 0
                        }}
                            md={{
                            size: 8,
                            offset: 2
                        }}>
                            <WeForm 
                                onInputEmail={onInputEmail} 
                                onInputPsw={onInputPsw}
                                openedErrorFeedback={openedErrorFeedback}
                                toggleErrorFeedback={toggleErrorFeedback}
                                onSubmitBtn={onSubmitBtn}
                            />
                        </Col>

                    </Row>

                </main>
                {/* <WeHeaderThread/> */}

            </div>
        );
    }
}

export default Login;