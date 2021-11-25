import { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
    state = {
        movies: [{ movieName: "superman", year: 2020, actor: "Dan", img: "https://cdn.pixabay.com/photo/2021/06/06/11/23/superman-logo-6315068__340.png" },
        { movieName: "spiderman", year: 2020, actor: "Ron", img: "https://cdn.pixabay.com/photo/2019/09/03/05/01/spiderman-4448631__340.jpg" }]
    }
    render() {
        return (
            <div>
                {this.state.movies.map((movie, i) => { return <Movie movie={movie} key={i} /> })}
            </div>
        )
    }
}
export default Movies;