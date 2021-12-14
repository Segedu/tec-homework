import { useState } from "react";

const Name = ({randName}) => {
    const [name, setName] = useState(randName)
    const style = { color: name ? "red" : "green" }

    return (
        < p style={style} onClick={()=>setName(!name)}>
            
            {randName}
        </p>
    )
}
export default Name;