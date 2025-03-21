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

export const action =
  (store) =>
  async ({ request }) => {
    const formAlert = document.querySelector('.form-alert');
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const popup = document.querySelector('.popup');

    try {
      const response = await customFetch.post('/auth/local', data);

      popup.classList.add('showPopup');
      formAlert.textContent = `OTP code was sent to your email address.`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';
      formAlert.style.background = 'rgba(0,0,0,0.7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
        formAlert.style.background = 'transparent';
      }, 3000);
      store.dispatch(loginUser(response.data));

      return null;
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
const Login = () => {
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

  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const clickOtp = () => {
    const otp = document.querySelector('.otp').value;
    const popup = document.querySelector('.popup');

    const formAlert = document.querySelector('.form-alert');

    if (otp == user.otp) {
      formAlert.textContent = `Login Successful`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';
      formAlert.style.background = 'rgba(0,0,0,0.7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
        formAlert.style.background = 'transparent';
      }, 3000);
      popup.classList.remove('showPopup');
      // return navigate('/dashboard');
      return location.replace('/dashboard');
    } else {
      formAlert.textContent = `OTP Verification Failed`;
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
      dispatch(logoutUser());
      return navigate('/login');
    }
  };
  return (
    <Wrapper>
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-amber-200">Login now!</h1>
      <p className="py-6 text-amber-50">
      Please enter your email and password to access your account.
Your security is our priority, and we ensure your personal information is kept safe.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><NavLink to="/reset-password" className="link link-hover">Forgot password?</NavLink></div>
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>










{/* <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-amber-200">One Time Password</h1>
      <p className="py-6 text-amber-50">
     Correctly input the OTP Code you copied from your email account.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">One Time Password</label>
          <input type="email" className="input" placeholder="Your Otp Code here.." />
          <button type="submit" className="btn btn-neutral mt-4">Submit</button>
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
export default Login;
