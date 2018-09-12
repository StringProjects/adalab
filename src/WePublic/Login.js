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
import { Redirect } from 'react-router-dom';

class Login extends Component {

    render() {

        const {
            onInputEmail,
            onInputPsw,
            openedErrorFeedback,
            toggleErrorFeedback,
            onSubmitBtn,
            getToken,
            redirectToPrivateArea,
            location
            } = this.props;



        const { from } = location.state || { from: { pathname: '/private'}};

        if (redirectToPrivateArea === true) {
            return <Redirect to={from} />
        }

        return (
            <div className="wrapper-login">
                <header className="header--login">
                    <WeHeader/>
                </header>
                <main className="main--login">
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
                                <h3 className="title--login text-center">¡Hola de nuevo!</h3>
                                <p className="subtitle--landing text-center">Escribe tu nombre de ususario y contraseña para entrar en We.</p>
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
                                errorClass= {this.props.errorClass}
                                onInputEmail={onInputEmail} 
                                onInputPsw={onInputPsw}
                                openedErrorFeedback={openedErrorFeedback}
                                toggleErrorFeedback={toggleErrorFeedback}
                                onSubmitBtn={onSubmitBtn}
                                getToken={getToken}
                            />
                        </Col>

                    </Row>
                 
                </main>
                <div className="footer-login">
                     <p className="text-footer">2018 ©  We. by AdaLab <span className="heart">❤︎</span></p>    
                </div>

            </div>
        );
    }
}

export default Login;