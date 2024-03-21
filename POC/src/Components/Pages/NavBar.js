import React from 'react'
import { useState } from 'react';
import { MdList,MdPerson} from "react-icons/md";
import { FaHeart, FaHospital, FaPencilRuler } from "react-icons/fa";
import '../Pages/Navbar.css';
const NavBar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
           <h1 className= "logo">POC</h1>
            </a>
            <MdList
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            />
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="/dashboard"><FaHospital/>Dashboard </a>
                    </li>
                    <li>
                        <a href="/cst_account"><MdPerson/>Account</a>
                    </li>
                    <li>
                        <a href="/cst_service"><FaHeart/>Service</a>
                    </li>
                    <li>
                        <a href="/"><FaPencilRuler/>Report</a>
                    </li>
                </ul>
            </div>
        </nav>
  );
}
export default NavBar;