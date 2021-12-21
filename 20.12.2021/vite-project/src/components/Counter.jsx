import { useState, useEffect } from "react";

const Counter = ({ initialCount }) => {
    const [counter, setCounter] = useState(initialCount);

    useEffect(() => {
        setCounter(initialCount)
    }, [initialCount])

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => { setCounter(counter + 1) }}>increase</button>
        </div>)

}
export default Counter;