import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OptimalLogo from '../assets/OptimaLeads.png';
import './SplashScreen.css'; // Import the CSS file

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/register');
    }, 2000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
    console.log("Splash Screen ")
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src={OptimalLogo} className="splash-logo" alt="logo" />
    </div>
  );
}

export default Splash;
