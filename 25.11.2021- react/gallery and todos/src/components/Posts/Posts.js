import { Component } from "react";
import "./Posts.css"

class Posts extends Component {
    state = { posts: "", data: "", title: "", body: "" }

    getPosts = () => {
        this.setState({ posts: this.state.posts })
        const url = "https://jsonplaceholder.typicode.com/posts ";
        fetch(url,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify()
            })
            .then(response => response.json())
            .then(data => { this.setState({ title: data.title, body: data.body }) })
            // console.log(data))

            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="Posts" >
                <button onClick={this.getPosts} >get posts</button>
                <p>{this.state.title}</p>
                <p>{this.state.body}</p>
            </div>
        )
    }

}

export default Posts;

