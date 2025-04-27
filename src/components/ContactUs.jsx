import React from 'react';
import '../style/ContactUs.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function ContactUs() {
    return (
        <div className="contactus-container">
            <div className="contactus-form-container">
                <h1>Contact <span>Us</span></h1>
                <form className="contact-form">
                    <label htmlFor="">Email: </label>
                    <input type="email" placeholder="Enter your Email" required />
                    <label htmlFor="">Subject: </label>
                    <input type="text" placeholder="Subject" required />
                    <label htmlFor="">Your Message: </label>
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>

                <div className="contact-details">
                    <div className="contact-detail">
                        <FaPhone className="contact-icon" />
                        <p>+91 9876543210</p>
                    </div>
                    <div className="contact-detail">
                        <FaEnvelope className="contact-icon" />
                        <p>matchpass@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="contactus-empty"></div>
        </div>
    );
}

export default ContactUs;
