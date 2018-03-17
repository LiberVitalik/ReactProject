import React, { Component } from 'react';

import './loginForm.scss';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                signUpEmail: '',
                signUpPassword: ''
            }
        };

        this.updateInput = this.updateInput.bind(this);

    }

    /*checkValid() {
        return this.validateEmail(this.state.signUpPassword);
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }*/

    updateInput({target: {id, value}}) {
        this.setState(state => ({
            user: {
                ...state.user,
                [id]: value
            }
        }));
    }

    render() {
        return (
            <aside className={'login-form-wrapper'}>
                <form action="GET">
                    <div className="form-name">
                        <h5>News api form</h5>
                    </div>
                    <div className={'input-container'}>
                        <input type="text" id={'firstName'}
                               onChange={this.updateInput}
                               value={this.state.user.firstName}
                               required/>
                        <label htmlFor="firstName"
                               className={`${this.state.user.firstName ? 'label-active' : ''}`}>
                            First name
                        </label>
                    </div>
                    <div className={'input-container'}>
                        <input type="text" id={'lastName'}
                               onChange={this.updateInput}
                               value={this.state.user.lastName}
                               required/>
                        <label htmlFor="lastName"
                               className={`${this.state.user.lastName ? 'label-active' : ''}`}>
                            Last name
                        </label>
                    </div>
                    <div className={'input-container'}>
                        <input type="email" id={'signUpEmail'}
                               onChange={this.updateInput}
                               value={this.state.user.signUpEmail}
                               required/>
                        <label htmlFor="signUpEmail"
                               className={`${this.state.user.signUpEmail ? 'label-active' : ''}`}>
                            Email
                        </label>
                    </div>
                    <div className={'input-container'}>
                        <input type="password" id={'signUpPassword'}
                               value={this.state.user.signUpPassword}
                               onChange={this.updateInput}
                               required/>
                        <label htmlFor="signUpPassword"
                               className={`${this.state.user.signUpPassword ? 'label-active' : ''}`}>
                            Password
                        </label>
                    </div>
                    <div className="form-control-button">
                        <input type="submit" value={'ok'} className={true ? 'hidden' : ''}/>
                        <input type="button" value={'cancel'} className={false ? 'hidden' : ''}/>
                    </div>
                </form>
            </aside>
        );
    }
}