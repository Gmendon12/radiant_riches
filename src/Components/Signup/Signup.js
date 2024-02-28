import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div id='signup'>
        <div id='signup-text'>
            Sign up and get exclusive special deals
        </div>
       <div>
        <input type="text" id='signup-input'/>
       <button id='signup-button'>Sign Up</button>
       </div>
    </div>
  )
}

export default Signup