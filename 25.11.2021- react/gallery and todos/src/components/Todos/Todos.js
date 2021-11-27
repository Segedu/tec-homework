import { Component } from "react";
import Todo from "./Todo";

class Todos extends Component {
    state = {
        input: "",
        Todos: [
            { title: "homework", status: false },
            { title: "reading", status: false },
            { title: "swimming", status: true },
            { title: "netflix", status: false }]
    }
    inputHandler = (e) => {
        this.setState({ input: e.target.value })
    }
    clickHandler = () => { this.state.Todos.push(this.state.input) }


    render() {
        return (<div className="Todos">
            {this.state.Todos.map((todo, i) => { return <Todo todo={todo} key={i} /> })}
            <input onChange={this.inputHandler} placeholder="enter new task" />
            <button onClick={this.clickHandler}>click to update</button>
            {/* <p>{this.state.input}</p> */}
        </div>)
    }

}
export default Todos;