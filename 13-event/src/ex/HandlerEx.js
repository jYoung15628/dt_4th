import React, { Component } from 'react';

export default class HandlerEx extends Component {
    state = {
        msg: 'Hello World!',
    };

    printMsg = () => {
        this.setState({ msg: 'Goodbye World!' });
    };

    render() {
        const { msg } = this.state;

        return (
            <>
                <div>{msg}</div>
                <button onClick={this.printMsg}>클릭</button>
            </>
        );
    }
}
