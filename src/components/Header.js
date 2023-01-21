import './Header.css'

function Header(){
    return(
        <div className="header">
            <div className="header_logo"></div>
            <div className="header_searchBox"></div>
            <div className="header_login">Login</div>
            <div className="header_become_a_seller header_button_text">
                Become A Seller
            </div>
            <div className="header_more header_button_text">More</div>
        </div>
    );
}

export default Header;