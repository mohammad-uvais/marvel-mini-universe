import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm topnav justify-content-center fixed-top">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a
                    href="/"
                    className={window.location.pathname === "/" ? 'nav-link activ' : 'nav-link'}>
                        HOME
                    </a>
                </li>
                {/* <li className="nav-item">
               <a className={window.location.pathname === "/about" ? 'nav-link activ' : 'nav-link'} href="/about">ABOUT</a>
            </li> */}
                <li className="nav-item">
                    <a
                    href="/characters"
                    className={window.location.pathname === "/characters" ? 'nav-link activ' : 'nav-link'}>
                        CHARACTERS
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="/comics"
                    className={window.location.pathname === "/comics" ? 'nav-link activ' : 'nav-link'}>
                        COMICS
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="/contact"
                    className={window.location.pathname === "/contact" ? 'nav-link activ' : 'nav-link'}>
                        CONNECT
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;