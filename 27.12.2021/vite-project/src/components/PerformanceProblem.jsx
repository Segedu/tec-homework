import { useState, useMemo } from "react";
import Child from "./Child";

const PerformanceProblem = () => {
    const [flag, setFlag] = useState(false);
    let num = 2;

    expensiveCalculation(num);
    const memo = useMemo(isNumChanged, [num])

    function isNumChanged() {
        return <Child num={num} />
    }

    function expensiveCalculation(num) {
        let sum = 0;
        console.log("start Calculating...");
        for (let i = 0; i < 1000000000; i++) {
            sum += num;
        }

        console.log(`finish Calculating . sum is ${sum}`);
    }

    return (
        <div>
            <button onClick={() => setFlag(!flag)}>
                Toggle Hello World color takes some time ....
            </button>
            <h2 style={{ color: flag ? "blue" : "brown" }}>Hello World</h2>
            {memo}
        </div>
    );
};

export default PerformanceProblem;