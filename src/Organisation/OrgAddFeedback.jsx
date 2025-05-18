import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Organisation/styleorg/OrgAddFeedback.css';

function OrgAddFeedback() {
  return (
    <div className="add-feedback-container d-flex justify-content-center align-items-center p-4">
      <div className="feedback-card glass-card p-4 p-md-5 rounded">
        <h2 className="text-center mb-4">
          Add <span className="text-warning">Feedback</span>
        </h2>
        
        <form className="needs-validation" noValidate>
          <div className="mb-4">
            <label htmlFor="subject" className="form-label fw-bold">Enter Subject</label>
            <input 
              type="text" 
              className="form-control glass-input" 
              id="subject" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="feedback" className="form-label fw-bold">Enter Your Feedback</label>
            <textarea 
              className="form-control glass-input" 
              id="feedback" 
              rows="5" 
              required style={{height:'100px'}}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="submit-btn btn btn-warning btn-lg w-100 glass-btn py-3"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrgAddFeedback;
