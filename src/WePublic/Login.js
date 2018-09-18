import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
    Row,
    Col,
} from 'reactstrap';
import WeHeader from '../Components/WeHeader';
import WeForm from '../Components/LoginComponents/WeForm';
import logoAdalab from '../images/logo-adalab.svg';

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
            location,
            history,
            errorClass,
            } = this.props;

        // console.log('props en login raquel', this.props)

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
                            <div className= "text-wrapp">
                                <h3 className="title--login text-center">¡Hola de nuevo!</h3>
                                </div>
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
                                errorClass= {errorClass}
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
                     <p className="text-footer">2018 ©  We. by <img className="logo-adalab" src={logoAdalab} alt="logo-adalab"/> <span className="heart">❤︎</span></p>    
                </div>

            </div>
        );
    }
}

Login.propTypes = {
    onInputEmail: PropTypes.func.isRequired,
    onInputPsw: PropTypes.func.isRequired,
    onSubmitBtn: PropTypes.func.isRequired,
    getToken: PropTypes.func.isRequired,
    redirectToPrivateArea: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    errorClass: PropTypes.string.isRequired,
    
    history: PropTypes.object.isRequired,
    //Estas 2 pueden desaparecer
    openedErrorFeedback:PropTypes,
    toggleErrorFeedback: PropTypes, 
}

export default Login;