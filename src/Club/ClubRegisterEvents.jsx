import React from 'react';
import '../Club/styleclub/ClubRegisterEvents.css';

function ClubRegisterEvents() {
return (
    <div className="register-event-container">
        <h2>Confirm Your <span>Registration</span></h2>

        <form className="register-form">
            <div className="form-row">
                <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="Enter your phone number" minLength="10" pattern="\d+" title="Please enter a valid phone number" required />
                </div>
                <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" pattern="\d{16}" title="Card number must be 16 digits" required />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="123" pattern="\d{3,4}" title="CVV must be 3 or 4 digits" required />
                </div>
                <div className="form-group">
                    <label>Expiration Month</label>
                    <input type="number" placeholder="MM" min="1" max="12" title="Enter a valid month (1-12)" required />
                </div>
                <div className="form-group">
                    <label>Expiration Year</label>
                    <input type="text" placeholder="YYYY" pattern="\d{4}" title="Year must be 4 digits" required />
                </div>
            </div>

            <div className="payment-logos">
                <p>Supported Cards:</p>
                <div className="logos">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                </div>
            </div>

            <div className="upi-section">
                <p>Or Pay via UPI:</p>
                <div className="upi-logos">
                    <img src="https://static.vecteezy.com/system/resources/previews/021/515/020/non_2x/google-pay-logo-symbol-design-illustration-free-vector.jpg" alt="Google Pay" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCMMm1o1RmcTLaofZAWNdEEGhSccXNuvMDw&s" alt="PhonePe" />
                </div>
            </div>

            <button type="submit" className="confirm-btn">Confirm Registration</button>
        </form>
    </div>
);
}

export default ClubRegisterEvents;

