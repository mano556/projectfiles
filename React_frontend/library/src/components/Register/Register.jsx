import React from "react";
import { useState } from "react";
import  axios  from "axios";
import "./Register.css"
import{useNavigate} from "react-router-dom"

const Register =()=>{
    const[id,setId]=useState("");
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[dob,setDob]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate()
    const api = axios.create({
        baseURL: "http://localhost:8080",
      });
    const config = {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };

    async function handleSubmit(event)
    {
        event.preventDefault();
    
        await api.post("/add",

        {

            id: id,
            username: username,
            email: email,
            dob: dob,
            password: password
        
            },config); 
        
        alert("User Registration Successfull"); 
        setId("");
        setUsername("");
        setEmail("");
        setDob("");
        setPassword("");

    
  
}
    return(
        <div className="Register">
            
           {/* <form onSubmit={handleSubmit}>
          
    
            <input type="text"placeholder="id"onChange={(event) =>{setId(event.target.value);}}/>
            <input type="text" placeholder="username " onChange={(event)=>{setUsername(event.target.value);}}/>
            <input type="text" placeholder="Email " onChange={(event)=>{setEmail(event.target.value);}}/>
            <input type="text" placeholder="password "onChange={(event)=>{setDob(event.target.value);}}/>
          
            
            <button type="submit">Register</button>
            <a href="/login"> Already a customer Sign in?</a> */}
            {/* </form> */}
            <h1 class="text-center">Welcome to Book Library</h1>
        
        <form class="needs-validation" onSubmit={handleSubmit}>
        <div class="form-group was-validated">
                <label class="form-label" for="email">User name</label>
                <input class="form-control" type="username" id="username" required  onChange={(event)=>{setUsername(event.target.value);}}/>
                <div class="invalid-feedback">
                    Please enter your Username
                </div>
            </div>
          
            <div class="form-group was-validated">
                <label class="form-label" for="email">Email address</label>
                <input class="form-control" type="email" id="email" required onChange={(event)=>{setEmail(event.target.value);}}/>
                <div class="invalid-feedback">
                    Please enter your email address
                </div>
            </div>
            <div class="form-group was-validated">
                <label class="form-label" for="password">Date of birth</label>
                <input class="form-control" type="date" id="date" required onChange={(event)=>{setDob(event.target.value);}}/>
                <div class="invalid-feedback">
                    Please enter your password
                </div>
            </div>
            <div class="form-group was-validated">
                <label class="form-label" for="password">Password</label>
                <input class="form-control" type="password" id="password" required onChange={(event)=>{setPassword(event.target.value);}}/>
                <div class="invalid-feedback">
                    Please enter your password
                </div>
            </div>
            <div class="form-group form-check">
                <input class="form-check-input" type="checkbox" id="check"/>
                <label class="form-check-label" for="check">By signing up you agree to our <a href="#">Terms and conditions</a> and our <a href="#"> PrivacyPolicy</a></label>
            </div>
            <input class="btn btn-primary w-100" type="submit" value="Register"/>
            <p>Already have account the login:        <a href="/login">LOGIN</a></p>
        </form>

            


        </div>
    )
}

export default Register