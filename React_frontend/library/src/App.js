import React from "react";
import './App.css';
// import React, { useState } from "react"

import Register from './components/Register/Register';
import Login from './components/login/login';
import Profile_page from "./components/admin/profile";
import Profile_table from "./components/admin/profile_table"
// import Navbar from "./components/navbar"
import{ BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

// import  Axios  from "axios";



function App(){

  return(
  <Router>
    
    {/* <Link to=''><button>Register</button></Link>&nbsp;&nbsp;&nbsp; */}
    {/* <Link to='login'><button>Login</button></Link>&nbsp;&nbsp;&nbsp; */}
    


   <Routes>
   
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='profile_table/admin' element={<Profile_page/>}/>
    <Route path='/profile_table' element={<Profile_table/>}/>
    
    
   </Routes>
    </Router>
 
 );       
}
export default App;
