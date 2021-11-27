import { Component } from "react";

class Todo extends Component {
    render() {
        return (<section>
            <p>{this.props.todo.title} {this.props.todo.status}</p>
            <p></p>
        </section>)
    }
}
export default Todo;
