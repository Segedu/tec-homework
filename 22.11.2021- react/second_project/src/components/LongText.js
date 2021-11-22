import { Component } from "react";

class LongText extends Component {
    render() {
        let randColor = { color: "green" };
        if (this.props.title.length > 5) {
            randColor = { color: "red" }
        }
        return (
            <div>
                <h2 style={randColor}>{this.props.title}</h2>
            </div>
        )
    }
}

export default LongText;