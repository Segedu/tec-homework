import React, { Component } from "react";

class Counter extends Component {
    state = { counter: this.props.state };
    count = () => {
        this.setState({ counter: this.state.counter + 1 })
    };
    render() {
        return (<div>
            <button onClick={this.count}>increase</button>
            <p>count is:{this.state.counter}</p>
        </div>)
    }
}

class TwoCounters extends Component {
    render() {
        return (
            <div>
                <Counter state={6} />
                <Counter />
            </div>
        )
    }
}

export { TwoCounters };
export default Counter;