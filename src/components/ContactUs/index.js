import './index.css'

import { FaGoogle, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'


const ContactUs = () =>
    <div
        className="contact-us-section"
    >
        <div className="contact-us-container">
            <button type="button" className="contactUs-button">
                <FaGoogle className="media-icon" />
            </button>
            <button type="button" className="contactUs-button">
                <FaTwitter className="media-icon" />
            </button>
            <button type="button" className="contactUs-button">
                <FaInstagram className="media-icon" />
            </button>
            <button type="button" className="contactUs-button">
                <FaYoutube className="media-icon" />
            </button>
        </div>
        <p className="contact-us">Contact us</p>
    </div>

export default ContactUs