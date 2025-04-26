import React, { useState } from 'react';
import './RegisterOrg.css';

function OrganisationRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    place: '',
    position: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='register-container'>
      <div className='register-card'>
        <h3>Register as Organisation</h3>
        <form onSubmit={handleSubmit}>
          <label>Organisation Name</label>
          <input type='text' name='name' value={formData.name} onChange={handleChange} required />

          <label>Email</label>
          <input type='email' name='email' value={formData.email} onChange={handleChange} required />

          <label>Phone</label>
          <input type='tel' name='phone' value={formData.phone} onChange={handleChange} required />

          <label>Place</label>
          <input type='text' name='place' value={formData.place} onChange={handleChange} required />

          <label>Position</label>
          <input type='text' name='position' value={formData.position} onChange={handleChange} required />

          <label>Password</label>
          <input type='password' name='password' value={formData.password} onChange={handleChange} required />

          <label>Confirm Password</label>
          <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} required />

          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
}

export default OrganisationRegister;
