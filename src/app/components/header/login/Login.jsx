import React, { Component } from 'react';

import './login.scss';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.lol = 'lol-check';
    }

    render() {
        return (
            <aside className={'login-wrapper'}>
                {true && <button>Log in</button>}
                {true && <button>Log out</button>}
                {true && <button>Sign up</button>}
            </aside>
        );
    }
}