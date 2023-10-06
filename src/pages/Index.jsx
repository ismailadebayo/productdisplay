import React from 'react'
import '../assets/styles/index.css'
const Index = () => {
  return (
    <div >
        <nav>
          <div className='logo'>{'Logo'}</div>
          <ul>
            <li>About us</li>
            <li>See movies</li>
            <li>Contact</li>
            <button className='nav-button'>Sponsor</button>
          </ul>    
        </nav>
        <div className='search-box'>
          <div className='search-center'>
              <input type="text"placeholder='search'/>
              <div className='button-box'>
                <button >Search</button>
                <button>Show all</button>
              </div>
          </div>
        </div>
       
        
    </div>
  )
}

export default Index

