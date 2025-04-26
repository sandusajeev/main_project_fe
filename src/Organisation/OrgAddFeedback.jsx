import React, { useState, useEffect } from 'react';
import '../Organisation/styleorg/OrgAddFeedback.css';

function OrgAddFeedback() {
  const [formData, setFormData] = useState({
    name: '',
    feedback: '',
  });

  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFormVisible(true);
    }, 100); // Delay for animation
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', formData);
    // You can send data to backend here
  };

  return (
    <div className="add-feedback-container">
      <div className={`feedback-card ${formVisible ? 'show' : ''}`}>
        <h2>Add <span>Feedback</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Enter Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Enter Your Feedback</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default OrgAddFeedback;
