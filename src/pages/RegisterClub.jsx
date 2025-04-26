import React, { useState } from 'react';
import '../style/RegisterClub.css';

function RegisterClub() {
  const [formData, setFormData] = useState({
    clubName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    logo: null,
  });

  const [logoPreview, setLogoPreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        logo: file,
      });
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const removeLogo = () => {
    setFormData({
      ...formData,
      logo: null,
    });
    setLogoPreview(null);
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
        <h3>Register as <span style={{ color: '#ffae00ce' }}>Club</span></h3>
        <form onSubmit={handleSubmit}>
          <label>Club Name</label>
          <input
            type='text'
            name='clubName'
            value={formData.clubName}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone</label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Team Logo</label>
          <input
            type='file'
            accept='image/*'
            onChange={handleFileChange}
          />

          {/* Logo Preview Section */}
          {logoPreview && (
            <div className="logo-preview">
              <img src={logoPreview} alt="Team Logo Preview" />
              <button type="button" className="remove-logo" onClick={removeLogo}>
                Remove Logo
              </button>
            </div>
          )}

          <label>Address</label>
          <textarea
            name='address'
            value={formData.address}
            onChange={handleChange}
            rows='4'
            required
          ></textarea>

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

          <div className="checkbox-group" style={{ marginLeft: '300px' }}>
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

export default RegisterClub;

