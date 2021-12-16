import { useState } from "react";

const Login = () => {
    const [{ name, email, password }, setUser] = useState({ name: "", email: "", password: "" });
    const logIn = (e) => {
        e.preventDefault()
        console.log(name, email, password);
    }

    return (
        <div>
            <form onSubmit={logIn}>
                <input type="text" placeholder="name" onChange={e => setUser({ name: e.target.value, email, password })}></input><br></br>
                <input type="email" placeholder="email" onChange={e => setUser({ name, email: e.target.value, password })} ></input><br></br>
                <input type="password" placeholder="password" onChange={e => setUser({ name, email, password: e.target.value })} ></input><br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;