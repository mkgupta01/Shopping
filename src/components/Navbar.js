import './Navbar.css'

function Navbar() {
    return (
        <div className="nav">
            <h2 className="logo">Shopi<span>wy</span></h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Clothes</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">Electronics</a></li>
                <li><a href="#">Railway Ticket</a></li>
            </ul>
            <button className='login_but'>login</button>
        </div>

    );
}

export default Navbar;