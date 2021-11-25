import { Component } from "react";

import * as styles from './Movie.module.css'

class Movie extends Component {
    render() {
        return (
            <section className={styles.card}>
                <p>{this.props.movie.movieName}</p>
                <p>{this.props.movie.year}</p>
                <p>{this.props.movie.actor}</p>
                <img src={this.props.movie.img} />
            </section>
        )
    }
}
export default Movie;