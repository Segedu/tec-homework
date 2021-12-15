import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Vacation.css';

const Vacation = () => {
    const [vacations, setVacation] = useState([
        { destination: "amsterdam", completed: true, id: uuidv4() },
        { destination: "berlin", completed: true, id: uuidv4() },
        { destination: "london", completed: false, id: uuidv4() },
        { destination: "paris", completed: false, id: uuidv4() },

    ])
    let [vacationInput, setVacationInput] = useState('')

    const getNewVacation = (e) => { setVacationInput(vacationInput = e.target.value) }

    const filterUnCompleted = () => {
        return vacations.filter((vacation) => vacation.completed === false)
    }
    const filterCompleted = () => {
        return vacations.filter((vacation) => vacation.completed === true)

    }
    const getAll = () => {
        vacations.map((vacation => (
            <li key={vacation.id}>{vacation.destination}<span> </span>
                <button onClick={() => setCompleted(vacation.id)}>completed</button></li>)))
    }

    const addVacationClick = (e) => {
        e.preventDefault();
        let newArray = [...vacations];
        const newVacation = {
            destination: vacationInput,
            completed: false,
            id: uuidv4(),
        };
        newArray.push(newVacation)
        setVacation(newArray);
    }

    const setCompleted = (vacId) => {
        let vacation = vacations.find((vacation) => vacation.id === vacId)
        vacation.completed = true;
        setVacation(vacations)
    }

    return (<div className="vacation">
        <input onChange={getNewVacation} placeholder="Destination"></input>
        <button onClick={addVacationClick} >Add Vacation</button>
        <button onClick={getAll}>get all</button>

        <h2>All Vacations</h2>
        <ul>{vacations.map(vacation => (
            <li key={vacation.id}>{vacation.destination}<span> </span>
                <button onClick={() => setCompleted(vacation.id)}>completed</button></li>))}
        </ul>

        <button>show active</button>
        <button onClick={filterCompleted}>show completed</button>
        <button onClick={filterUnCompleted}>show all</button>

        <h2>completed</h2>
        <ul>{
            filterCompleted().map(vacation => (
                <li key={vacation.id}>{vacation.destination}<span> </span>
                    <button onClick={() => setCompleted(vacation.id)}>completed</button></li>))}</ul>
    </div >)
}
export default Vacation;