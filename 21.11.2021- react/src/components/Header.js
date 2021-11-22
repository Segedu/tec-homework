import React from 'react';
import './css/Header.css'

class Header extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (<div className="headerDiv">
            <p>
                This is temporary header
            </p>
            <h1>Segedu Abe</h1>
            <img src="https://cdn.pixabay.com/photo/2017/08/24/07/40/abstract-2675672_960_720.png" alt="myLogo" />
        </div>)
    }
}
export default Header;