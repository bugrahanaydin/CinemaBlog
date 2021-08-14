import React from 'react'

import {
  Button,
} from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import { useContext } from "react";

import { AuthContext } from '../context/authContext/AuthContext';
import {logoutStart} from "../context/authContext/AuthActions";


const LoginOutButton = () => {
const user = JSON.parse(localStorage.getItem("user"));
const { dispatch } = useContext(AuthContext);

return (
       <>
           {user ? ( <Button
                // logout BUTTON
                color="primary"
                textcolor="#ffffff"
                stlye={{ color: "#ffffff" }}
                variant="outlined"
                startIcon={
                  <AccountCircleOutlinedIcon style={{ color: "#ffffff" }} />
                }
                onClick={() => dispatch(logoutStart())}
                
              >
                Logout
              </Button>): ( <Button
                // login
                color="primary"
                textcolor="#ffffff"
                stlye={{ color: "#ffffff" }}
                variant="outlined"
                startIcon={
                  <AccountCircleOutlinedIcon style={{ color: "#ffffff" }} />
                }
                
              ><a href="http://localhost:3000/login">
                Login
             </a> </Button>
              )}
       </>
    )
};

export default LoginOutButton
