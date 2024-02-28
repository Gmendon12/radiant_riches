import React from 'react'
import './Content2.css'

function Contents2({cost, originalCost}) {

  const discount = ((originalCost - cost)/originalCost) * 100;  
  return (
    <div id='contents2-container'>
        <div>
            <img src='/images/pc.png' id='contents2-img' />
        </div>
         
         <div id='content2-text'>
            <div id='related-deals-limitedtime'>
                <span id='discount'>{discount.toFixed(0)}% Off</span>
                <span id='limited-time'>Limited time</span>
            </div>

            <div id='webbuilder'>Webbuilder</div>
            <p id='content2-para'>Computer Modern classic with wix support</p>
            <div id='content2-flex'>
            <span id='content2-cost'>${cost}</span>
            <span id='content2-originalcost'>${originalCost}</span>
            <span id='content2-discount'>({discount.toFixed(2)})%</span>
            </div>
            <button id='content2-button'>View Deal</button>
         </div>
    </div>
  )
}

export default Contents2