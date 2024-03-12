import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
//import Home from './Home'; // Import your Home component
import Splash from './Screens/SplashScreen'; // Import your Splash component
import RegisterPage from './Screens/AuthScreen/RegisterPage/RegisterPage';
import OtpPage from './Screens/AuthScreen/OtpPage/OtpPage';
import SetupPassword from './Screens/AuthScreen/SetupPassword/SetupPassword';
import HomePage from './Screens/Home/Home';
import PaymentScreen from '../src/Screens/Payment/PaymentScreen';
import BrokerScreen from './Screens/Brokers/BrokerScreen';
import LeadScreen from './Screens/Leads/LeadScreen'; 
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';

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
        <Route path="/PaymentScreen" element={<PaymentScreen/>} />
        <Route path="/BrokerScreen" element={<BrokerScreen/>} />
        <Route path="/LeadScreen" element={<LeadScreen/>} />
        <Route path="/ProfileScreen" element={<ProfileScreen/>} />

                  {/* <Route path="/home" component={Home} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
