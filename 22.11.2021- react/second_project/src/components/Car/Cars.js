import { Component } from "react";
import Car from "./Car";

class Cars extends Component {
    state = {
        cars:
            [{
                model: "mazda",
                price: 80000,
                img: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__340.jpg"
            },
            {
                model: "mazda",
                price: 80000,
                img: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__340.jpg"
            }
            ]
    }

    render() {
        return (<div>
            {this.state.cars.map((car, i) => { return <Car car={car} key={i} /> })}
        </div>)
    }
}
export default Cars;