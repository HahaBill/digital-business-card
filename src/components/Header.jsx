import react from 'react'
import './styling/Header.css'
import profilePic from '../assets/profile_linkedin.jpg'
import linkedInIcon from '../assets/linkedin_icon.png'
import emailIcon from '../assets/email_icon.png'

export default function Header(props) {
    const profilePicStyle = {flex:'1', width: '100%', height: '100%'};
    const linkedInStyle = {flex:'1', width: '35%', height: '35%'};
    const emailStyle = {flex:'0.7', width: '20%', height: '20%'};

    function redirectToURL(url) {
        window.open(url, "_blank");
    }

    return (
        <div className='header'>
            <div className='profile_pic'>
                <img style={profilePicStyle} src={profilePic} alt="" />
            </div>
            <h2>Ton Hoang Nguyen (Bill)</h2>
            <h4 className='job_title'>Software engineer</h4>
            <div className='buttons'>
                <button className='email' onClick={() => props.triggerBtn(true)}>
                    <div className='emailContent'>
                    <img style={emailStyle} src={emailIcon}></img>
                    Email
                    </div>
                </button>
                <button className='linkedin' onClick={() => redirectToURL("https://www.linkedin.com/in/bill-n-11a2a0105/")}>
                    <div className='linkedInContent'>
                    <img style={linkedInStyle} src={linkedInIcon}></img>
                    LinkedIn
                    </div>
                </button>
            </div>
            {/* <div>
                <Link to={{pathname:'https://www.w3schools.com/'}} target="_blank"></Link>
            </div> */}
        </div>
    )
}