import React from 'react'
import'./Navbar.css'

function Navbar() {
  return (
    <div id='navbar'>
        <div id='nav-heading'>Best Website Builders in the US</div>
        <hr className='navbar-line'/>
        <div id='navbar-contents'>
            <div id='navbar-contents-1'>
            <div className='navbar-links-text'> <img src="images/last-updated.png" className='imgs'  /> <span style={{paddingLeft:'0.5rem'}}> Last updated - February 20, 2022</span></div>
            <div className='navbar-links-text'> <img src='images/advertising.png' className='imgs' /><span style={{paddingLeft:'0.5rem'}}> Advertising Disclosure</span></div>
            </div>

            <div className='navbar-links-text'>
                <span>Top Relevant</span>
                <img src='/images/down_arrow.png' className='imgs' />
            </div>
        </div>
        <hr className='navbar-line' />

        <div id='navbar-links'>
            <div className='navbar-links-text'>Tools</div>
            <div className='navbar-links-text'>AWS Builder</div>
            <div className='navbar-links-text'>Start Build</div>
            <div className='navbar-links-text'>Build Supplies</div>
            <div className='navbar-links-text'>Tooling</div>
            <div className='navbar-links-text'>BlueHosting</div>
        </div>

        <div id='navbar-hosting'>
            <div>Home</div>
            <div><img src="/images/right-arrow.png" className='img-dwn' /></div>
            <div>Hosting for all</div>
            <div><img src="/images/right-arrow.png" className='img-dwn' /></div>
            <div>Hosting</div>
            <div><img src="/images/right-arrow.png" className='img-dwn' /></div>
            <div>Hosting6</div>
            <div><img src="/images/right-arrow.png" className='img-dwn' /></div>
            <div>Hosting5</div>
        </div>
    </div>
  )
}

export default Navbar
