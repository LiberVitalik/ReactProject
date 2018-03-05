import React, { Component } from 'react';

import './spinner.scss';

export default class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.countUp = this.countUp.bind(this);
    }

    countUp() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <aside className={'spinner-wrapper'} onClick={this.countUp}>
                <span>{this.state.count}</span>
            </aside>
        );
    }
}