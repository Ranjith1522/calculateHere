import './Login.css'

function Login() {

    return <>
        <div className='modal-overlay'>
            <div className="card">
                <div className="user-name">
                    <label>UserName : </label>
                    <input type='text' />
                </div>
                <br></br>
                <div className="user-password">
                    <label>Password : </label>
                    <input type='password' />
                </div>
                
            </div>
        </div>
    </>
}

export default Login;