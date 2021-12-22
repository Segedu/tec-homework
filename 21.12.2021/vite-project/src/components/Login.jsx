import { useRef } from "react"

const Login = () => {
    const userName = useRef();
    const userEmail = useRef();
    const userPassword = useRef()


    return (
        <form onSubmit={
            (e) => {
                e.preventDefault()
                if (userName.current.value && userEmail.current.value && userPassword.current.value !== "") {
                    console.log(userName.current.value, userEmail.current.value, userPassword.current.value)
                }
            }}>
            <input ref={userName} type="text" placeholder="Enter Name" /><br />
            <input ref={userEmail} type="email" placeholder="Enter Email" /><br />
            <input ref={userPassword} type="password" placeholder="Enter your password" />
            <input type="submit" value="Log In" />
        </form>)
}

export default Login