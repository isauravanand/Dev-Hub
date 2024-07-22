import React, { useEffect, useState } from 'react'
import "./Login.css";
import { useNavigate,Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { loginRoute } from '../../../utils/ApiRoutes';

function Login() {

  const navigate = useNavigate();

  const [values,setvalues]=useState({
    username:"",
    password:"",
  })
  
  const toastOption = {
    position: "top-right",
    pauseOnHover: true,
    theme: "dark",
  };

  const handleValidation = () => {
    const { Username, password } = values;
    if (password==="") {
      toast.error("Email and password is required", toastOption
      );
      return false;
    } 
    else if (Username.length ==="") {
      toast.error("Email and password is required", toastOption);
      return false;

    } 
    return true;
  }

  const handleSubmit =async (event)=>{
    event.preventDefault();
    if(handleValidation){
      const {username,password}=values;
      const {data} = await axios.post(loginRoute,{
        username,
        password,
      })
      if(data.status===false){
        toast.error(data.msg,toastOption);
      }
      if(data.status===true){
        navigate('/Profile');
      }
    }
  }

  const handleChange = (event)=>{
    setvalues({...values,[event.target.name]:event.target.value});
  }
  return (
    <>
    
      <form className='container' onSubmit={(e)=>handleSubmit(e)}>
        <img src="https://img.freepik.com/free-vector/endpoint-concept-illustration_114360-2583.jpg?t=st=1719318591~exp=1719322191~hmac=a5576cf62b720c8cb43b117ffd796f179529654efd22d7cf867d60bc400696de&w=740" alt="loading" className='loginform-image' />

        <div className="form">
          <span>Dev-Hub</span>

          <input type="text" className="input" placeholder='Enter Username' name='username' onChange={(e)=>handleChange(e)}/><br />

          <input type="password" className="password" placeholder='Password' name='password' onChange={(e)=>handleChange(e)}/><br />

          <button className="login">Login</button>
          <br /><br /> <br /><br /> <br />
          
          <div className='register'>Dont have an Account? <span><Link to="/signup">SignUp</Link></span>
          </div>
        </div>
        <br />

      </form>
      <ToastContainer/>
    </>
  )
}

export default Login
