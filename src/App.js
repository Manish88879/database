import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
//import Home from './Home'; // Import your Home component
import Splash from './Screens/SplashScreen'; // Import your Splash component
import RegisterPage from './Screens/AuthScreen/RegisterPage/RegisterPage';
import OtpPage from './Screens/AuthScreen/OtpPage/OtpPage';
import SetupPassword from './Screens/AuthScreen/SetupPassword/SetupPassword';
import HomePage from './Screens/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otpPage" element={<OtpPage />} />
        <Route path="/setupPassword" element={<SetupPassword/>} />
        <Route path="/homePage" element={<HomePage/>} />
                  {/* <Route path="/home" component={Home} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
