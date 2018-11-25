import React from 'react';
import './Navbar.css';

const Header = props => {
    return ( 

        <nav className="NavbarHeader navbar navbar-expand-lg navbar-light bg-light">
            <div className="Container ">
                <div className="d-flex justify-content-center">
                    <i className="fa fa-th-list fa-2x"></i>
                    <div className="h2 ml-2 my-auto text-tomato" href="/"> {props.heading}</div>
                </div>
            </div>
        </nav>        
     );
}

export default Header;