import { Component } from "react";
// import { MainBackground } from './Gallery';
import './Gallery.module.css';
// import * as style from './Gallery.module.css';

class Image extends Component {
    clickHandler = () => {
        console.log("change background");
    }

    render() {
        return (<section className="Image">
            <img onClick={this.clickHandler} src={this.props.image.img} alt="" />
        </section>)
    }
}
export default Image;