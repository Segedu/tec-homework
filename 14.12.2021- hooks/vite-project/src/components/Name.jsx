import { useState } from "react";

const Name = ({ randColor }) => {
    const [color, setColor] = useState(randColor)
    const style = { color: color ? "red" : "green" }

    return (
        < p style={style} onClick={() => setColor(!color)}>

            {randColor}
        </p>
    )
}
export default Name;