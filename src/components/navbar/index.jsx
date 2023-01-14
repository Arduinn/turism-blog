import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import logo from "../../assets/images/logo.png"
export default function Navbar(){
    return(
        <nav>
            <Link className="logo" to="/">
                <img src={logo} alt="" />
            </Link>
            <div className="nav-menu">
                <li className="nav-menu-li">
                    <Link className="nav-menu-li-link" to="/">Home</Link>
                </li>
                <li className="nav-menu-li">
                    <Link className="nav-menu-li-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-menu-li">
                    <Link className="nav-menu-li-link" to="/events">Events</Link>
                </li>
                <li className="nav-menu-li">
                    <Link className="nav-menu-li-link" to="/about">About</Link>
                </li>
                <li className="nav-menu-li">
                    <Link className="nav-menu-li-link" to="/contact">Contact</Link>
                </li>
            </div>
        </nav>
    )
}