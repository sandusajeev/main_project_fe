import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Organisation/styleorg/OrgCreateEvent.css';

function OrgCreateEvent() {
  return (
    <div className="org-event-container">
      <div className="org-event-wrapper">
        <div className="org-event-card p-5 rounded-4">
          <div className="org-event-header text-center mb-5">
            <h2 className="display-5 fw-bold">
              Create <span className="text-warning">Event</span>
            </h2>
            <p className="text-muted">Fill out the form to create your event</p>
          </div>

          <form className="needs-validation" noValidate>
            <div className="row g-4 mb-4">
              <div className="col-lg-6">
                <div className="form-floating">
                  <input 
                    type="text" 
                    className="form-control org-event-input" 
                    id="eventName" 
                    placeholder="Event Name"
                    required 
                  />
                  <label htmlFor="eventName" className="fw-semibold">Event Name</label>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="form-floating">
                  <input 
                    type="text" 
                    className="form-control org-event-input" 
                    id="category" 
                    placeholder="Category"
                    required 
                  />
                  <label htmlFor="category" className="fw-semibold">Category</label>
                </div>
              </div>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-lg-6">
                <div className="form-floating">
                  <input 
                    type="date" 
                    className="form-control org-event-input" 
                    id="startDate" 
                    placeholder="Start Date"
                    required 
                  />
                  <label htmlFor="startDate" className="fw-semibold">Start Date</label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-floating">
                  <input 
                    type="date" 
                    className="form-control org-event-input" 
                    id="endDate" 
                    placeholder="End Date"
                    required 
                  />
                  <label htmlFor="endDate" className="fw-semibold">End Date</label>
                </div>
              </div>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-lg-6">
                <div className="form-floating">
                  <input 
                    type="time" 
                    className="form-control org-event-input" 
                    id="startTime" 
                    placeholder="Start Time"
                    required 
                  />
                  <label htmlFor="startTime" className="fw-semibold">Start Time</label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-floating">
                  <input 
                    type="time" 
                    className="form-control org-event-input" 
                    id="endTime" 
                    placeholder="End Time"
                    required 
                  />
                  <label htmlFor="endTime" className="fw-semibold">End Time</label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="form-floating">
                <textarea 
                  className="form-control org-event-input" 
                  id="place" 
                  placeholder="Place"
                  style={{ height: '100px' }}
                  required
                ></textarea>
                <label htmlFor="place" className="fw-semibold">Place</label>
              </div>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-lg-6">
                <div className="form-floating">
                  <input 
                    type="text" 
                    className="form-control org-event-input" 
                    id="winnerPrize" 
                    placeholder="Winner Prize"
                  />
                  <label htmlFor="winnerPrize" className="fw-semibold">Winner Prize</label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-floating">
                  <input 
                    type="text" 
                    className="form-control org-event-input" 
                    id="participationAge" 
                    placeholder="Eg: 17-30"
                  />
                  <label htmlFor="participationAge" className="fw-semibold">Participation Age Range</label>
                </div>
              </div>
            </div>

            <div className="row g-4 mb-5">
              <div className="col-lg-6">
                <div className="form-floating">
                  <input 
                    type="number" 
                    className="form-control org-event-input" 
                    id="registrationFee" 
                    placeholder="Registration Fee (₹)"
                  />
                  <label htmlFor="registrationFee" className="fw-semibold">Registration Fee (₹)</label>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input 
                    type="file" 
                    className="form-control org-event-input py-3" 
                    id="eventLogo" 
                    accept="image/*" 
                  />
                  <label htmlFor="eventLogo" className="form-label fw-semibold mb-3">Event Logo</label>
                </div>
              </div>
            </div>

            <div className="d-grid">
              <button 
                type="submit" 
                className="btn btn-warning btn-lg org-event-btn py-3 fw-bold"
              >
                <i className="bi bi-calendar-plus me-2"></i> Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrgCreateEvent;














































































// import React, { useState } from 'react';
// import '../Organisation/styleorg/OrgCreateEvent.css';

// function OrgCreateEvent() {
//   const [formData, setFormData] = useState({
//     eventName: '',
//     category: '',
//     startDate: '',
//     endDate: '',
//     startTime: '',
//     endTime: '',
//     place: '',
//     winnerPrize: '',
//     participationAge: '',
//     registrationFee: '',
//     eventLogo: null,
//   });

//   const [logoPreview, setLogoPreview] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({
//         ...formData,
//         eventLogo: file,
//       });
//       setLogoPreview(URL.createObjectURL(file));
//     }
//   };

//   const removeLogo = () => {
//     setFormData({
//       ...formData,
//       eventLogo: null,
//     });
//     setLogoPreview(null);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Event Created:', formData);
//   };

//   return (
//     <div className="create-event-container">
//       <div className="create-event-card">
//         <h2>Create <span>Event</span></h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Event Name</label>
//               <input
//                 type="text"
//                 name="eventName"
//                 value={formData.eventName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Category</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Start Date</label>
//               <input
//                 type="date"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>End Date</label>
//               <input
//                 type="date"
//                 name="endDate"
//                 value={formData.endDate}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Start Time</label>
//               <input
//                 type="time"
//                 name="startTime"
//                 value={formData.startTime}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>End Time</label>
//               <input
//                 type="time"
//                 name="endTime"
//                 value={formData.endTime}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group" style={{ width: '100%' }}>
//               <label>Place</label>
//               <textarea
//                 name="place"
//                 value={formData.place}
//                 onChange={handleChange}
//                 rows="3"
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Winner Prize</label>
//               <input
//                 type="text"
//                 name="winnerPrize"
//                 value={formData.winnerPrize}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Participation Age Range</label>
//               <input
//                 type="text"
//                 name="participationAge"
//                 value={formData.participationAge}
//                 onChange={handleChange}
//                 placeholder="Eg: 17-30"
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Registration Fee (₹)</label>
//               <input
//                 type="number"
//                 name="registrationFee"
//                 value={formData.registrationFee}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Event Logo</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//               />
//               {logoPreview && (
//                 <div className="logo-preview">
//                   <img src={logoPreview} alt="Event Logo Preview" />
//                   <button type="button" className="remove-logo" onClick={removeLogo}>
//                     Remove Logo
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           <button type="submit" className="create-btn">Create Event</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default OrgCreateEvent;

