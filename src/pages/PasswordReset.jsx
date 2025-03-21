import { Form, Link, redirect } from 'react-router-dom';
import Wrapper from '../assets/Login';
import { customFetch } from '../utils';
import { loginUser, logoutUser } from '../features/user/userSlice';
import FormInput from '../components/FormInput';
import { SubmitBtn } from '../components';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

export const action = async ({ request }) => {
  const formAlert = document.querySelector('.form-alert');
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const emailId = JSON.parse(localStorage.getItem('emailId'));

  try {
    const response = await customFetch.patch(
      `/auth/${emailId._id}/passwordReset`,
      data
    );

    formAlert.textContent = `Password Reset Successful`;
    formAlert.style.textAlign = 'center';
    formAlert.style.color = 'var(--clr-primary-7)';
    formAlert.style.background = 'rgba(0,0,0,0.7)';

    setTimeout(() => {
      formAlert.textContent = ``;
      formAlert.style.display = 'hidden';
      formAlert.style.background = 'none';
      formAlert.style.background = 'transparent';
    }, 3000);

    return redirect('/login');
  } catch (error) {
    console.log(error);
    const errorMessage =
      error.response.data.msg || 'please double check your credentials';
    formAlert.textContent = errorMessage;
    formAlert.style.textAlign = 'center';
    formAlert.style.color = 'var(--clr-primary-7)';
    formAlert.style.background = 'rgba(0,0,0,0.7)';

    setTimeout(() => {
      formAlert.textContent = ``;
      formAlert.style.display = 'hidden';
      formAlert.style.background = 'none';
      formAlert.style.background = 'transparent';
    }, 3000);

    return null;
  }
};
const PasswordReset = () => {
  const [num, setNum] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    const formControl = document.querySelector('.form-control');
    formControl.classList.toggle('show');
  };
  const removeClick = () => {
    const formControl = document.querySelector('.form-control');
    formControl.classList.toggle('show');
  };

  const [showEye, setShowEye] = useState(false);

  const handleEyeText = () => {
    const password = document.querySelector('#password');
    setShowEye(false);
    password.type = 'text';
  };

  const handleEyePassword = () => {
    const password = document.querySelector('#password');
    setShowEye(true);
    password.type = 'password';
  };

  // const user = useSelector((state) => state.userState.user);

  const [email, setEmail] = useState({
    email: '',
  });

  const [submitting, setSubmitting] = useState('Verify Email');
  const handleEmail = async (e) => {
    const formAlert = document.querySelector('.form-alert');
    const emailForm = document.querySelector('.email-form');
    const emailBtn = document.querySelector('.email-btn');
    const change = document.querySelector('.change');
    e.preventDefault();
    setSubmitting('Verifying Email ....');
    try {
      const response = await customFetch.post('/auth/emailPassword', {
        email: email.email,
      });
      localStorage.setItem('emailId', JSON.stringify(response.data.user));
      setSubmitting('Complete');

      emailForm.style.display = 'none';
      change.style.display = 'block';
    } catch (error) {
      console.log(error);
      setSubmitting('Verify Email');
      formAlert.textContent = error.response.data.msg;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';
      formAlert.style.background = 'rgba(0,0,0,0.7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
        formAlert.style.background = 'transparent';
        popup.classList.remove('showPopup');
      }, 3000);
    }
  };
  return (
     <Wrapper>
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold text-amber-200">Verify Email Address</h1>
      <p className="py-6 text-amber-50">
      Please enter your existing account email address.If you dont have any, <NavLink to="/register" className="text-success">please open a new account.</NavLink>
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
    <input type="email" className="input" placeholder="Email" />
          <button type="submit" className="btn btn-neutral mt-4">Send</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>





{/* 
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold text-amber-200">Reset Password</h1>
      <p className="py-6 text-amber-50">
    Please enter your new password.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">New Password</label>
    <input type="password" className="input" placeholder="New Password" />
      <label className="fieldset-label">Confirm Password</label>
    <input type="password" className="input" placeholder="Confirm Password" />
          <button type="submit" className="btn btn-neutral mt-4">Reset Password</button>
        </fieldset>
      </div>
    </div>
  </div>
</div> */}
        {/* <div className="popup">
          <h4>OTP Verification Code</h4>
          <input
            type="text"
            className="input otp"
            placeholder="Please Type in your otp verification here"
          />
          <button className="btn" onClick={clickOtp}>
            Submit Otp Code
          </button>
        </div> */}

    </Wrapper>
  );
};
export default PasswordReset;
