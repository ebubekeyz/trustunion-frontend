import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/Login';
import { customFetch } from '../utils';
import { loginUser, logoutUser } from '../features/user/userSlice';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export const action =
  (store) =>
  async ({ request }) => {
    
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const popup = document.querySelector('.otp');
    const login = document.querySelector('#login');
   
    try {
      const response = await customFetch.post('/auth/local', data);

      popup.style.display = 'block';
     
       
      login.innerHTML = ``
            toast.success('An OTP code has been sent to your email address. Please check your inbox (and spam folder, just in case) and enter the code to complete your request.');

      
      store.dispatch(loginUser(response.data));

      return null;
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response.data.msg || 'please double check your credentials';
     
      toast.error('Oops! Something went wrong. We couldn’t process your submission. Please try again later.');

      return null;
    }
  };
const Login = () => {

  const dispatch = useDispatch();
  


  

  const user = useSelector((state) => state.userState.user);

  const navigate = useNavigate();
  const clickOtp = () => {
    const otp = document.querySelector('.input-otp').value;
   

  

    if (otp == user.otp) {
      toast.success('Welcome back! You’ve successfully logged in.');

      
      // return navigate('/dashboard');
      return location.replace('/dashboard');
    } else {
      toast.error('Verification failed.The OTP you entered is incorrect. Please try again.');
      
      dispatch(logoutUser());
      return navigate('/login');
    }
  };
  return (
    <Wrapper>
      <div id="login">
        <div className="hero bg-base-200 min-h-screen " >
  <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-amber-200">Login now!</h1>
      <p className="py-6 text-amber-50">
      Please enter your username and password to access your account.
Your security is our priority, and we ensure your personal information is kept safe.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <Form method="post" className="card-body form-control">
        <fieldset className="fieldset">
          <label className="fieldset-label" >Username</label>
          <input type="text" className="input" placeholder="Username" name="username"/>
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" name="password" />
          <div><NavLink to="/reset-password" className="link link-hover">Forgot password?</NavLink></div>
                
                <SubmitBtn text="Login"/>
        </fieldset>
              </Form>
              
      
    </div>
  </div>
</div>


   </div>








<div className="hero bg-base-200 min-h-screen hidden otp grid grid-cols-1 place-items-center pt-28">
  <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-amber-200">OTP</h1>
      <p className="py-6 text-amber-50">
     Correctly input the OTP Code you copied from your email account.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">One Time Password</label>
          <input type="email" className="input input-otp" placeholder="Your Otp Code here.." />
          <button type="submit" className="btn btn-neutral mt-4" onClick={clickOtp}>Submit</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>

        

    </Wrapper>
  );
};
export default Login;
