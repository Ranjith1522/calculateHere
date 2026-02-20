import { useState } from 'react';
import './Header.css'
import Login from '../Login/Login'
import irctcc from '../../assets/irctcc.png'

function Header() {

   const [showLogin, setshowLogin] = useState(false);

    return<>
    <div className="header-main">
        <div className="nav-left">
            <img className='logo-img' src={irctcc} alt="irctc -logo"></img>
        </div>
        <div className="nav-centre">
            <button className='btn'>Contact</button>
            <button className='btn'>Home</button>
            <button className='btn'>Insights</button>
        </div>
        <div className="nav-right">
            <button className='btn' onClick={() => setshowLogin(true)}>Login</button>
            {showLogin && <Login onClose={() => setshowLogin(false)} />}
        </div>
           
    </div>
    </>
}

export default Header;