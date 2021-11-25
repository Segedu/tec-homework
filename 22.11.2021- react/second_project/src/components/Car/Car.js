import { Component } from "react";
import * as styles from './Car.module.css'

class Car extends Component {
    render() {
        console.log(this.props);
        return (
            <section className={styles.card}>
                <p>{this.props.car.model}</p>
                <p>{this.props.car.price}</p>
                <img src={this.props.car.img} alt="" />
            </section>
        )
    }
}

export default Car;