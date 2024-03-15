import React from 'react';
import './AddLeadsModal.css'
import CloseIcon from '@mui/icons-material/Close';

const AddLeadsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div style={{display: 'flex' , flexDirection: 'row' , justifyContent: 'space-between' , alignItems: 'center'}}>
        <h3>Create Lead</h3>
        <CloseIcon className="close-btn" onClick={onClose} />
        </div>
       
        
        <div>The Lead details can be modified later. You will have to upload a new lead with same Lead ID to override existing database entry.</div>
        <form onSubmit={handleSubmit}>
          {/* <label>
            Name:
            <input type="text" />
          </label> */}
          <div className="rows">
        <div className="input-groups">
          <input style={{width: '400px' , padding: '10px'}}   type="email" id="email" placeholder='Owner name' name="email" />
        </div>
        <div className="input-groups">
          <input style={{width: '400px' , padding: '10px'}} type="tel" id="phone" placeholder='Monthly Revenue' name="phone" />
        </div>
      </div>
      <div className="rows">
        <div className="input-groups">
          <input style={{width: '400px' , padding: '10px'}}   type="email" id="email" placeholder='Owner Email ID' name="email" />
        </div>
        <div className="input-groups">
          <input style={{width: '400px' , padding: '10px'}} type="tel" id="phone" placeholder='Owner Phone Number' name="phone" />
        </div>
      </div>
      <div className="rows">
        <div className="input-groups">
          <input style={{width: '400px' , padding: '10px'}}   type="email" id="email" placeholder='Industry' name="email" />
        </div>
        <div className="input-groups">
          <input style={{width: '400px' , padding: '10px'}} type="tel" id="phone" placeholder='Location' name="phone" />
        </div>
      </div>
      <div className="rows">
        <div className="input-groups">
          <input style={{width: '400px' , padding: '10px'}}   type="email" id="email" placeholder='Owner name' name="email" />
        </div>
        <div className="input-groups">
          <input style={{width: '400px' , padding: '10px'}} type="tel" id="phone" placeholder='Monthly Revenue' name="phone" />
        </div>
      </div>
      
          <button className='buttons'  type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default AddLeadsModal;
