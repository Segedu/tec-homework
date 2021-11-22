import { Component } from "react";
import "./css/Team.css";

class BakeryTeam extends Component {
    render() {
        return (
            <div className="teamDiv">
                <Employee src="https://cdn.pixabay.com/photo/2019/11/14/11/10/chef-4625935__340.jpg" name="Dan" jobTitle="Executive Chef" />
                <Employee src="https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885__340.jpg" name="Haim" jobTitle="Manager" />
                <Employee src="https://cdn.pixabay.com/photo/2013/10/17/14/11/cook-196932__340.jpg" name="Dana" jobTitle="Co-chief" />
                <Employee src="https://cdn.pixabay.com/photo/2014/06/10/15/47/pizza-366111__340.jpg" name="Nadav" jobTitle="Co-chief" />
            </div>
        )
    }

}

class Employee extends Component {
    render() {
        return (
            <div>
                <img src={this.props.src} />
                <h3>{this.props.name}</h3>
                <p>{this.props.jobTitle}</p>
            </div>
        )
    }
}

export default BakeryTeam;