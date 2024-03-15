import React, { useEffect } from 'react'
import NavigationBar from '../../Components/NavigattionBar/NavigationBar'
import Footer from '../../Components/Footer/Footer'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import './BrokerDetailScreen.css'
import { useNavigate } from 'react-router-dom';

export default function BrokerDetailScreen() {
    const navigate = useNavigate();
    useEffect(() => {
        console.log("Welcome to the Profile Screen")
    })
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , backgroundColor: '#F8F8F8' }}>
      <NavigationBar tab={2}/>
      <div style={{backgroundColor: '#FFFFFF' , width: '82%' , height: '100vh' ,  marginTop: '50px', marginBottom: '50px' , borderRadius: '10px' , paddingInline: '80px' , paddingBlock: '8px' ,  }}>
        
        <div style={{ display: 'flex' , flexDirection: 'row' }}>
            {/* Left Part */}
            <div style={{  width: '100%', display: 'flex', flexDirection: 'column' }}>
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '14vh', marginRight: '10%' }}>
    <h2 style={{ whiteSpace: 'nowrap' , fontWeight: '500' }}>Boker/Samuel</h2>
    <div style={{ marginLeft: '25px', whiteSpace: 'nowrap' , fontSize: '13px' , color: '#333333' }}>Last Modified: 18/03/2023</div>
    <div style={{ display: 'flex', position: 'absolute', height: '20px', backgroundColor: '#f2dcc6', left: '50%', paddingInline: '15px', paddingBlock: '5px', alignItems: 'center' }}>
      <ModeOutlinedIcon style={{ marginInline: '2px', height: '15px' }} />
      <div>Edit Profile</div>
    </div>
  </div>
  <div className='profileStyle'>
  <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="Your Image" style={{
    width: '100%',

    height: '100%',
    borderRadius: '50%', // To ensure the image is also circular
    border: '2px solid white', // White border around the circular image
  }} />
</div>
<div className="profileInput">
          <label style={{marginBottom: '50px'  , color: '#333333'}}  htmlFor="field2">Full Name</label>
            <div>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your name "
              name="lastName"
            />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' , marginTop: '-15%'}}>
  <div className="profileInput" style={{ marginRight: '20%' , width: '20%' }}>
    <label style={{ marginBottom: '50px', color: '#333333' }} htmlFor="field1">Email ID</label>
    <div>
      <input
        type="text"
        id="firstName"
        placeholder="yourmail@company.com"
        name="firstName"
      />
    </div>
  </div>

  <div className="profileInput" style={{marginLeft: '20px' , width: '20%'}}>
    <label style={{ marginBottom: '50px', color: '#333333'  }} htmlFor="field2">Phone No.</label>
    <div>
      <input
        type="text"
        id="lastName"
        placeholder="+91 9000000000"
        name="lastName"
      />
    </div>
  </div>
  
</div>
<div style={{ display: 'flex', flexDirection: 'row' , marginTop: '-15%'}}>
  <div className="profileInput" style={{ marginRight: '20%' , width: '20%' }}>
    <label style={{ marginBottom: '50px', color: '#333333' }} htmlFor="field1">Country</label>
    <div>
      <input
        type="text"
        id="firstName"
        placeholder="India"
        name="firstName"
      />
    </div>
  </div>

  <div className="profileInput" style={{marginLeft: '20px' , width: '20%'}}>
    <label style={{ marginBottom: '50px', color: '#333333'  }} htmlFor="field2">Currency</label>
    <div>
      <input
        type="text"
        id="lastName"
        placeholder="INR"
        name="lastName"
      />
    </div>
  </div>
  
</div>

</div>


        {/* Right Part */}
        <div style={{height: '80vh' , width: '55%'   , marginTop: '4vh'  ,borderLeft: '2px solid #C6C6C6' , paddingLeft: '3%'}}>
            <div style={{display: 'flex' , flexDirection: 'row' , alignItems: 'center'}}>
            <h2 style={{marginRight: '13px' , fontWeight: '500' , color: '#111111'}}>Activity</h2>
            <LaunchOutlinedIcon/>
            </div>
            <div style={ {height: '70vh' , width: '2px' , backgroundColor: '#E4E7EC' , position: 'absolute' , right: '30%'}}></div>
            <div style={{display: 'flex' , flexDirection: 'row'  , width: '111%'}}>
                <div style={{whiteSpace: 'nowrap' }}>
                    Jan 22 
                </div>
                <div style={{marginLeft: '35%'}}>
                <div style={{fontSize: '18px' , fontWeight: '600' }}>
                    245 Leads to  <span style={{ color: '#D68B43', textDecoration: 'underline' }}>Samuel</span>
                </div>
                <div style={{color: '#667085' ,  fontSize: '14px' , marginTop: '3%'}}>
                Note appears here; Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.
                </div>
                <div style={{ display: 'flex', paddingInline: '7px', paddingBlock: '10px', alignItems: 'center', border: '2px solid #D0D5DD', marginTop: '10%' }}>
  <TextSnippetOutlinedIcon style={{ marginInline: '2px', height: '20px', color: '#D68B43' }} />
  <div style={{ color: '#D68B43'}}>user.csv</div>
</div>

                </div>
            </div>
            <div style={{display: 'flex' , flexDirection: 'row'  , width: '111%', marginTop: '10%'}}>
                <div style={{whiteSpace: 'nowrap' }}>
                    Nov  4
                </div>
                <div style={{marginLeft: '35%'}}>
                <div style={{ fontSize: '18px', fontWeight: '600' , whiteSpace: 'none' }}>
  Payment Received from <span style={{ color: '#D68B43', textDecoration: 'underline' }}>Samuel</span>
</div>
                <div style={{color: '#667085' ,  fontSize: '14px' , marginTop: '3%'}}>
                Note appears here; Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.
                </div>
                <div style={{ display: 'flex', paddingInline: '7px', paddingBlock: '10px', alignItems: 'center', border: '2px solid #D0D5DD', marginTop: '10%' }}>
  <TextSnippetOutlinedIcon style={{ marginInline: '2px', height: '20px', color: '#D68B43' }} />
  <div style={{ color: '#D68B43', flex: 0 }}>invoice.pdf</div>
</div>

                </div>
            </div>
            <div style={{display: 'flex' , flexDirection: 'row'  , width: '111%' , marginTop: '10%'}}>
                <div style={{whiteSpace: 'nowrap' }}>
                    Nov 3
                </div>
                <div style={{marginLeft: '35%'}}>
                <div style={{fontSize: '20px' , fontWeight: '600' }}>
                     Broker Added
                </div>
        

                </div>
            </div>
        </div>
        </div>
       
      </div>
    </div>
  )
}
