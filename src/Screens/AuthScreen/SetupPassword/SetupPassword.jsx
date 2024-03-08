import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./SetupPassword.css";


function SetupPassword() {
  const navigate = useNavigate();
  return (
    <div className="registration-container">
      <div className="headingStyle">
        <h1 className="admin">Setup</h1>
        <h1 className="reg">Password</h1>
      </div>
      <p className="p">Create a Strong Password only you can access </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <label htmlFor="field1">Enter New Password*</label> */}
          <div className="input-group">
          <label style={{marginBottom: '10px', width:' 100px' , marginLeft: '24px' , color: '#333333'}} htmlFor="field2">Enter New Password*</label>
            <input
              type="text"
              id="firstName"
              placeholder="************"
              name="firstName"
            />
            <p style={{marginLeft: '20px' , marginTop: '1px' , fontSize: '15px' , fontWeight: 300 , color: '#6D6D6D'}}>Use atleast 1 special and 1 numeric character </p>
          </div>
          <div className="input-group2">
          <label style={{marginBottom: '10px', width:' 100px' , marginLeft: '29px'}}  htmlFor="field2">Confirm New Password*</label>
            <div>
            <input
              type="text"
              id="lastName"
              placeholder="Password (min. 8 character)"
              name="lastName"
            />
            </div>
          </div>
        </div>
      <button type="submit" onClick={() => navigate("/homePage")}>
        CONFIRM
      </button>
    </div>
  );
}

export default SetupPassword;
