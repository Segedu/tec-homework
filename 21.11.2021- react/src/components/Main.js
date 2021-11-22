import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import './css/Main.css';

class AboutMe extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (<p>here some temporary text</p>)
    }
}

class Image extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (<img src="https://cdn.pixabay.com/photo/2021/11/15/04/15/china-6796350__340.jpg" alt="myPhoto" />)
    }
}

class Video extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (<video src="https://player.vimeo.com/external/585600454.sd.mp4?s=33b2d8c5e4f95945d32f32f60e8abf98fb1b5d6f&profile_id=165" width="500" height="300" controls />)
    }
}

class Main extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (<div>
        <h1>Landing page</h1>
            <Header />
            <Image />
            <Video />
            <AboutMe />

            <Footer />
        </div>)
    }
}
export default Main;