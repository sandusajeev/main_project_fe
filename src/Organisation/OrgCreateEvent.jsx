import React, { useState } from 'react';
import '../Organisation/styleorg/OrgCreateEvent.css';

function OrgCreateEvent() {
  const [formData, setFormData] = useState({
    eventName: '',
    category: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    place: '',
    winnerPrize: '',
    participationAge: '',
    registrationFee: '',
    eventLogo: null,
  });

  const [logoPreview, setLogoPreview] = useState(null);

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
        eventLogo: file,
      });
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const removeLogo = () => {
    setFormData({
      ...formData,
      eventLogo: null,
    });
    setLogoPreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Created:', formData);
    // You can send this data to backend here
  };

  return (
    <div className="create-event-container">
      <div className="create-event-card">
        <h2>Create <span>Event</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Event Name</label>
              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Time</label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>End Time</label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group" style={{ width: '100%' }}>
              <label>Place</label>
              <textarea
                name="place"
                value={formData.place}
                onChange={handleChange}
                rows="3"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Winner Prize</label>
              <input
                type="text"
                name="winnerPrize"
                value={formData.winnerPrize}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Participation Age Range</label>
              <input
                type="text"
                name="participationAge"
                value={formData.participationAge}
                onChange={handleChange}
                placeholder="Eg: 17-30"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Registration Fee (₹)</label>
              <input
                type="number"
                name="registrationFee"
                value={formData.registrationFee}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Event Logo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {logoPreview && (
                <div className="logo-preview">
                  <img src={logoPreview} alt="Event Logo Preview" />
                  <button type="button" className="remove-logo" onClick={removeLogo}>
                    Remove Logo
                  </button>
                </div>
              )}
            </div>
          </div>

          <button type="submit" className="create-btn">Create Event</button>
        </form>
      </div>
    </div>
  );
}

export default OrgCreateEvent;

