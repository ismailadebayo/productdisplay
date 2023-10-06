import React from 'react'
import '../assets/styles/Nav.css'

const Nav = () => {
  return (
    <div>
        <nav>
          <div className='logo'>{'Logo'}</div>
          <ul>
            <li>About us</li>
            <li>See movies</li>
            <li>Contact</li>
          </ul>    
        </nav>
    </div>
  )
}

export default Nav

