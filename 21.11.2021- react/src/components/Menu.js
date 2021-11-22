import { Component } from 'react';
import "./css/Menu.css";
class Menu extends Component {
    render() {
        return (
            <div className="menuDiv">
                <OneMeal title="Pizza" description="Pizza is a dish of Italian origin consisting of a usually round,
                 flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients 
                 which is then baked at a high temperature,
                  traditionally in a wood-fired oven" src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg" />
                <OneMeal title="Salad" description="A salad is a dish consisting of mixed pieces of food, typically with at least one raw ingredient.
                 They are often dressed, and typically served at room temperature or chilled, though some can be served warm.Salads may be served at any point during a meal." src="https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505__340.jpg" />
                <OneMeal title="Dessert" description="Dessert is a course that concludes a meal. The course consists of sweet foods, such as confections, and possibly a beverage such as dessert wine and liqueur. In some parts of the world, there is no tradition of a dessert course to conclude a meal."
                    src="https://cdn.pixabay.com/photo/2016/10/13/11/44/chocolates-1737503__340.jpg" />

            </div>
        )
    }
}

class OneMeal extends Component {
    render() {
        return (
            <section >
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <img src={this.props.src} alt="" />
            </section>
        )
    }
}

export default Menu;