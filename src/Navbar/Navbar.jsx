import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-home">
                <img src="coronavirus.png" alt="logo"/>
                <NavLink to="/">
                    <h1>CoronaChat</h1>
                </NavLink>
                <svg viewBox="0 0 24 24" className="comment-icon">
                    <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" />
                </svg>
            </div>
            <div className="nav-links">
                <div className="nav-link">
                    <NavLink to="/info">
                        <div>
                            Noticias
                        </div>
                        {/* <span>
                            <svg viewBox="0 0 24 24" className="info-icon">
                                <path fill="currentColor" d="M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z" />
                            </svg>                    
                        </span>          */}
                    </NavLink>
                </div>
                <div className="nav-link">
                    <NavLink to="/mapa">
                        Mapa
                    </NavLink>
                </div>
            </div>
        </div>
    )
}