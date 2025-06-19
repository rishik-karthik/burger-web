import { useState } from "react";
import "./Navbar.css"
export default function Navbar() {
  const [click, setClick] = useState(false);
  const menuClick = () => setClick(!click); //for bars and x toggle
  const close = () => setClick(false); //when nav link is clicked x->bars
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* logo */}
            <a href="/" className="navbar-logo">
            BurGeR.<i className="fa-solid fa-g"></i><i className="fa-solid fa-0"></i>! <i className="fab fa-typo3"></i>
            </a>
            {/* menu icon (hidden in desktop) */}
            <div className="menu-icon" onClick = {menuClick}>
              <i className = {
                click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>
            {/* nav-links */}
            <div className="right-section">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-items">
                <a href="/Menu" className="nav-links"
                onClick={close}>Menu</a>
              </li>
              <li className="nav-items">
                <a href="/products" className="nav-links"
                onClick={close}>Reviwes</a>
              </li>
              <li className="nav-items">
                <a href="/signUp" className="nav-links"
                onClick={close}>Sign-Up</a>
              </li>
            </ul>
            <button className="res"><a href="/reservations" className="res-a">RESERVATIONS</a></button>
            </div>
        </div>
      </nav>
    </>
  )
}
