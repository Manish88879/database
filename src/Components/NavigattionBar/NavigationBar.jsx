import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LogoImage from '../../assets/OptimaLeads.png';

function Navbar() {
  const [selectedTab , setSelectedTab ] = useState(0);
  return (
    <AppBar position="static"  elevation={5} >
      <Toolbar style={{ justifyContent: 'space-between'  , backgroundColor: '#F8F8F8', padding: '30px'  }}>
      <Link to="/">
          <img src={LogoImage} alt="Logo" style={{ position: 'absolute' ,  height: '80px', marginRight: '150px' , top: '27px' , left: '-55px' }} />
        </Link>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography onClick={() => {setSelectedTab(0)}} variant="h6" component={Link} to="/homePage" style={{ fontWeight: '500' , fontSize: '18px' , margin: '0 20px', textDecoration: 'none',  color: selectedTab == 0?  '#D68B43' : '#626262' , marginLeft: '150px' }}>
            Home
          </Typography>
          <Typography onClick={() => {setSelectedTab(1)}} variant="h6" component={Link} to="/PaymentScreen" style={{fontSize: '18px' , margin: '0 30px', textDecoration: 'none', color: '#626262' }}>
            Payments
          </Typography>
          <Typography onClick={() => {setSelectedTab(2)}} variant="h6" component={Link} to="/BrokerScreen" style={{fontSize: '18px' , margin: '0 30px', textDecoration: 'none', color: '#626262' }}>
            Brokers
          </Typography>
          <Typography onClick={() => {setSelectedTab(3)}} variant="h6" component={Link} to="/LeadScreen" style={{fontSize: '18px' , margin: '0 30px', textDecoration: 'none', color: '#626262' }}>
            Leads
          </Typography>
          <Typography onClick={() => {setSelectedTab(4)}} variant="h6" component={Link} to="/ProfileScreen" style={{fontSize: '18px' , margin: '0 30px', textDecoration: 'none', color: '#626262' }}>
            Profile
          </Typography>
        </div>
        <IconButton color="inherit">
          <ExitToAppIcon />
          <Typography variant="h6" style={{ marginLeft: '5px' , color: '#626262' }}>Logout</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
