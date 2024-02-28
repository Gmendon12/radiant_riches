import React from 'react'
import './Header.css'

function Header() {
  return (
    <div id='header'>
        <div id='header-contents'>
          <div style={{position:'relative', display:'flex', alignItems:'center'}}>
          <input type="text" id='header-input' />
          <img src="/images/search.png" alt="" id='search-img' />
          </div>
        <div className='header-text'>Categories</div>
        <div className='header-text'>Website Builders</div>
        </div>

        <div>
            <div className='header-text'>Todays Deals</div>
        </div>

    </div>
  )
}

export default Header