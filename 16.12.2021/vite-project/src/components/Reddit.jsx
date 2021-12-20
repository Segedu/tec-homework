import { useEffect, useState } from "react";

const Reddit = () => {
    const [posts, setPosts] = useState([])
    useEffect(getPosts, [])

    function getPosts() {
        fetch("https://www.reddit.com/r/reactjs.json")
            .then(response => response.json())
            .then(response => {
                let reactPosts = response.data.children;
                setPosts(reactPosts);
            })
            .catch(err => console.log(err));
    }

    const elements = posts.map((post, i) => {
        return <li key={i}>{post.data.title}</li>
    })
    return (
        <div>
            <h2>React Posts</h2>
            <ul>
                {elements}
            </ul>
        </div>
    )
}
export default Reddit;