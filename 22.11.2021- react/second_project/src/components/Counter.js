import { Component } from 'react';

class Counter1 extends Component {

    state = { counter: 0 }
    count = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        return (<div>
            <button onClick={this.count}>increase1</button>
            <p>{this.state.counter}</p>
        </div>)
    }
}

class CounterTwo extends Component {

    state = { counter: this.props.number }
    countFunc = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        return (<div>
            <button onClick={this.countFunc}>increase2</button>
            <p>{this.state.counter}</p>
        </div>)
    }
}


export default Counter1;
export { CounterTwo };