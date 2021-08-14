import './login.css';
import React ,{ useContext, useState } from 'react';
import {
  Button,
  TextField,
} from "@material-ui/core";
import { AuthContext } from '../context/authContext/AuthContext';
import {login} from "../context/authContext/apiCalls"
export default function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
const {isFetching,dispatch} = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();

        login({email, password}, dispatch);
      
};
    return (
     
        <div className="login">
            
            <form className="loginForm">
               <h3>Please log in</h3>
         <TextField onChange={(e)=>setEmail(e.target.value)} className="txtField" tpye="Email"id="outlined-basic" label="Email"  variant="outlined" style={{marginTop: '10px'}}/>
         <TextField onChange={(e)=>setPassword(e.target.value)} className="txtField" type="Password"id="outlined-basic" label="Password" variant="outlined" style={{marginTop: '10px'}}/>
         <Button disabled={isFetching} onClick={handleLogin} color="primary" style={{marginTop: '10px'}}>Login</Button>
             </form>


        </div>
    )
}


