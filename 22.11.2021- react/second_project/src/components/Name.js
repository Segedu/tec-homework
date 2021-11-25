import { Component } from "react";

class Name extends Component {
    state = { name: "" }
    inputHandler = (e) => {
        this.setState({ name: e.target.value })
    }
    render() {
        return (
            <div>
                <input onChange={this.inputHandler} placeholder="enter" />
                <p>{this.state.name}</p>
            </div>
        )
    }
}
export default Name;