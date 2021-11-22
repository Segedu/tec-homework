import { Component } from 'react';
import './css/BoardTeam.css';

class BoardTeam extends Component {
    render() {
        return (
            <div className="teamMember">
                <TeamMember src="https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060__480.jpg" name="Sara" jobTitle="Financial Director" />
                <TeamMember src="https://cdn.pixabay.com/photo/2020/10/14/07/18/woman-5653501__340.jpg" name="Dana" jobTitle="Engineer" />
                <TeamMember src="https://cdn.pixabay.com/photo/2017/06/09/05/19/smiling-2385790__340.jpg" name="Noa" jobTitle="Human resource" />
            </div>
        )
    }
}

class TeamMember extends Component {
    render() {
        return (
            <section>
                <img src={this.props.src} alt="" />
                <h3>{this.props.name}</h3>
                <p>{this.props.jobTitle}</p>
            </section>
        )
    }
}

export default BoardTeam;