import react from 'react'
import './styling/Popup.css'

export default function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <h3>Contact me </h3>
                <button className='close-btn' onClick={() => props.triggerBtn(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}