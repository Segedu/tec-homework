import { Component } from "react";

class LongText extends Component {
    render() {
        let randColor = { color: "red" };
        if (this.props.title.length > 8) {
            randColor = { color: "green" }
        }
        return (
            <div>
                <h2 style={randColor}>{this.props.title}</h2>
            </div>
        )
    }
}

export default LongText;