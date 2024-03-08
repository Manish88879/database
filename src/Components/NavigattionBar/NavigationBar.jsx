import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LogoImage from '../../assets/OptimaLeads.png';

function Navbar() {
  return (
    <AppBar position="static"  elevation={5} >
      <Toolbar style={{ justifyContent: 'space-between'  , backgroundColor: '#F8F8F8', padding: '30px'  }}>
      <Link to="/">
          <img src={LogoImage} alt="Logo" style={{ position: 'absolute' ,  height: '80px', marginRight: '50px' , top: '27px' , left: '-55px' }} />
        </Link>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h6" component={Link} to="/homePage" style={{ fontWeight: '500' , fontSize: '18px' , margin: '0 20px', textDecoration: 'none', color: '#626262' , marginLeft: '100px' }}>
            Home
          </Typography>
          <Typography variant="h6" component={Link} to="/page2" style={{fontSize: '18px' , margin: '0 30px', textDecoration: 'none', color: '#626262' }}>
            Payments
          </Typography>
          <Typography variant="h6" component={Link} to="/page3" style={{fontSize: '18px' , margin: '0 30px', textDecoration: 'none', color: '#626262' }}>
            Brokers
          </Typography>
          <Typography variant="h6" component={Link} to="/page4" style={{fontSize: '18px' , margin: '0 30px', textDecoration: 'none', color: '#626262' }}>
            Leads
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
