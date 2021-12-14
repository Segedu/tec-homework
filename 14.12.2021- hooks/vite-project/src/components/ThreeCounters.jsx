import { useState } from "react"

const ThreeCounters = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)

    return (<div>
        <button onClick={() => setCount1(count1 + 1)}>counter 1</button>
        <p>count: {count1}</p>
        <button onClick={() => setCount2(count2 + 1)}>counter 2</button>
        <p>count: {count2}</p>
        <button onClick={() => setCount3(count3 + 1)}>counter 3</button>
        <p>count: {count3}</p>
    </div>)
}
export default ThreeCounters