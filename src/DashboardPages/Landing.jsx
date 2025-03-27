import {
  FaClock,
  FaEye,
  FaEyeSlash,
  FaIdCard,
  FaMoneyBill,
  FaReceipt,
  FaSdCard,
} from 'react-icons/fa6';
import { Link, redirect, useLocation } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/Landing';
import { useSelector } from 'react-redux';
import { customFetch } from '../utils';
import { formatPrice } from '../utils';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import { FaArrowAltCircleDown, FaRegIdCard, FaTimes } from 'react-icons/fa';
import { MdOutlineAccountBalance } from "react-icons/md";

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const Landing = () => {
  const { withdrawBalance, balance, deposit, withdraw, user } = useSelector(
    (state) => state.userState
  );

  
  const withdrawFilter = Object.values(withdraw).filter(
    (item) => item.user === user._id
  );

  
  const totalBalance = balance - withdrawBalance;
  const bal = {
    bal: totalBalance,
  };
  localStorage.setItem('bal', JSON.stringify(bal));

  const { accountNumber, typeOfAccount, updatedAt } = user;

  const filterID = Object.values(deposit).filter(
    (item) => item.user === user._id
  );

  const filterStatus = Object.values(filterID).filter(
    (item) => item.status === 'processing'
  );


  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(true);

  const handleEye = () => {
    setShow(true);
  };
  const handleEye2 = () => {
    setShow(false);
  };

  const reload = () => {
    window.location.reload();
  };

  const format = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const removeAlert = async (id) => {
    const resp = await customFetch.patch(
      `/addFund/${id}`,
      { status: 'sent' },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setShow2(false);
    window.location.replace('/dashboard/outgoing');
  };
  return (
   <>
    <div className="md:mt-[-35.5rem] mt-2 " >

      { filterStatus ? filterStatus.slice(0, 1).map((item) => {
         const { createdAt, amount, accountName, accountNumber, bank, date1, date2, _id } = item;
         return (
           <div key={_id} role="alert" className="alert alert-horizontal p-4 mb-4 mx-auto md:max-w-4xl">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div>
    <h3 className="font-bold">Credit Alert</h3>
    <div className="text-xs">From {accountName}</div>
  </div>
  <div className="btn btn-sm cursor-pointer" onClick={() => removeAlert(_id)}>View</div>
</div>
         )
      }) : ''}



{/* begin */}
     <div className="relative">
       <div className="card bg-[#543ae8] image-full w-full md:w-[28rem] shadow-sm md:mx-auto">
  <figure>
    <img
      src="/global.jpeg"
      alt="Shoes" />
  </figure>
  <div className="card-body text-center " style={{fontFamily: 'var(--ff-primary)'}}>
    <h2 className="card-title mx-auto text-[1.3rem]" >Welcome!</h2>
    <h2 className="card-title mx-auto text-[1.3rem] "><span className="text-[#fcb900] uppercase">{` ${user.username}`}</span ></h2>
   
  </div>
</div>




 <div className="card bg-[#543ae8] image-full w-[80%] md:w-[40%]  shadow-sm mx-auto absolute top-24 left-0 right-0 ">
  <figure>
    <img
      src="/global.jpeg"
      alt="Shoes" />
  </figure>
   <div className="card-body text-center md:pt-4 pt-2" style={{fontFamily: 'var(--ff-primary)'}}>
    <div className="bg-black p-4 rounded-full mx-auto h-auto w-auto">
      < MdOutlineAccountBalance className="text-4xl mx-auto"/>
    </div>
    <h2 className="card-title mx-auto text-[1.3rem] ">Total Banlance</h2>
    
   <h2 className="card-title mx-auto text-2xl">$ {format(totalBalance) || 0}</h2>
  </div>
</div>
     </div>



    </div>




<div className="mt-24 grid grid-cols-2 gap-2 items-center md:w-[40rem] mx-auto ">
  <Link  to="/dashboard/sendMoney" className="card bg-base-900 image-full  w-full  shadow-sm mx-auto" style={{background:'rgb(255,0,0,0.5)'}}>
  <figure>
    <img
      src=""
      alt="" />
  </figure>
  <div className="card-body grid grid-cols-1 place-items-center">
    <p className="card-title">Send</p>
    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
    {/* <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</Link>



<Link  to="/dashboard/profile" className="card bg-base-100 image-full  w-full shadow-sm mx-auto" style={{background:'rgb(0,225,0,0.5)'}}>
  <figure>
    <img
      src=""
      alt="" />
  </figure>
  <div className="card-body grid grid-cols-1 place-items-center">
    <p className="card-title">Profile</p>
    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
    {/* <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</Link>






<Link to="/dashboard/allTransactions" className="card bg-base-100 image-full  w-full shadow-sm mx-auto" style={{background:'rgb(0,0,225,0.5)'}}>
  <figure>
    <img
      src=""
      alt="" />
  </figure>
  <div className="card-body grid grid-cols-1 place-items-center">
    <p className="card-title">Transactions</p>
    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
    {/* <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</Link>






<Link to="/dashboard/settings" className="card bg-base-100 image-full  w-full shadow-sm mx-auto" style={{background:'rgb(255,100,0,0.5)'}}>
  <figure>
    <img
      src=""
      alt="" />
  </figure>
  <div className="card-body grid grid-cols-1 place-items-center">
    <p  className="card-title">Settings</p>
    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
    {/* <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</Link>
</div>






{/* CARD */}
<h1  style={{fontSize: '1.5rem', textAlign: 'center', margin: '1.5rem'}}>Card</h1>
<div className="card image-full w-full md:w-[30rem] md:mx-auto shadow-sm" style={{fontFamily:'var(--ff-primary)'}}>
  <figure>
    <img
      src="/global2.jpeg"
      alt="" />
  </figure>
  <div className="card-body">
   <h2 className="card-title text-amber-100">Balance</h2>
    <h2 className="card-title text-2xl">$ 0</h2>
    <Link to="/" className="btn btn-xs w-24 ">Fund Card</Link>

     <h2 className="card-title text-amber-100">Card Number</h2>
    <h2 className="card-title text-2xl">5122 3133 1002 2244</h2>

     <div className="card-actions flex items-center justify-start">
       <h2 className="card-title text-amber-100 mr-12">Expiry</h2>
  <h2 className="card-title text-amber-100">CCV</h2>
    </div>

     <div className="card-actions flex items-center justify-start">
       <h2 className="card-title mr-16">12/10</h2>
  <h2 className="card-title">513</h2>
    </div>


 
    <div className="card-actions flex justify-between items-center">
       <h2 className="card-title text-amber-100">{`${user.firstName} ${user.lastName}`}</h2>
  <img src="/mcard.png" alt="" className="w-16"/>
    </div>
  </div>
</div>


{/* TRANSACTIONS */}
<div className="flex justify-between items-center">
  <h1  style={{fontSize: '1.5rem', textAlign: 'center', margin: '1.5rem'}}>Transactions</h1>
  <Link to="/dashboard/transaction" className="btn btn-ghost btn-md capitalize text-primary text-lg">view more</Link>
</div>
   {withdrawFilter.slice(0, 2).map((item) => {
          const { createdAt, amount, accountName, accountNumber, bank, date1, date2, _id } = item;
          return (
            <div className="card bg-base-100 w-full shadow-md p-4 my-4 bg-gray-50" style={{fontFamily:'var(--ff-primary)'}}  >
  <div className="card-body ">
    <h2 className="card-title text-amber-800">Receiver: <span className="text-black">{accountName}</span>  </h2>
                <h2 className="card-title text-amber-800">Bank Name: <span className="text-black">{bank} </span> </h2>
                 {/* <h2 className="card-title text-amber-800">Transaction ID: <span className="text-black">{_id} </span> </h2> */}
    
    
                <div className="card-actions flex justify-between items-center">
                  <h2 className="card-title text-amber-800 text-sm">Date: <span className="text-black">{date2} </span> </h2>
      <h1 className="text-xl"><span className="text-amber-800 ">Amount:</span> ${format(amount)} </h1>
    </div>
  </div>
</div>
          );
        })}



 
      {/* Loan */}
      <div role="alert" className="alert alert-vertical alert-horizontal p-4 mb-4 mx-auto md:max-w-5xl flex flex-row justify-center bg-sky-100">
  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg> */}
 
  {/* <Link to="/dashboard" className="btn btn-md btn-block " >Apply for Loan</Link> */}
</div>
   </>

  );
};
export default Landing;
