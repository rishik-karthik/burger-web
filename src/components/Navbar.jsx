import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const menuClick = () => setClick(!click); // toggle menu
  const close = () => setClick(false); // close on link click

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* logo */}
        <Link to="/" className="navbar-logo" onClick={close}>
          BurGeR.<i className="fa-solid fa-g"></i>
          <i className="fa-solid fa-0"></i>! <i className="fab fa-typo3"></i>
        </Link>

        {/* menu icon */}
        <div className="menu-icon" onClick={menuClick}>
          <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>

        {/* nav-links */}
        <div className="right-section">
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-items">
              <Link to="/menu" className="nav-links" onClick={close}>Menu</Link>
            </li>
            <li className="nav-items">
              <Link to="/products" className="nav-links" onClick={close}>Reviews</Link>
            </li>
            <li className="nav-items">
              <Link to="/signup" className="nav-links" onClick={close}>Sign-Up</Link>
            </li>
          </ul>
          <button className="res">
            <Link to="/reservations" className="res-a" onClick={close}>
              RESERVATIONS
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
