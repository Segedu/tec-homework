import { useEffect, useState } from "react";

const RedditJavaScript = ({ jsPostsTitle }) => {
    const [posts, setPosts] = useState([]);

    const getJsPosts = () => {
        fetch(`https://www.reddit.com/r/${jsPostsTitle}.json`)
            .then(response => response.json())
            .then(response => {
                const jsPostsData = response.data.children;
                setPosts(jsPostsData)
            })
    }

    useEffect(getJsPosts);

    const elements = posts.map((post, i) => {
        return <li key={i}>{post.data.title}</li>
    })

    return (<div>
        <h2>javaScript posts</h2>
        <ul>{elements}</ul>
    </div>)

}
export default RedditJavaScript;