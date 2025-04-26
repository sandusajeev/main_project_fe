import React, { useState } from 'react';
import '../style/RegisterOrg.css';

function RegisterOrg() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    place: '',
    position: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert('Please accept the Terms and Conditions.');
      return;
    }
    console.log(formData);
  };

  return (
    <div className='register-container'>
      <div className='register-card'>
        <h3>Register as <span style={{ color: '#ffcc00' }}>Organisation</span></h3>
        <form onSubmit={handleSubmit}>
          <label>Organisation Name</label>
          <input type='text' name='name' value={formData.name} onChange={handleChange} required />

          <label>Email</label>
          <input type='email' name='email' value={formData.email} onChange={handleChange} required />

          <label>Phone</label>
          <input type='tel' name='phone' value={formData.phone} onChange={handleChange} required />

          <label>Address</label>
          <input type='text' name='place' value={formData.place} onChange={handleChange} required />

          <label>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="checkbox-group" style={{marginLeft:'300px'}}>
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              required
            />
            <label htmlFor="acceptTerms">I accept the Terms and Conditions</label>
          </div>

          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterOrg;
