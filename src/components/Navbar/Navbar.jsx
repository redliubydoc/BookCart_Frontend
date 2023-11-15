import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import BookTwoToneIcon from '@mui/icons-material/BookTwoTone';
import { NavLink } from 'react-router-dom';


import "./Navbar.css";
import { useEffect, useRef, useState } from 'react';

function Navbar({ className, id }) {

  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchDropdownRef = useRef();


  useEffect(function () {

    document.addEventListener("click", closeSearchDropdown);

    return (function () {
      document.removeEventListener("click", closeSearchDropdown);
    });

  }, []);

  return (
    <nav id={id} className={`navbar ${className}`}>
      <span className="navbar-brand">Book <BookTwoToneIcon/> Cart</span>
      
      <div className="navbar-search">
        <div className="search-dropdown"
          ref={searchDropdownRef}>
          <button className={"dropdown-trigger" + (showSearchDropdown ? " active" : "")}
            onClick={toggleSearchDropdown}>
            <span>Author</span>
            <ArrowDropDownTwoToneIcon/>
          </button>
          <ul className="dropdown-menu" onClick={closeSearchDropdown}>
            <li className="dropdown-item" value="">ISBN</li>
            <li className="dropdown-item" value="">Title</li>
            <li className="dropdown-item" value="">Author</li>
            <li className="dropdown-item" value="">Genre</li>
          </ul>
        </div>
        <input className="search-input" type="search" placeholder="search..."/>
        <button className="search-button">
          <ManageSearchIcon className="navbar-icon search-action"/>
        </button>
      </div>

      <ul className="navbar-nav">
        <li className="nav-item ">
          <NavLink className="nav-item-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-item-link" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-item-link" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item ">
          <FavoriteTwoToneIcon className="navbar-icon"/>
          <span className="nav-item-badge">3</span>
        </li>
        <li className="nav-item">
          <ShoppingCartTwoToneIcon className="navbar-icon"/>
          <span className="nav-item-badge">3</span>
        </li>

        <li className="nav-item dropdown">
          <img className="profile-img"  
            src="https://ui-avatars.com/api/?name=shubh" 
            alt=""/>
          
          <ul className="dropdown-menu">
            <li className="dropdown-item"> 
              <InventoryTwoToneIcon className="item-icon"/>
              <span className="item-text">Orders</span>
            </li>
            <li className="dropdown-item"> 
              <SettingsTwoToneIcon className="item-icon"/>
              <span className="item-text">Settings</span>
            </li>
            <li className="dropdown-separator"></li>
            <li className="dropdown-item logout"> 
              <ExitToAppTwoToneIcon className="item-icon"/>
              <span className="item-text">Logout</span>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );


  function toggleSearchDropdown(e) {

    e.stopPropagation();
    document.dispatchEvent(new Event("click"));
    setShowSearchDropdown(showSearchDropdown => !showSearchDropdown);
  }

  function closeSearchDropdown(e) {
    
    if (searchDropdownRef && searchDropdownRef.current !== e.target) {
      setShowSearchDropdown(false);
    }
  }
}

export default Navbar;
