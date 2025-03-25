import { Form, Link, NavLink, redirect } from 'react-router-dom';
import Wrapper from '../assets/Register';
import { customFetch } from '../utils';
import { loginUser } from '../features/user/userSlice';
import { FaArrowCircleDown } from 'react-icons/fa';
import FormInput from '../components/FormInput';
import { FormSelect, SubmitBtn } from '../components';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


export const action =
  (store) =>
  async ({ request }) => {
    
    const formData = await request.formData();
    let data = Object.fromEntries(formData);
  

    try {
      const response = await customFetch.post('/auth/local/register', data);
      toast.success('Welcome!You’ve successfully registered. You can now log in to your account.')
      return redirect('/login');
    } catch (error) {
      console.log(error);
      const errorMessage = error.response.data.msg || 'Oops!There was an issue with your registration. Please try again later.';
     toast.error(`${errorMessage}`)
      return null;
    }
  };

const Register = () => {
  
  return (
    <Wrapper>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-amber-200">Open Account</h1>
      <p className="py-6 text-amber-50">
    Please ensure you enter your correct information to avoid account suspension.
      </p>
    </div>
    <div className="card bg-base-100 w-full md:max-w-lg max-w-sm shrink-0 shadow-2xl">
      <Form method="post" className="card-body">
              <fieldset className="fieldset md:grid md:grid-cols-2 md:gap-x-2">
                 <div className=""><label className="fieldset-label">First Name</label>
          <input type="text" className="input" placeholder="First Name" name="firstName" /></div>
          <div className=""> <label className="fieldset-label">Last Name</label>
                  <input type="text" className="input" placeholder="Last Name" name="lastName" /></div>
                <div className=""><label className="fieldset-label">Username</label>
          <input type="text" className="input" placeholder="Username" name="username" /></div>
           <div className='max-w-lg'><label className="fieldset-label" >Email</label>
          <input type="email" className="input" placeholder="Email"  name="email"/></div>
         
         <div className=""> <label className="fieldset-label" >Password</label>
          <input type="password" className="input" placeholder="Password" name="password" /></div>
         <div className=""> <label className="fieldset-label">Phone</label>
          <input type="text" className="input" placeholder="Phone" name="phone"/></div>
         <div className=""> <label className="fieldset-label">Country</label>
                  <input type="text" className="input" placeholder="Country" name="country"/></div>
                <div className=""> 
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Gender</legend>
  <select defaultValue="Pick a browser" className="select" name="gender">
    <option disabled={true}>Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
 
</fieldset>
         </div>

                 <div className=""> 
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Marital Status</legend>
  <select defaultValue="Pick a browser" className="select" name="maritalStatus">
    <option disabled={true}>Select Marital Status</option>
    <option value="Single">Single</option>
    <option value="Married">Married</option>
    <option value="Divorced">Divorced</option>
  </select>
 
</fieldset>
         </div>

                 <div className=""> 
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Account Type</legend>
  <select defaultValue="Pick a browser" className="select" name="typeOfAccount">
    <option disabled={true}>Select Account Type</option>
    <option value="Savings Account">Savings Account</option>
    <option value="Checking Account">Checking Account</option>
    <option value="Money Market Account">Money Market Account</option>
    <option value="Certificate Of Deposit Account">Certificate Of Deposit Account</option>
  </select>

</fieldset>
         </div>

                 <div className="pt-4"><label className="fieldset-label">Date of Birth</label>
           <input type="date" className="input" name="dob"/></div>

              
         
              </fieldset>
              

                <div className="mt-4">
                  
    <input type="checkbox"  className="checkbox mr-4" />
    Do you agree to our <Link to="/terms">Terms and Conditions?</Link>
  
                </div>
                
                <SubmitBtn text="Open Account"/>
      </Form>
    </div>
  </div>
</div>
    </Wrapper>
  );
};
export default Register;
