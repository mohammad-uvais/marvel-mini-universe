import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm topnav justify-content-center fixed-top">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a
                    href="/marvel-mini-universe/#/"
                    className={window.location.hash === "#/" ? 'nav-link activ' : 'nav-link'}>
                        HOME
                    </a>
                </li>
                {/* <li className="nav-item">
               <a className={window.location.pathname === "/about" ? 'nav-link activ' : 'nav-link'} href="/about">ABOUT</a>
            </li> */}
                <li className="nav-item">
                    <a
                    href="/marvel-mini-universe/#/characters"
                    className={window.location.hash === "#/characters" ? 'nav-link activ' : 'nav-link'}>
                        CHARACTERS
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="/marvel-mini-universe/#/comics"
                    className={window.location.hash === "#/comics" ? 'nav-link activ' : 'nav-link'}>
                        COMICS
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="/marvel-mini-universe/#/contact"
                    className={window.location.hash === "#/contact" ? 'nav-link activ' : 'nav-link'}>
                        CONNECT
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;