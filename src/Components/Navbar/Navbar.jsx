import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Vikar Maulana</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Experience</li>
                    <li>Protfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className="button">
                Contact Us
            </button>
        </div>
    </div>
  )
}
