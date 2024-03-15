import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LogoImage from '../../assets/OptimaLeads.png';

function NavigationBar({tab}) {
  const [selectedTab , setSelectedTab ] = useState(0);
  return (
    <AppBar position="static"  elevation={5} >
      <Toolbar style={{ justifyContent: 'space-between'  , backgroundColor: '#F8F8F8', padding: '30px'  }}>
      <Link to="/">
          <img src={LogoImage} alt="Logo" style={{ position: 'absolute' ,  height: '80px', marginRight: '150px' , top: '27px' , left: '-55px' }} />
        </Link>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h6" component={Link} to="/homePage" style={{ fontWeight: '500' , fontSize: '18px' , margin: '0 20px', textDecoration: 'none',  color: tab == 0?  '#D68B43' : '#626262' , marginLeft: '160px' , backgroundColor: tab == 0 ?  '#FFFFFF' : '#F8F8F8', paddingInline: '20px' , paddingBlock: '10px' , borderRadius: '50px'}}>
            Home
          </Typography>
          <Typography  variant="h6" component={Link} to="/PaymentScreen" style={{fontSize: '18px' , margin: '0 15px', textDecoration: 'none', color:tab == 1?  '#D68B43' :  '#626262' ,backgroundColor: tab == 1 ?  '#FFFFFF' : '#F8F8F8',paddingInline: '20px' , paddingBlock: '10px' , borderRadius: '50px'}}>
            Payments
          </Typography>
          <Typography  variant="h6" component={Link} to="/BrokerScreen" style={{fontSize: '18px' , margin: '0 15px', textDecoration: 'none', color: tab == 2?  '#D68B43' :  '#626262' ,backgroundColor: tab == 2 ?  '#FFFFFF' : '#F8F8F8', paddingInline: '20px' , paddingBlock: '10px' , borderRadius: '50px'}}>
            Brokers
          </Typography>
          <Typography  variant="h6" component={Link} to="/LeadScreen" style={{fontSize: '18px' , margin: '0 15px', textDecoration: 'none', color:tab == 3?  '#D68B43' :  '#626262' , backgroundColor: tab == 3 ?  '#FFFFFF' : '#F8F8F8', paddingInline: '20px' , paddingBlock: '10px' , borderRadius: '50px'}}>
            Leads
          </Typography>
          <Typography  variant="h6" component={Link} to="/ProfileScreen" style={{fontSize: '18px' , margin: '0 15px', textDecoration: 'none', color:tab == 4?  '#D68B43' :  '#626262' , backgroundColor: tab == 4 ?  '#FFFFFF' : '#F8F8F8', paddingInline: '20px' , paddingBlock: '10px' , borderRadius: '50px'}}>
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

export default NavigationBar;
