import React from 'react'

function Footer() {
  return (
    <div className='footer container-fluid'>

      <div className='d-grid'>
      <a href='/home'>Get to Know Us</a>
        <p>Careers</p>
        <p>Blog</p>
        <p>About Amazon</p>
        <p>Investor Relations</p>
        <p>Eesy Devices</p>
        <p>Eesy Science</p>
        </div>
      <div className='d-grid'>
      <a href='/home'>Make Money with Us</a>
        <p>Sell products on Eesy</p>
        <p>Sell on Eesy Business</p>
        </div>
      <div className='d-grid'>
      <a href='/home'>Eesy Payment Products</a>
        <p>Eesy Business Card</p>
        <p>Shop with Points</p>
        </div>
      <div className='d-grid'>
      <a href='/home'>Let Us Help You</a>
        <p>Eesy and<br/>COVID-19</p>
        <p>Your Account</p>
        </div>

    
    </div>
  )
}

export default Footer