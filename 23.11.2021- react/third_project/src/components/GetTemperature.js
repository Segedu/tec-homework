import { Component } from "react";
import './css/GetTemperature.css';
import axios from "axios";


class GetTemperature extends Component {
    state = { city: "", maxTemperature: "", minTemperature: "", feelsLike: "", error: "" }

    cityHandler = (event) => {
        this.setState({ city: event.target.value })
    }

    getWeatherByCity = () => {
        const cityName = this.state.city;
        const API_KEY = "641974375fb31ab9962b7f26bce1a2a0";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        axios
            .get(url)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        maxTemperature: Math.ceil(response.data.main.temp_max / 10),
                        minTemperature: Math.ceil(response.data.main.temp_min / 10),
                        feelsLike: Math.ceil(response.data.main.feels_like / 10)
                    })

                }
            })
            .catch((error) => {
                this.setState({ error: "this city could not be found" })
                console.log("error. you are in catch");
            });
    }

    render() {
        return (
            <div className="GetTemperature" >
                <h2>What is the temperature in {this.state.city}? </h2>
                <input onChange={this.cityHandler} type="text" placeholder="Enter city" name="city" id="input" />
                <button onClick={this.getWeatherByCity}>submit</button>
                <p id="errorText">{this.state.error}</p>
                <div id="DataFromServer">
                    <p>Max Temperature:{this.state.maxTemperature}</p>
                    <p>Min Temperature:{this.state.minTemperature}</p>
                    <p>Feels Like:{this.state.feelsLike}</p>
                </div>

            </div >
        )
    }
}
export default GetTemperature;