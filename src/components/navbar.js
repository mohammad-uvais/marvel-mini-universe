import React from 'react';

function Navbar() {
     return (
         <nav className="navbar navbar-expand-sm topnav justify-content-center fixed-top">
             <ul className="navbar-nav">
                 <li className="nav-item">
                     <a className={window.location.hash === "#/" ? 'nav-link activ' : 'nav-link'} href="/#/">HOME</a>
                 </li>
                 {/* <li className="nav-item">
               <a className={window.location.pathname === "/about" ? 'nav-link activ' : 'nav-link'} href="/about">ABOUT</a>
            </li> */}
                 <li className="nav-item">
                     <a className={window.location.hash === "#/characters" ? 'nav-link activ' : 'nav-link'} href="/#/characters">CHARACTERS</a>
                 </li>
                 <li className="nav-item">
                     <a className={window.location.hash === "#/comics" ? 'nav-link activ' : 'nav-link'} href="/#/comics">COMICS</a>
                 </li>
                 <li className="nav-item">
                     <a className={window.location.hash === "#/contact" ? 'nav-link activ' : 'nav-link'} href="/#/contact">CONNECT</a>
                 </li>
             </ul>
         </nav>
     )
        }

export default Navbar;