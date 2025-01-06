import React, { Component } from 'react'

export default class CounterClass extends Component {
   
    state = {
        count: 0,
    };
    
    render() {
    
        const {count} = this.state;
        
        return (
            <>
                <div>CounterClass</div>
                <h1>Count : {count} </h1>

                <button
                    onClick={() => {
                        this.setState({ count: this.state.count + 1 }); // 새로운 상태의 값을 전달 받음 (자동으로 리렌더링)
                    }}
                >
                    increase
                </button>
                <button
                    onClick={() => {
                        this.setState({ count: this.state.count -2 }); // 새로운 상태의 값을 전달 받음 (자동으로 리렌더링)
                    }}
                >
                    decrease
                </button>
            </>
        );
  }
}
