import { Component } from 'react';
import Image from './Image';
import './Gallery.module.css';

class Gallery extends Component {
    state = {
        gallery: [
            "https://cdn.pixabay.com/photo/2017/12/12/11/37/bastei-3014467__340.jpg",
            "https://cdn.pixabay.com/photo/2014/11/15/23/29/fairytale-532850__340.jpg",
            "https://cdn.pixabay.com/photo/2017/08/07/10/05/neuschwanstein-2602208__340.jpg"],
        index: 1
    }

    render() {
        return (<div>
            <div className="selected">
                <img src={this.state.gallery[this.state.index]} alt="" />
            </div>
            <div className="Gallery">
                {this.state.gallery.map((img, i) => { return <Image src={img} key={i} /> })}
            </div>
        </div>
        )
    }

}

export default Gallery;

