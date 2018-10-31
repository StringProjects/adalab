import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
            username: '',
            password: '',
            show: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if(this.state.show === false){
            this.setState({
                classShow: "fa-eye",
                show: true,
                type: "text"
            });
        }else{
            this.setState({
                classShow: "fa-eye-slash",
                show: false,
                type: "password"
            });
        }
    }

    _success(){
        window.location.replace('/private');
    }

    _submit(e){
        e.preventDefault();
        this.props.onSubmitBtn(this.state.username, this.state.password, false, 'error-hidden', true, this._success);
    }
    
    render() {
        const {
            onSubmitBtn,
            errorClass,
        } = this.props;
   
        return (
            <div className="container--form-landing">
                <Form className="form--style" onSubmit={this._submit.bind(this)}>
                    <FormGroup role="form">
                        <Input
                            onChange={(e) => {this.setState({username: e.target.value})}}
                            type="text"
                            className="form-control input--login-style"
                            id="email"
                            placeholder="Usuario"
                            name="email"
                        />
                    </FormGroup>
                    <FormGroup role="form">
                        <Input
                            onChange={(e) => {this.setState({password: e.target.value})}}
                            type={this.state.type}
                            className="form-control input--login-style"
                            id="pwd"
                            placeholder="Contraseña"
                            name="pswd"
                        />
                        <i
                            onClick={this.handleClick}
                            id="hide-psw"
                            className={`far ${this.state.classShow} icon--psw `}  
                        >
                        </i>
                    </FormGroup>
                    <ErrorFeedBack
                        errorClass= {errorClass}
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

WeForm.propTypes = {
    onInputEmail: PropTypes.func.isRequired,
    onInputPsw: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errorClass: PropTypes.string.isRequired,
}

export default WeForm;