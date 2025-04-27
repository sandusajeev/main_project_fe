import React from 'react';
import '../Club/styleclub/ClubAddFeedback.css';

function ClubAddFeedback() {
  return (
    <div className="add-feedback-container">
      <div className="feedback-card show">
        <h2>Add <span>Feedback</span></h2>
        <form>
          <div className="form-group">
            <label>Enter Subject</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>Enter Your Feedback</label>
            <textarea name="feedback" rows="5" required />
          </div>

          <button type="submit" className="submit-btn">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default ClubAddFeedback;