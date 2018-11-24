import React from 'react';
import './Navbar.css';

const Header = props => {
    return ( 

        <nav className="NavbarHeader navbar navbar-white bg-white">
            <div className="Container ">
                <div className="d-flex justify-content-center">
                    <i className="fa fa-home fa-4x"></i>
                    <div className="h1 ml-2 my-auto text-dark" href="/"> {props.heading}</div>
                </div>
            </div>
        </nav>        
     );
}

export default Header;