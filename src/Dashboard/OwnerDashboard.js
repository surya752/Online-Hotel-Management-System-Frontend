import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import authService from "../services/auth.service";
import eventBus from "../common/EventBus";
import "../Navbar.css";
function OwnerDashboard() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

    return (
     
        <header>
      <h3> Hotel Management System</h3>
      <nav ref={navRef}>
        <Link to={"/ListEmployeeComponent"} className="nav-link active "> Employee</Link>
        <Link to={"/ListInventoryReportsComponent"} className="nav-link"> InventoryReports</Link>
        <Link to={"/ListRoomComponent"} className="nav-link">Room </Link>
        <Link to={"/ListReservationComponent"} className="nav-link">Reservations </Link>
        <Link to={"/ListSetRatesComponent"} className="nav-link">SetRates</Link>
        <Link to={"/ListGuestComponent"} className="nav-link">Guest</Link>
        <Link to={"/Button"} className="nav-link" > LogOut </Link>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" 
          onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
    )
 }
export default OwnerDashboard