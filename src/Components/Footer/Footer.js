import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div id='footer'>
        <div id='footer-contents'>
            <div className='footer-content1'>
                <div className='footer-head'>CATEGORIES</div>
                <div className='footer-links'>
                <div>Web Builder</div>
                <div>Hosting</div>
                <div>Data Center</div>
                <div>Robotic-Automation</div>
                </div>
            </div>

            <div className='footer-content1'>
                <div className='footer-head'>CONTACT</div>
                <div className='footer-links'>
                <div>Contact</div>
                <div>Privay Policy</div>
                <div>Terms of Service</div>
                <div>Categories</div>
                <div>About</div>
                </div>
            </div>
        </div>

        <div>
            <div className='footer-links-2'>
            <span>United States</span>
            <img src='/images/usa.png' id='usa-btn' />
            </div>
        </div>
    </div>
  )
}

export default Footer