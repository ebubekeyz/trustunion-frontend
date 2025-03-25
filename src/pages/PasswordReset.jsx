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
import { toast } from 'react-toastify';

export const action = async ({ request }) => {

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const emailId = JSON.parse(localStorage.getItem('emailId'));

  try {
    const response = await customFetch.patch(
      `/auth/${emailId._id}/passwordReset`,
      data
    );

    toast.success('Success! Your password has been reset. You can now log in with your new password.');
    

   

    return redirect('/login');
  } catch (error) {
    console.log(error);
    const errorMessage =
      error.response.data.msg || 'Oops!We couldn’t reset your password. Please try again later.';
    toast.error(`${errorMessage}`);
    

    return null;
  }
};
const PasswordReset = () => {
  const [num, setNum] = useState(false);
  const dispatch = useDispatch();
   const [send, setSend] = useState('Send');


  // const user = useSelector((state) => state.userState.user);

  const [email, setEmail] = useState({
    email: '',
  });

  
  const handleEmail = async (e) => {
   
   
    e.preventDefault();

    const reset = document.querySelector('#reset');
    const emailForm = document.querySelector('#emailForm');
   
    try {
      setSend('Sending..')
      const response = await customFetch.post('/auth/emailPassword', {
        email: email.email,
      });

      localStorage.setItem('emailId', JSON.stringify(response.data.user));
      reset.style.display = 'block';
      emailForm.innerHTML = ``;
      toast.success('Success!Your email has been verified. You can now reset your password.')
      setSend('Sent')

     
    } catch (error) {
      console.log(error);
         setSend('Send')
     toast.error('Verification failed.We couldn’t verify your email. Please check the link and try again.')
    }
  };
  return (
     <Wrapper>
      <div id="emailForm">
         <div className="hero bg-base-200 min-h-screen" >
  <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold text-amber-200">Verify Email Address</h1>
      <p className="py-6 text-amber-50">
      Please enter your existing account email address.If you dont have any, <NavLink to="/register" className="text-success">please open a new account.</NavLink>
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleEmail} className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
                <input type="email" className="input" name="email" placeholder="Email"  value={email.email}
              onChange={(e) => {
                setEmail({
                  ...email,
                  [e.target.name]: e.target.value,
                });
              }} />
                 
                  <button type="submit" className="btn btn-neutral mt-4">{send}</button>
          
        </fieldset>
      </form>
    </div>
  </div>
</div>
  </div>






   <div className="hero bg-base-200 min-h-screen hidden pt-32" id="reset" >
  <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">
    <div className="text-center lg:text-left ">
      <h1 className="text-3xl font-bold text-amber-200">Reset Password</h1>
      <p className="py-6 text-amber-50">
    Please enter your new password.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
      <Form method="post" className="card-body ">
        <fieldset className="fieldset">
          <label className="fieldset-label" >New Password</label>
    <input type="password" className="input" name="newPassword" placeholder="New Password" />
      <label className="fieldset-label">Confirm Password</label>
                <input type="password" className="input" placeholder="Confirm Password" name="password" />
                <SubmitBtn text="Reset Password"/>
          
        </fieldset>
      </Form>
    </div>
  </div>
</div>
        

    </Wrapper>
  );
};
export default PasswordReset;
