import React from "react";
import { useState } from "react";
import  axios  from "axios";
import{useNavigate} from "react-router-dom"
const Profile_page =()=>{
    const[ISBN_NO,setISBN_NO]=useState("0");
    const[Bookname,setBookname]=useState("0");
    const[Author,setAuthor]=useState("0");
    const[Total_copies,setTotal_copies]=useState("0");
    const[Available_copies,setAvailable_copies]=useState("0");
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
    setAvailable_copies(Total_copies)
        console.log(Bookname)
        let res =  await api.post("/addbook",

        {

            iSBN_NO:ISBN_NO ,
            bookname: Bookname,
            author: Author,
            total_copies: Total_copies,
            available_copies: Available_copies
        
            },config); 
        console.log(res.data)
        alert("Book details added successfuly"); 
        let m=Bookname
        console.log(m)
        setISBN_NO("");
        setBookname("");
        setAuthor("");
        setTotal_copies("");
        setAvailable_copies("");

    
  
}
    return(
        <div className="container">
            
           {/* <form onSubmit={handleSubmit}>
        
            <input type="text" placeholder="Bookname " onChange={(event)=>{setBookname(event.target.value);}}/>
            <input type="text" placeholder="Author " onChange={(event)=>{setAuthor(event.target.value);}}/>
            <input type="text" placeholder="Total copies "onChange={(event)=>{setTotal_copies(event.target.value);}}/>
            
            
            <button type="submit">Add</button>
            </form> */}
            
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="signup-form">
                <form  class="mt-5 border p-4 bg-light shadow"  onSubmit={handleSubmit}>
                    <h4 class="mb-5 text-secondary">Add Your Favourite Book</h4>
                    <div class="row">
                        <div class="mb-3 col-md-6">
                            <label>Book name<span class="text-danger">*</span></label>
                            <input type="text" name="bname" class="form-control" placeholder="Enter Book name" onChange={(event)=>{setBookname(event.target.value);}}/>
                        </div>

                        <div class="mb-3 col-md-6">
                            <label>Book Author<span class="text-danger">*</span></label>
                            <input type="text" name="Aname" class="form-control" placeholder="Enter Author" onChange={(event)=>{setAuthor(event.target.value);}}/>
                        </div>

                        <div class="mb-3 col-md-12">
                            <label>No. of coppies<span class="text-danger">*</span></label>
                            <input type="number" name="number" class="form-control" placeholder="Enter no.of copies" onChange={(event)=>{setTotal_copies(event.target.value);}}/>
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Available Copies<span class="text-danger">*</span></label>
                            <input type="number" name="number" class="form-control" placeholder="Available copies"/>
                        </div>
                        <div class="col-md-12">
                           <button class="btn btn-primary float-end">ADD BOOK</button>
                        </div>
                    </div>
                    <p class="text-center mt-3 text-secondary"> <a href="/profile_table">Click here to go USER PROFILE PAGE </a></p>
                </form>
                
            
        </div>
    </div>
</div>



            


        </div>
    )
}

export default Profile_page