import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaClipboardList } from "react-icons/fa";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeSidebar = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <nav className="navbar">

        {/* LOGO */}

        <Link to="/" className="logo-section">

          <img src={logo} alt="logo" />

          <h2>TravelYourWay Holidays</h2>

        </Link>

        {/* DESKTOP MENU */}

        <div className="nav-links">

          <NavLink to="/">Home</NavLink>

          <div className="services-dropdown">

            <span>
              Services
              <FaChevronDown />
            </span>

            <div className="dropdown-menu">

              <NavLink to="/tours">
                <div>🧳 Tour Packages</div>
                <span>→</span>
              </NavLink>

              <NavLink to="/camping">
                <div>🏕 Adventure Camping</div>
                <span>→</span>
              </NavLink>

              <NavLink to="/resorts">
                <div>🏨 Resort Booking</div>
                <span>→</span>
              </NavLink>

              <NavLink to="/cabs">
                <div>🚖 Cab Services</div>
                <span>→</span>
              </NavLink>

            </div>

          </div>

          <NavLink to="/contact">Contact</NavLink>

          <NavLink
            to="/booking"
            className="book-btn"
          >
            Book Now
          </NavLink>
          <NavLink to="/my-bookings">
            <FaClipboardList /> My Bookings
          </NavLink>

        </div>

        {/* MOBILE MENU BUTTON */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </div>

      </nav>

      {/* SIDEBAR */}

      <div className={menuOpen ? "sidebar active" : "sidebar"}>

        <div className="sidebar-top">

          <FaTimes
            className="close-icon"
            onClick={closeSidebar}
          />

        </div>

        <NavLink
          to="/"
          onClick={closeSidebar}
        >
          Home
        </NavLink>
        <NavLink
          to="/my-bookings"
          onClick={closeSidebar}
        >
          📋 My Bookings
        </NavLink>

        {/* MOBILE SERVICES */}

        <div
          className="mobile-services"
          onClick={() =>
            setServicesOpen(!servicesOpen)
          }
        >

          <span>Services</span>

          {servicesOpen ? (
            <FaChevronUp />
          ) : (
            <FaChevronDown />
          )}

        </div>

        {servicesOpen && (

          <div className="mobile-dropdown">

            <NavLink
              to="/tours"
              onClick={closeSidebar}
            >
              🧳 Tour Packages
            </NavLink>

            <NavLink
              to="/camping"
              onClick={closeSidebar}
            >
              🏕 Adventure Camping
            </NavLink>

            <NavLink
              to="/resorts"
              onClick={closeSidebar}
            >
              🏨 Resort Booking
            </NavLink>

            <NavLink
              to="/cabs"
              onClick={closeSidebar}
            >
              🚖 Cab Services
            </NavLink>

          </div>

        )}

        <NavLink
          to="/contact"
          onClick={closeSidebar}
        >
          Contact
        </NavLink>

        <NavLink
          to="/booking"
          className="mobile-book-btn"
          onClick={closeSidebar}
        >
          Book Now
        </NavLink>

      </div>
    </>
  );
}

export default Navbar;