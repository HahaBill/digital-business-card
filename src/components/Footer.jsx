import React from 'react'
import './styling/Footer.css'
import twitterIcon from '../assets/Twitter Icon.png'
import facebookIcon from '../assets/Facebook Icon.png'
import instagramIcon from '../assets/Instagram Icon.png'
import githubIcon from '../assets/Github Icon.png'

export default function Footer() {

    function redirectToURL(url) {
        window.open(url, "_blank");
    }

    return (
        <div className='footer'>
            <button className='twitter' onClick={() => redirectToURL("https://twitter.com/HaHaBillTon")}>
                <div className='twitterContent'>
                <img src={twitterIcon}></img>
                </div>
            </button>
            <button className='facebook' onClick={() => redirectToURL("https://www.facebook.com/hahabillton/")}>
                <div className='facebookContent'>
                <img src={facebookIcon}></img>
                </div>
            </button>
            <button className='instagram' onClick={() => redirectToURL("https://www.instagram.com/shinrai_tensei/")}>
                <div className='instagramContent'>
                <img src={instagramIcon}></img>
                </div>
            </button>
            <button className='github' onClick={() => redirectToURL("https://github.com/HahaBill")}>
                <div className='gitHubContent'>
                <img src={githubIcon}></img>
                </div>
            </button>
        </div>
    )
}