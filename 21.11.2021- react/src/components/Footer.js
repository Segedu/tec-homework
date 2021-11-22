import React from 'react';
import './css/Footer.css'

class Footer extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (<div>
            <section id="formSection">
                <h1>Contact Me</h1>
                <input type="text" placeholder="Full Name" id="Full Name" />
                <input type="text" placeholder="Email" id="Email" />
                <input type="text" placeholder="Message" id="message" /><br /><br />
                <input type="submit" value="SEND" id="submit" />
            </section>

        </div>)
    }
}

export default Footer;