import React from 'react';
import '../RegisterPage/RegisterPage.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const navigate = useNavigate();
  return (
    <div className="registration-container">
        <div className="headingStyle">
      <h1 className="admin">{'Admin  '}</h1>
      <h1 className='reg'>Registration</h1>
      </div>
      <p className='p'>Get Access to high standards industry leads</p>
      <div className="row">
        <div className="input-group">
          <input style={{marginLeft: '120px', padding: '10px'}} type="text" id="firstName" placeholder='Enter First Name' name="firstName" />
        </div>
        <div className="input-group">
          <input style={{width: '250px' , marginRight: '100px' , padding: '10px'}} type="text" id="lastName" placeholder='Enter Last Name' name="lastName" />
        </div>
      </div>
      <div className="row">
        <div className="input-group">
          <input style={{marginLeft: '130px', padding: '10px'}}   type="email" id="email" placeholder='yourmail@company.com' name="email" />
        </div>
        <div className="input-group">
          <input style={{width: '250px' , marginRight: '100px', padding: '10px'}} type="tel" id="phone" placeholder='+91   Phone' name="phone" />
        </div>
      </div>
      <button type="submit" onClick={() =>navigate('/otpPage')}>PROCEED</button>
      <div className='belowButton'>
  <p>
    By proceeding you agree to our 
    <a href="#" className="link">Terms of Use</a> 
    and confirm you have read our 
    <a href="#" className="link">Privacy and Cookie Statement</a>.
  </p>
</div>
    </div>
  );
}

export default RegistrationPage;