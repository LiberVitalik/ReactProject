import React, { Component } from 'react';
import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner';
import List from './components/newsApi/NewsApi';

import 'font-awesome/scss/font-awesome.scss';

import './App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={'App'}></div>
                <Header></Header>
                <Spinner></Spinner>
                <List></List>
            </div>
        );
    }
}
