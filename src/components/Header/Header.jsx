import './Header.css'

function Header() {
    return<>
    <div className="header-main">
        <div className="nav-left">
            <img src="https://www.presentations.gov.in/logos/indian-railway-catering-and-tourism-corporation/" alt="irctc -logo"></img>
        </div>
        <div className="nav-centre">
            <button className='btn'>Contact</button>
            <button className='btn'>Home</button>
            <button className='btn'>Insights</button>
        </div>
        <div className="nav-right">
            <button className='btn'>Login</button>
        </div>
    </div>
    </>
}

export default Header;