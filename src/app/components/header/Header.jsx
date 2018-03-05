import React, { Component } from 'react';
import Login from './login/Login';

import './header.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className={'main-header'}>
                <a href="#">Logo</a>
                <Login></Login>
            </aside>
        );
    }
}