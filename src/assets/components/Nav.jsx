import React from 'react'

import { NavLink } from 'react-router-dom'
import ventixeLogo from '../images/Ventixe-Logo.svg'
import hamburgerMenu from '../images/HamburgerMeny.svg'
import checkSquareIcon from '../images/CheckSquare-icon.svg'
import ticketIcon from '../images/Ticket.svg'
import listStarIcon from '../images/ListStar.svg'

const Nav = () => {
  return (
     <aside className="sidebar">
    
        <NavLink to="/" className="NavLink">      
          <div className="logo-container">
              <img src={ventixeLogo} alt="Logo"/>
              <span className="logo-text">Ventixe</span>
          </div>
        </NavLink>
        <nav>
            <div className="hambugerMeny-container">
                <img className="hamburger-meny" src={hamburgerMenu} alt=""/>
            </div>
            
            <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <img className="nav-icon" src={ticketIcon} alt="Ticket" />
                <span className="nav-text">Events</span>
            </NavLink>
            
            <NavLink to="/events" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} >
                <img className="nav-icon" src={checkSquareIcon} alt="booking" />
                <span className="nav-text">Bookings</span>
            </NavLink>
            
        </nav>
      </aside>
    )
}

export default Nav