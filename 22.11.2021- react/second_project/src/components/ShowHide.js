import { Component } from "react";

class ShowHide extends Component {
    state = { style: "inline" }

    hide = () => {
        if (this.state.style === "none") {
            this.setState({ style: "inline" })
        }
        else {
            this.setState({ style: "none" })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.hide}>click here</button>
                <p style={this.props.style}>{this.props.text}</p>
            </div >
        )
    }
}


export default ShowHide;
