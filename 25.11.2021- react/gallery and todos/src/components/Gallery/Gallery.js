import { Component } from 'react';
import Image from './Image';
import './Gallery.module.css';

class Gallery extends Component {
    state = {
        gallery: [
            { img: "https://cdn.pixabay.com/photo/2019/09/03/05/01/spiderman-4448631__340.jpg" },
            { img: "https://cdn.pixabay.com/photo/2019/09/03/05/01/spiderman-4448631__340.jpg" }]
    }

    render() {
        return (
            <div className="Gallery">
                {this.state.gallery.map((img, i) => { return <Image image={img} key={i} /> })}
            </div>
        )
    }

}

export default Gallery;

