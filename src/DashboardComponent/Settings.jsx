import { useSelector } from 'react-redux';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { SubmitBtn } from '../components';
import { FiEdit } from "react-icons/fi";

export const action =
  (store) =>
  async ({ request }) => {
   
  };







const Settings = () => {
   const user = useSelector((state) => state.userState.user);


  return (
    <section className="grid grid-cols-1 gap-4 mx-auto mt-4 md:mt-[-35rem] mb-4" style={{fontFamily:'var(--ff-header)'}}>
        <div className="avatar ">
  <div className="ring-primary ring-offset-base-100 w-48 rounded-full ring ring-offset-2 mx-auto max-w-6xl relative cursor-pointer">
    <img src={user.passport} />
    <FiEdit className="absolute top-[8rem] left-[10rem]"/>
          </div>
          
        </div>
        
        <div className="grid grid-cols-1 gap-4  mx-auto">
         <Form method="post" className="card-body form-control ">
        <fieldset className="fieldset md:grid md:grid-cols-2 gap-4">
         <div className=""> <label className="fieldset-label" >FirstName</label>
          <input type="text" className="input"  name="firstName"/></div>
          
          <div> <label className="fieldset-label" >LastName</label>
          <input type="text" className="input"  name="lastName"/></div>

           

           <div> <label className="fieldset-label" >Email</label>
          <input type="email" className="input"  name="email"/></div>

           
          <input type="text" className="input"  name="passport" hidden/>
          
          <div> <label className="fieldset-label" >Country</label>
          <input type="text" className="input"  name="country"/></div>


           <div> <label className="fieldset-label" >Occupation</label>
          <input type="text" className="input"  name="occupation"/></div>


          <div> <label className="fieldset-label" >Phone</label>
          <input type="text" className="input"  name="phone"/></div>



          <fieldset className="fieldset">
  <legend className="fieldset-label">Gender</legend>
  <select defaultValue="Pick a browser" className="select" name="gender">
    <option disabled={true}>Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
 
</fieldset>


           
          
          <div> <label className="fieldset-label" >Address</label>
          <input type="text" className="input"  name="address"/></div>

            <div> <label className="fieldset-label" >Next of Kin</label>
          <input type="text" className="input"  name="noc"/></div>



             <fieldset className="fieldset">
  <legend className="fieldset-label">Relationship</legend>
  <select defaultValue="Pick a browser" className="select" name="identity">
    <option disabled={true}>Select Identity</option>
    <option value="Brother">Brotherr</option>
    <option value="Father">Father</option>
    <option value="Mother">Mother</option>
    <option value="Sister">Sister</option>
    <option value="Uncle">Uncle</option>
    <option value="Aunty">Aunty</option>
  </select>
 
</fieldset>


  <fieldset className="fieldset">
  <legend className="fieldset-label">Identity</legend>
  <select defaultValue="Pick a browser" className="select" name="identity">
    <option disabled={true}>Select Identity</option>
    <option value="Social Security Number">Social Security Number</option>
    <option value="Passport Number">Passport Number</option>
    <option value="Driver's License Number ">Driver's License Number </option>
  </select>
 
</fieldset>



<div> <label className="fieldset-label" >ID Number</label>
          <input type="text" className="input"  name="IdNumber"/></div>
              


            <div className="">  
              <label className="fieldset-label" >Upload ID</label>
              <input type="file" className="file-input" /></div>
  

  <div className=""> 
          <fieldset className="fieldset">
  <legend className="fieldset-label">Marital Status</legend>
  <select defaultValue="Pick a browser" className="select" name="maritalStatus">
    <option disabled={true}>Select Marital Status</option>
    <option value="Single">Single</option>
    <option value="Married">Married</option>
    <option value="Divorced">Divorced</option>
  </select>
 
</fieldset>
         </div>



                <div className=""><label className="fieldset-label">Date of Birth</label>
           <input type="date" className="input" name="dob"/></div>





           <fieldset className="fieldset">
  <legend className="fieldset-label">Employment Status</legend>
  <select defaultValue="Pick a browser" className="select" name="maritalStatus">
    <option disabled={true}>Select Employment Status</option>
    <option value="Student">Student</option>
    <option value="Unemployed">Unemployed</option>
    <option value="Retired">Retired</option>
    <option value="Self-Employed">Self-Employed</option>
    <option value="Employed">Employed</option>
  </select>
 
</fieldset>
      
                
             
        </fieldset>

           <SubmitBtn text="Update"/>
              </Form>
          
       </div>
      </section>
      
  )
}
export default Settings