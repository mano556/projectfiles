import React from 'react'
import { useNavigate } from 'react-router-dom';

function Library_header() {
  const navigate=useNavigate();

  let adminInfo=localStorage.getItem("AdminInfo");
  adminInfo=JSON.parse(adminInfo);
  


function signingout()
      {

localStorage.clear(adminInfo)

navigate('/');

      }


  return (
    <div style={{padding:"20px"}}>



    <div align="right" style={{paddingRight:"20px"}} >
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         onClick={signingout}
      >
        LOGOUT
      </button>
      
    </div>
    
 
    
    </div>
  )
}

export default Library_header