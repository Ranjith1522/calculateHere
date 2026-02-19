import { useState } from 'react';
import './Login.css'

function Login({onClose}) {

    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");

    function logIn() {
        if(!username || !password) {
            alert("Please enter user name and password");
            return;
        }
        console.log("Login button clicked");
    }

    return <>
        <div className='modal-overlay' onClick={onClose}>
            <div className="card" onClick={(e) => {e.stopPropagation()}}>
                <div>
                    <h3>User Login Dashboard</h3>
                </div>
                <div className="user-name">
                    <label>UserName : </label>
                    <input className='userinput' type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <br></br>
                <div className="user-password">
                    <label>Password : </label>
                    <input className='userpassword' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='userlogin'>
                    <button className='btn' onClick={logIn}>Login</button>
                </div>
                
            </div>
        </div>
    </>
}

export default Login;