import { useState, useEffect } from "react";

const Counter = ({ input }) => {
    const [counter, setCounter] = useState(input);

    useEffect(() => {
        setCounter(input)
    }, [input])

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => { setCounter(counter + 1) }}>increase</button>
        </div>)

}
export default Counter;