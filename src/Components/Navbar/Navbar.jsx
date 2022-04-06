import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Vikar Maulana</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Experience</li>
                    <li>Protfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact
            </button>
        </div>
    </div>
  )
}
