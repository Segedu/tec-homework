import React, { useState } from "react";

const YourName = () => {
    const [myName, setMyName] = useState(true)
    const style = { color: myName ? 'green' : 'red' }
    return (
        <div>
            <p style={style} onClick={() => setMyName(!myName)}>segedu</p>
        </div >
    )
}
export default YourName;