import React from "react";
import "./login.css"
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import  axios  from "axios";


function Login() {
    const nav=useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

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
   
  let res = await api.post("/login",

        {
            email: email,
            password: password
        
            },config); 
        
        alert("User login Successfull"); 

        setEmail("");
        setPassword("");

        const obj=(res.data);
        let details=obj.type;

        if (details==="admin")
        {
            if(localStorage.getItem("AdminInfo")===null)
            {
                console.log(obj.id)
                localStorage.setItem("AdminInfo",JSON.stringify(obj))
                nav("/")
            }
        }
        else{
            if(localStorage.getItem("UserInfo")===null)
            {
                console.log(obj.id)
                localStorage.setItem("UserInfo",JSON.stringify(obj))
                nav("/")
            }

        }
    

}

    
    return(
        <div className="login">
            {/* <form>
            <input type="text" placeholder="Email" onChange={(event) =>{setEmail(event.target.value);}}/>
            <input type="text" placeholder="password" onChange={(event) =>{setPassword(event.target.value);}}/>
            <button onClick={handleSubmit}>Login</button>
            </form> */}
             <h1 class="text-center">Log in</h1>
        
        <form class="needs-validation" onSubmit={handleSubmit}>
            <div class="form-group was-validated">
                <label class="form-label" for="email">Email address</label>
                <input class="form-control" type="email" id="email" required onChange={(event) =>{setEmail(event.target.value);}}/>
                <div class="invalid-feedback">
                    Please enter your email address
                </div>
            </div>
            <div class="form-group was-validated">
                <label class="form-label" for="password">Password</label>
                <input class="form-control" type="password" id="password" required onChange={(event) =>{setPassword(event.target.value);}}/>
                <div class="invalid-feedback">
                    Please enter your password
                </div>
                <p> <a href="#">Forgot Your password?</a></p>
            </div>
            
            <input class="btn btn-primary w-100" type="submit" value="LOG IN"/>
        </form>
        </div>
    )
}

export default Login;