import react from 'react'
import './styling/Header.css'
import profilePic from '../assets/profile_linkedin.jpg'

export default function Header() {
    return (
        <div>
            <div className='profile_pic'>
                <img src={profilePic} alt="" />
            </div>
            <h2>Ton Hoang Nguyen (Bill)</h2>
        </div>
    )
}