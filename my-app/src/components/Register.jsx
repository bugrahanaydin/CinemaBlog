import './login.css';
//import axios from "axios";
//import { useState } from 'react';
import React ,{ useContext, useState } from 'react';
import {
  Button,
  TextField,
  Grid,
} from "@material-ui/core";
/*import { useHistory } from "react-router-dom";
import { useRef } from "react";*/
import { AuthContext } from '../context/authContext/AuthContext';
import {register} from "../context/authContext/apiCalls"

export default function Register (){
    /* const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

   const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

const handleStart = () => {
    
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("http://127.0.0.1:5000/auth/register", { email,username, password });
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };*/
      const [email,setEmail]=useState("");
       const [username, setUsername] = useState("");
       const [password,setPassword]=useState("");

    const {isFetching,dispatch} = useContext(AuthContext);
     const user = JSON.parse(localStorage.getItem("user"));


    const handleRegister = (e) => {
        e.preventDefault();

        register({email, password, username}, dispatch);
       /* if(register){
          window.location.href = "http://localhost:3000/"
        }*/
};
return (
          <Grid
              container
  spacing={1}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '70vh' }}>
             <Grid item xs={2}>
      <form className="register">
               <h3>Please Register</h3>
               <TextField /*ref={emailRef}*/onChange={(e)=>setEmail(e.target.value)} className="txtField" tpye="Email"id="outlined-basic" label="Email"  variant="outlined"style={{marginTop: '10px'}}/>
         <TextField  /*ref={usernameRef}*/ onChange={(e)=>setUsername(e.target.value)}className="txtField" tpye="Username"id="outlined-basic" label="Username"  variant="outlined" style={{marginTop: '10px'}}/>
         <TextField  /*ref={passwordRef}*/ onChange={(e)=>setPassword(e.target.value)} className="txtField" type="Password"id="outlined-basic" label="Password" variant="outlined"style={{marginTop: '10px'}} />
         <Button  disabled={isFetching} onClick={handleRegister}/*onClick={handleFinish}*/color="primary" style={{marginTop: '10px'}}>Register</Button>
             </form>
  </Grid>  
          


        </Grid>
    )
}


