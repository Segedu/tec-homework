import component from 'react';

class BoardTeam extends component {
    render() {
        return (
            <div>

                <TeamMember />
            </div>
        )
    }
}

class TeamMember extends component {
    render() {
        return (
            <section>
                <img src={this.props.src} />
                <h3>{this.props.name}</h3>
                <p>{this.props.jobTitle}</p>
            </section>
        )
    }
}

export default BoardTeam;