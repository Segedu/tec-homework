import { useEffect, useState } from 'react'
import './App.css';
import Reddit from './components/Reddit';
import RedditJavaScript from './components/RedditJavaScript'

function App() {
  const [title, setTitle] = useState("java")

  return (
    <div className="App">

      <form onSubmit={(e) => {
        e.preventDefault()
        setTitle(e.target[0].value);
      }}>
        <input type="text" />
        <input type="submit" value="send" />
      </form>

      {/* <Reddit /> */}
      <RedditJavaScript jsPostsTitle={title} />
    </div>
  )
}

export default App
