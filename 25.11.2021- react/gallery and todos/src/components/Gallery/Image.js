import { Component } from "react";
import './Gallery.module.css';

class Image extends Component {
    clickHandler = (i) => {
        this.setState({ index: i })
    }
    render() {
        return (<section className="Image">
            <img onClick={() => { this.clickHandler(i) }} src={this.props.src} alt="" />
        </section>)
    }
}
export default Image;