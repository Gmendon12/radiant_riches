import React from 'react'
import './Contents.css'

function Content({builder, image, num, best, para, paraText, highlightsText, rating, review, stars,specsRating1, specs1,specsRating2, specs2, specs3, specsRating3 }) {
  return (
    <div id='contents-container'>
        { best && (
            <div id='contents-best'> <img src={image} id='contents-best-img' />{best}</div>
        )}
       
        <div id='contents-number'>
            <span id='contents-num-font'>{num}</span>
        </div>
        <div id='contents-flex'>
        <div id='contents-image'>
            <img src="/images/pc.png" alt="" id='contents-img' />
            <div id='contents-image-text'>{builder}</div>
        </div>

        <div>
        <p id='contents-para-one'> <b>{para}</b> {paraText} </p>
        <p id='main-highlights-text'><b>Main Highlights</b></p>
        {
            highlightsText && (
                <p id='main-highlights-para'>{highlightsText}</p> ) }

        { specs1 && (
            <div> 
                <div id='contents-specs-container'>
                    <div className='contents-specs-flex'>
                        <span className='specs-rating'>{specsRating1}</span>
                        <span className='specs'>{specs1}</span>
                    </div>
                    <div className='contents-specs-flex'>
                        <span className='specs-rating'>{specsRating2}</span>
                        <span className='specs'>{specs2}</span>
                    </div>
                    <div className='contents-specs-flex'>
                        <span className='specs-rating'>{specsRating3}</span>
                        <span className='specs'>{specs3}</span>
                    </div>
                </div>

                <div id='why-we-love-it-container'>
                    <div id='why-we-love-it'> Why we love it</div>
                    <div>
                        <div className='why-we-love-it-flex'>
                            <img src="/images/tick.png"/>
                            <span className='why-we-love-it-text'>Documentation</span>
                        </div>
                        <div className='why-we-love-it-flex'>
                            <img src="/images/tick.png"/>
                            <span className='why-we-love-it-text'>Easy Use</span>
                        </div>
                        <div className='why-we-love-it-flex'>
                            <img src="/images/tick.png"/>
                            <span className='why-we-love-it-text'>Out Of Box</span>
                        </div>
                    </div>
                </div>
            </div>
        )}        
        <div id='show-more-text'>Show more <img src='/images/arrow-down-blue.png' /></div>
        </div>

        <div id='contents-review'>
            <div id='contents-reviews-box'>
                <div id='contents-reviews-box-num'>{rating}</div>
                <div id='contents-reviews-box-text'>{review}</div>
                <img src={stars}/>
            </div>
            <div>
                <button id='contents-button'>View</button>
            </div>
        </div>
        </div>
       
        
    </div>
  )
}

export default Content