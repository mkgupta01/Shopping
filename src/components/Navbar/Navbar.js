import './Navbar.css'

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="nav">
            <h2 className="logo"> Shopi<span>wy </span></h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/clothes">Clothes</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/electrnoics">Electronics</Link></li>
                <li><Link to="/railwaytickets">Railway Ticket</Link></li>
            </ul>
            {/* <button className='login_but'>login</button> */}
        </div>

    );
}

export default Navbar;