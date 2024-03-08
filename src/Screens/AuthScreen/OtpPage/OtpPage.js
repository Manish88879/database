import React, { useRef } from 'react';
import '../OtpPage/OtpPage.css'; // Import the CSS file for styling
import { Navigate, useNavigate } from 'react-router-dom';

function OtpPage() {

  const navigate = useNavigate();

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);
  
    // Function to focus on the next input field
    const focusNextInput = (currentInput, nextInput) => {
      if (currentInput.value && currentInput.value.length === 1) {
        nextInput.current.focus();
      }
    };
    
  return (
    <div className="registration-container">
        <div className="headingStyle">
      <h1 className="admin">Verify</h1>
      <h1 className='reg'>Credentials</h1>
      </div>
      <p className='p'>Enter six digit code sent to your registered Email ID</p>
      <div className="otp-container">
      <input
        type="number"
        maxLength={1}
        ref={input1Ref}
        onChange={() => focusNextInput(input1Ref.current, input2Ref)}
      />
      <input
        type="number"
        maxLength={1}
        ref={input2Ref}
        onChange={() => focusNextInput(input2Ref.current, input3Ref)}
      />
      <input
        type="number"
        maxLength={1}
        ref={input3Ref}
        onChange={() => focusNextInput(input3Ref.current, input4Ref)}
      />
      <input
        type="number"
        maxLength={1}
        ref={input4Ref}
        onChange={() => focusNextInput(input4Ref.current, input4Ref)}
      />
      <input
        type="number"
        maxLength={1}
        ref={input4Ref}
        onChange={() => focusNextInput(input4Ref.current, input4Ref)}
      />
      <input
        type="number"
        maxLength={1}
        ref={input4Ref}
        onChange={() => focusNextInput(input4Ref.current, input4Ref)}
      />
    </div>
      <button type="submit" onClick={()=>navigate('/setupPassword')}>CONFIRM</button>
      <div className='belowButton'>
  <p>
   Resent in
    <a href="#" className="link">5 sec</a> 
  </p>
</div>
    </div>
  );
}

export default OtpPage;