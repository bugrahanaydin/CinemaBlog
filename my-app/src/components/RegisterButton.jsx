import React from 'react'

import {
  Button,
} from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
const RegisterButton = () => {
  const user = JSON.parse(localStorage.getItem("user"));
    return (
        
        <>
        <Button
                // register
                color="primary"
                textcolor="#ffffff"
                stlye={{ color: "#ffffff" }}
                variant="outlined"
                startIcon={
                  <AccountCircleOutlinedIcon style={{ color: "#ffffff" }} />

                }
                style={user ? { display: "none" } : { display: "" }}
                ><a href="http://localhost:3000/register">
                Register
             </a> </Button>
        </>

    )
}

export default RegisterButton
