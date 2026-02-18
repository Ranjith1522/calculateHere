import './Login.css'

function Login({onClose}) {

    function logIn() {
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
                    <input className='userinput' type='text' />
                </div>
                <br></br>
                <div className="user-password">
                    <label>Password : </label>
                    <input className='userpassword' type='password' />
                </div>
                <div className='userlogin'>
                    <button className='btn' onClick={logIn}>Login</button>
                </div>
                
            </div>
        </div>
    </>
}

export default Login;