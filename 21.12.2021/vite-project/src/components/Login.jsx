import { useRef, useState } from "react"

const Login = () => {
    const userName = useRef(), userEmail = useRef(), userPassword = useRef();
    const [disabled, setDisabled] = useState(true);

    const isValid = () => {
        return userName.current.value && userEmail.current.value && userPassword.current.value !== ""
    }

    return (
        <form onChange={() => { setDisabled(isValid) }} onSubmit={(e) => {
            e.preventDefault()
            if (isValid) {
                console.log(userName.current.value, userEmail.current.value, userPassword.current.value)
            }
        }}>
            <input ref={userName} type="text" placeholder="Enter Name" /><br />
            <input ref={userEmail} type="email" placeholder="Enter Email" /><br />
            <input ref={userPassword} type="password" placeholder="Enter your password" />
            <input type="submit" value="Log In" disabled={!disabled} />
        </form>)
}

export default Login