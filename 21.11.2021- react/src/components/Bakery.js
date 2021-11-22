import React, { Component } from 'react';
import './css/Bakery.css';

class Bakery extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className="bakeryDiv">
            <Cake src="https://cdn.pixabay.com/photo/2018/07/01/19/50/muffin-3510308__340.jpg" name="cake" />
            <Cake src="https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601__340.jpg" name="cookie" />
            <Cake src="https://cdn.pixabay.com/photo/2017/08/07/04/05/chocolate-2599637__340.jpg" name="ezra" />
            <Cake src="https://cdn.pixabay.com/photo/2016/05/12/13/35/cookies-1387826__340.jpg" name="chocolate" />
            <Cake src="https://cdn.pixabay.com/photo/2019/11/25/14/11/cookie-4652159__340.jpg" name="vanilla" />
            <Cake src="https://cdn.pixabay.com/photo/2016/03/05/20/09/bake-1238679__340.jpg" name="patisserie" />
        </div>
        )
    }
}

class Cake extends Component {
    render(props) {
        return (
            <section>
                <img src={this.props.src} alt="cake" />
                <h3>{this.props.name}</h3>
                <p>Cake is a form of sweet food made from flour, sugar,
                    and other ingredients, that is usually baked. In their oldest forms,
                    cakes were modifications of bread, but cakes now cover a wide range
                    of preparations that can be simple or elaborate, and that share
                    features with other desserts such as pastries, meringues,
                    custards, and pies.
                </p>
            </section>
        )
    }
}

export default Bakery;