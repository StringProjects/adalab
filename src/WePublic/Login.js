import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Col,
} from 'reactstrap';
import WeHeader from '../Components/WeHeader';
import WeForm from '../Components/LoginComponents/WeForm';
import logoAdalab from '../images/logo-adalab.svg';

import {
    connect
  } from 'react-redux';

import {
    fetchSession
} from '../actions';

class Login extends Component {
    componentWillUnmount() {
        const { turnOffJustLog } = this.props
        turnOffJustLog();
    }
    render() {
        const {
            onSubmitBtn,
            redirectToPrivateArea,
            location,
            errorClass,
            justLog,
        } = this.props;

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
                                <div className="text-wrapp">
                                    <h3 className="title--login text-center">
                                        ¡Hola de nuevo!
                                    </h3>
                                </div>
                                <p className="subtitle--landing text-center">
                                    Escribe tu nombre de usuario y contraseña para entrar en We.
                                </p>
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
                                errorClass={errorClass}
                                onSubmitBtn={this.props.fetchSession}
                            />
                        </Col>
                    </Row>
                </main>
                <div className="footer-login">
                    <p className="text-footer">
                        2018 ©  We. by
                        <a 
                            href="https://adalab.es/" 
                            target="_blank"
                        >
                            <img 
                                className="logo-adalab" 
                                src={logoAdalab} 
                                alt="logo-adalab"
                            />
                        </a>
                        <span className="heart">
                            ❤︎
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    onInputEmail: PropTypes.func.isRequired,
    onInputPsw: PropTypes.func.isRequired,
    onSubmitBtn: PropTypes.func.isRequired,
    redirectToPrivateArea: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    errorClass: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
    return {
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
      fetchSession: (nickname, password, justLog, errorClass, redirectToPrivateArea, success) => dispatch(fetchSession(nickname, password, justLog, errorClass, redirectToPrivateArea, success))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login)