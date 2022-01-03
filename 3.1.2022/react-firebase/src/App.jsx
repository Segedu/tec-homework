import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [loading, setLoading] = useState(""),
    [error, setError] = useState(""),
    [sign, setSign] = useState(arSign[0]),
    [responseData, setResponseData] = useState("");

  let arSign = ['signin', 'signup'];

  function sign() {
    // const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    // signup: "https://identitytoolkit.googleapis.com/v1/accounts:signUp"
    //signin : https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]; 
    // const urlBase = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/';
    const sign_in_or_up = (sign === 'signup') ? 'signUp' : 'verifyPassword';

    const URL = urlBase + sign_in_or_up + '?key=' + API_KEY;

    const objData = {
      email,
      password,
      returnSecureToken: true
    };

    setError("")
    setLoading("Loading..")
    setResponseData("")

    axios.post(URL, objData).then(response => {
      setLoading("")
      setResponseData(response.data)
      console.log(response);
    }).catch(err => {
      console.log(JSON.stringify(error));
      setLoading("")
      setError(err)
    });

  };

  return (
    <div className="App">
      <h2>Submit and check result in console</h2>
      <h3>Users are saved on Firebase</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        sign();
      }}>
        <select onChange={(e) => {
          setSign(e.target.value);
        }}>
          <option value={arSign[0]}>Sign In</option>
          <option value={arSign[1]}>Sign Up</option>
        </select>

        <input onChange={(e) => {
          setEmail(e.target.value);
        }} type='email' placeholder='email e.g. exp@msn.com' />

        <input onChange={(e) => {
          setPassword(e.target.value);
        }} type='password' placeholder='password e.g. 12xyAS , must be at least 6 characters' />

        <input type='submit' value='Submit' />
      </form>
      <p>{loading}</p>
      <p style={{ color: 'red' }}>{error ? JSON.stringify(error) : ''}</p>
      {responseData ? <p>localId (user id) : {responseData.localId}</p> : ''}
    </div>
  );
}

export default App
