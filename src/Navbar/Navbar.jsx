import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <img src="coronavirus.png" alt="logo"/>
            <NavLink to="/">
                <h1>CoronaChat</h1>
            </NavLink>
            <svg viewBox="0 0 24 24" className="comment-icon">
                <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" />
            </svg>
            <div className="mapa-link">
                <NavLink to="/mapa">
                    Mapa
                </NavLink>
            </div>
        </div>
    )
}