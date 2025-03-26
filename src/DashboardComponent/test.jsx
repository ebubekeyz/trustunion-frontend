import { useSelector } from 'react-redux';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { SubmitBtn } from '../components';
import { FiEdit } from "react-icons/fi";
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { useState } from 'react';

export const action =
  (store) =>
  async ({ request }) => {
      const { user } = store.getState().userState;
    

    const formData = await request.formData();
    let data = Object.fromEntries(formData);
    



    const formData3 = new FormData();

    
    formData3.append('image', data.passport);

   
    

   
    const response2 = await customFetch.post('/upload', formData3);


   


    let passport = response2.data.image.src;

    
   
     

     data = {
      ...data,
      address: data.address || user.address,
      country: data.country || user.country,
      dob: data.dob || user.dob,
       email: data.email || user.email,
          passport: response2.data.image.src,
      firstName: data.firstName || user.firstName,
      gender: data.gender || user.gender,
       relationship: data.relationship || user.relationship,
       noc: data.noc || user.noc,
      identity: data.identity || user.identity,
      employmentStatus: data.employmentStatus || user.employmentStatus,
      idNumber: data.idNumber || user.idNumber,
      lastName: data.lastName || user.lastName,
      maritalStatus: data.maritalStatus || user.maritalStatus,
      occupation: data.occupation || user.occupation,
       phone: data.phone || user.phone,
      
    };
   
   

    console.log(data)

    try {
const resp = await customFetch.patch(`/auth/${user._id}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
    toast.success('User Updated Successfully')
      return redirect('/dashboard/settings');
    }

    catch (error) {
       const errorMessage = error.resp.data.msg || 'Error';
     
      toast.error(`${errorMessage}`);
      return null;
    }

  };







const Settings = () => {
  const user = useSelector((state) => state.userState.user);
  console.log(user)

  const [show, setShow] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    phone: user.phone || '',
    address: user.address || '',
    noc: user.noc || '',
    occupation: user.occupation || '',
    relationship: user.relationship || '',
    dob: user.dob || '',
    maritalStatus: user.maritalStatus || '',
    gender: user.gender || '',
    email: user.email || '',
    idNumber: user.idNumber || '',
    employmentStatus: user.employmentStatus || '',
    country: user.country || '',
    passport: user.passport || '',
    identity: user.identity || ''
  })


  return (
    <Form method="post" encType="multipart/form-data" className="grid grid-cols-1 gap-4 mx-auto mt-4  mb-4" style={{ fontFamily: 'var(--ff-header)' }}>
   
       <div className="avatar ">
  <div className="ring-primary ring-offset-base-100 w-48 rounded-full ring ring-offset-2 mx-auto max-w-6xl relative cursor-pointer">
    <img src={user.passport} />
   
          {/* <div className="absolute top-[8rem] left-[10rem]">
            <div className="relative">
              <FiEdit className="cursor-pointer" />
            <input type="file" className="" name="passport"  />
            </div>
          </div> */}
          </div>
          
      </div>
    


       <div className="grid grid-cols-1 gap-4  mx-auto">
        <div className="card-body form-control ">
          
 
          


        <fieldset className="fieldset md:grid md:grid-cols-2 gap-4">
         <div className=""> <label className="fieldset-label" >FirstName</label>
              <input type="text" className="input" defaultValue={show.firstName}  name="firstName"/></div>
          
          <div> <label className="fieldset-label" >LastName</label>
          <input type="text" className="input" defaultValue={show.lastName}  name="lastName"/></div>

           

           <div> <label className="fieldset-label" >Email</label>
          <input type="email" className="input" defaultValue={show.email}   name="email"/></div>

           
          <input type="text" className="input" defaultValue={show.passport}   name="passport" hidden/>
          
          <div> <label className="fieldset-label" >Country</label>
          <input type="text" className="input" defaultValue={show.country}   name="country"/></div>


           <div> <label className="fieldset-label" >Occupation</label>
          <input type="text" className="input" defaultValue={show.occupation}   name="occupation"/></div>


          <div> <label className="fieldset-label" >Phone</label>
          <input type="text" className="input" defaultValue={show.phone}   name="phone"/></div>



          <fieldset className="fieldset">
  <legend className="fieldset-label">Gender</legend>
  <select defaultValue={show.gender} className="select" name="gender">
    <option disabled={true}>Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
 
</fieldset>


           
          
          <div> <label className="fieldset-label" >Address</label>
          <input type="text" className="input" defaultValue={show.address}  name="address"/></div>

            <div> <label className="fieldset-label" >Next of Kin</label>
          <input type="text" className="input" defaultValue={show.noc}   name="noc"/></div>



             <fieldset className="fieldset">
  <legend className="fieldset-label">Relationship</legend>
  <select defaultValue={show.relationship} className="select" name="relationship">
    <option disabled={true}>Select Identity</option>
    <option value="Brother">Brother</option>
    <option value="Father">Father</option>
    <option value="Mother">Mother</option>
    <option value="Sister">Sister</option>
    <option value="Uncle">Uncle</option>
    <option value="Aunty">Aunty</option>
  </select>
 
</fieldset>


  <fieldset className="fieldset">
  <legend className="fieldset-label">Identity</legend>
  <select defaultValue={show.identity} className="select" name="identity">
    <option disabled={true}>Select Identity</option>
    <option value="Social Security Number">Social Security Number</option>
    <option value="Passport Number">Passport Number</option>
    <option value="Driver's License Number ">Driver's License Number </option>
  </select>
 
</fieldset>



<div> <label className="fieldset-label" >ID Number</label>
          <input type="text" className="input" defaultValue={show.idNumber}   name="IdNumber"/></div>
              


            <div className="">
              <label className="fieldset-label" >Change passport</label>
              <input type="file" className="file-input" name="passport"  /></div>
  

  <div className="">
          <fieldset className="fieldset">
  <legend className="fieldset-label">Marital Status</legend>
  <select defaultValue={show.maritalStatus} className="select" name="maritalStatus">
    <option disabled={true}>Select Marital Status</option>
    <option value="Single">Single</option>
    <option value="Married">Married</option>
    <option value="Divorced">Divorced</option>
  </select>
 
</fieldset>
         </div>



                <div className=""><label className="fieldset-label">Date of Birth</label>
           <input type="date" className="input" defaultValue={show.dob}  name="dob"/></div>





           <fieldset className="fieldset">
  <legend className="fieldset-label">Employment Status</legend>
  <select defaultValue={show.employmentStatus} className="select" name="employmentStatus">
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
              </div>
          
       </div>
       </Form>
    
    
  )
}
export default Settings



