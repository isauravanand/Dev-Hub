import React, { useEffect, useState } from 'react'
import "./signup.css";
import "../Login/Login"
import Home from "../Home/Home";
import { Link, useNavigate } from 'react-router-dom';
import {signupRoute} from "../../../utils/ApiRoutes";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function signup() {

  const navigate = useNavigate();

  const toastOption = {
    position: "top-right",
    pauseOnHover: true,
    theme: "dark",
  };

  const [values,setvalues] = useState({
    fullname:"",
    email:"",
    username:"",
    password:"",
  })

  // useEffect(()=>{
  //   const takeTime=()=>{

  //     if(localStorage.getItem("user")){
  //       navigate("/profile");
  //     }
  //   }
  //   takeTime();
  // },[])


  const handleValidation = ()=>{
    const {fullname,email,username,password}=values;
    if(fullname.length<3){
      toast.error("Name Should be Greater than 3 Characters",toastOption);
      return false;
    }
    else if(email===""){
      toast.error("Please Enter a Valid Email Address",toastOption);
      return false;
    }
    else if(password.length<8){
      toast.error("Your Password should be Greater than 8 Character",toastOption);
      return false;
    }
    else if(username.length<3){
      toast.error("Username Must be Greater than 3 character",toastOption);
      return false;
    }
    return true;
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();
    if(handleValidation){
      const {fullname,email,username,password}=values;
      const {data} = await axios.post(signupRoute,{
        fullname,
        email,
        username,
        password,
      })
      if(data.status===false){
        toast.error(data.msg,toastOption);
      }
      if(data.status===true){
        navigate('/home');
      }
    }
  }

const handleChange=(event)=>{
  setvalues({...values,[event.target.name]:event.target.value});
}
  return (
    <>
      <form className='container' onSubmit={(event)=>{handleSubmit(event)}}>
        <img src="https://img.freepik.com/free-vector/endpoint-concept-illustration_114360-2583.jpg?t=st=1719318591~exp=1719322191~hmac=a5576cf62b720c8cb43b117ffd796f179529654efd22d7cf867d60bc400696de&w=740" alt="loading" className='loginform-image' />
        <div className="form">
          <span>Welcome to <br />Dev-Hub</span>

          <input type="text" className='fullname' placeholder='Enter Full Name' name='fullname' onChange={(e)=>handleChange(e)} /><br />
          <input type="text" className='email' placeholder='Email' name='email'  onChange={(e)=>handleChange(e)}/> <br />
          <input type="text" className="input" placeholder='Enter Username' name='username'  onChange={(e)=>handleChange(e)}/><br />

          <input type="password" className="password" placeholder='Password' name='password'  onChange={(e)=>handleChange(e)}/><br />

          <button className="signup" type='submit'>Signup</button>
          <br /><br /> <br /><br /> <br />

          <p>Already An User? <Link to="/login">Login</Link> </p>
          
        </div>
      </form>
      <ToastContainer/>
    </>
  )
}

export default signup
