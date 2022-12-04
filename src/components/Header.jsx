import react from 'react'
import './styling/Header.css'
import profilePic from '../assets/profile_linkedin.jpg'
// import { Link } from 'react-router-dom';

export default function Header() {
    const profilePicStyle = {flex:'1', width: '100%', height: '100%'};

    return (
        <div className='header'>
            <div className='profile_pic'>
                <img style={profilePicStyle} src={profilePic} alt="" />
            </div>
            <h2>Ton Hoang Nguyen (Bill)</h2>
            <h4 className='job_title'>Software engineer</h4>
            {/* <div>
                <Link to={{pathname:'https://www.w3schools.com/'}} target="_blank"></Link>
            </div> */}
        </div>
    )
}