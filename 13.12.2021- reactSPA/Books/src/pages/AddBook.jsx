import { Component } from "react";
import { Redirect } from "react-router-dom";

class AddBook extends Component {
state= {
    title: "",
    author: "",
    pages: "",
    coverImg: "",
    synopsis: "",
    redirectToBooks: false
}
addBook= (e)=> {
    e.preventDefault()
    console.log(this.state)
}

    render() {
        if (this.state.redirectToBooks) {
            return <Redirect to='/Books'></Redirect>
        }
        return (
        <div>
            <h1>add book page </h1>
            <form>
                <input type="text" placeholder="Title" onChange={(e)=> {this.setState({title: e.target.value})}}></input><br></br>
                <input type="text" placeholder="Autour" onChange={(e)=> {this.setState({author: e.target.value})}}></input><br></br>
                <input type="number" placeholder="Pages" onChange={(e)=> {this.setState({pages: e.target.value})}}></input><br></br>
                <input type="text" placeholder="Book image" onChange={(e)=> {this.setState({coverImg: e.target.value})}}></input><br></br>
                <textarea  placeholder="Synopsis" rows="4" onChange={(e)=> {this.setState({synopsis: e.target.value})}}/><br></br>
                <button onClick={()=>{this.addBook, this.setState({redirectToBooks: true})}}>Add book</button>
            </form>
        </div>)

    }
}

export default AddBook;