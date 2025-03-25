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
  const { withdrawBalance, balance, deposit, user } = useSelector(
    (state) => state.userState
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
    window.location.reload('');
  };
  return (
    // <Wrapper>
    //   <div className="landing">
    //     <article className="balance">
    //       <div className="acc">
    //         <h4>Account</h4>
    //         <h4>{accountNumber}</h4>
    //       </div>

    //       <div className="amount">
    //         {show ? (
    //           <h3>USD {format(totalBalance) || 0}</h3>
    //         ) : (
    //           <h3>USD ******</h3>
    //         )}
    //         {show ? (
    //           <FaEyeSlash className="eye" onClick={handleEye2} />
    //         ) : (
    //           <FaEye className="eye" onClick={handleEye} />
    //         )}
    //       </div>

    //       <p>{typeOfAccount}</p>

    //       <p>
    //         Balance Updated at <span>{moment().format('h:mm a')}</span>
    //       </p>
    //       <p onClick={reload} style={{ cursor: 'pointer' }} className="refresh">
    //         <FiRefreshCcw />
    //         <span style={{ fontSize: '0.8rem' }}>Refresh Balance</span>
    //       </p>
    //     </article>

    //     <article className="services">
    //       <h4>Services</h4>

    //       <div className="icons">
    //         <Link to="/dashboard/sendMoney" className="inner-icon">
    //           <FaMoneyBill className="ico" />
    //           <p>Send Money</p>
    //         </Link>

    //         <Link to="/dashboard/transaction" className="inner-icon">
    //           <FaReceipt className="ico" />
    //           <p>Transactions</p>
    //         </Link>

    //         <Link to="/dashboard/cards" className="inner-icon">
    //           <FaRegIdCard className="ico" />
    //           <p>Card</p>
    //         </Link>

    //         {user.role === 'admin' || user.role === 'owner' ? (
    //           <Link to="/dashboard/adminDeposit" className="inner-icon">
    //             <FaMoneyBill className="ico" />
    //             <p>Deposit</p>
    //           </Link>
    //         ) : (
    //           <Link to="/dashboard/deposit" className="inner-icon">
    //             <FaMoneyBill className="ico" />
    //             <p>Deposit</p>
    //           </Link>
    //         )}
    //       </div>
    //     </article>
    //   </div>

    //   {show2 &&
    //     filterStatus.slice(0, 1).map((item) => {
    //       const { createdAt, amount, accountName, date1, date2, _id } = item;
    //       return (
    //         <article
    //           key={_id}
    //           className="transfer"
    //           style={{ padding: '0.2rem 1rem', paddingTop: '0.8rem' }}
    //         >
    //           <div className="split">
    //             {/* <h4 className="date">{date1}</h4> */}
    //             <FaTimes
    //               onClick={() => removeAlert(_id)}
    //               style={{ cursor: 'pointer' }}
    //             />
    //           </div>
    //           <div className="inner-transfer-cont">
    //             <div className="details">
    //               <h4 className="name">Transfer from {accountName}</h4>
    //               <p>{date2}</p>
    //             </div>

    //             <div className="approve">
    //               <h5>Successful</h5>
    //               <h4 className="amount">USD {format(amount)}</h4>
    //             </div>
    //           </div>

    //           <div className="more">
    //             <a
    //               href="/dashboard/transaction"
    //               className="btn more-btn"
    //               style={{
    //                 textTransform: 'capitalize',
    //                 padding: '0.3rem',
    //                 fontSize: '0.9rem',
    //                 margin: '0',
    //               }}
    //             >
    //               View All...
    //             </a>
    //           </div>
    //         </article>
    //       );
    //     })}

    //   {/* {realDeposit.length > 0 ? (
    //     <article className="transfer">
    //       <h4 className="date">{moment(createdAt).format('Do MMMM YYYY')}</h4>
    //       <div className="inner-transfer-cont">
    //         <div className="details">
    //           <h4 className="name">Transfer from {accountName}</h4>
    //           <p>
    //             {moment(createdAt).format('h mm a')},{' '}
    //             {moment(createdAt).format('DD/MM/YYYY')}
    //           </p>
    //         </div>

    //         <div className="approve">
    //           <h5>Approved</h5>
    //           <h4 className="amount">USD {format(amount)}</h4>
    //         </div>
    //       </div>
    //     </article>
    //   ) : (
    //     <div style={{ textAlign: 'center' }}>
    //       <h4>You do not have any Deposit</h4>
    //     </div>
    //   )} */}
    // </Wrapper>


   <>
    <div className="md:mt-[-35.5rem] mt-2 " >

      { filterStatus ? filterStatus.slice(0, 1).map((item) => {
         const { createdAt, amount, accountName, accountNumber, bank, date1, date2, _id } = item;
         return (
<div role="alert" className="alert alert-horizontal p-4 mb-4 mx-auto md:max-w-4xl">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div>
    <h3 className="font-bold">Credit Alert</h3>
    <div className="text-xs">From {accountName}</div>
  </div>
  <button className="btn btn-sm" onClick={() => removeAlert(_id)}>View</button>
</div>
         )
      }) : ''}



{/* begin */}
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





 <div className="md:mt-[-11rem] mt-[-12rem] " >
      <div className="card image-full w-[24rem] bg-[rgb(231, 224, 255)] h-64 md:w-[24rem] shadow-sm mx-auto">
  <figure>
    <img
      src=""
      alt="" className=""/>
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






<section className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center md:max-w-4xl mx-auto p-4" style={{fontFamily:'var(--ff-primary)'}}>
  <div className="card bg-base-100 image-full w-48 shadow-sm cursor-pointer h-28 " style={{background: 'rgba(255,255,0,0.7)'}}>
  <figure>
    <img
      src=""
      alt="" />
  </figure>
  <div className="card-body grid grid-cols-1 place-items-center">
    <Link to="/dashboard/sendMoney" className="card-title">Send</Link>
    
  </div>
</div>



 <div className="card bg-base-100 image-full w-48 shadow-sm cursor-pointer h-28" style={{background: 'rgba(255,0,0,0.7)'}}>
  <figure>
    <img
      src=""
      alt="" />
  </figure>
  <div className="card-body grid grid-cols-1 place-items-center">
    <Link to="/dashboard/sendMoney" className="card-title">Loan</Link>
   
  </div>
</div>

<div className="card bg-base-100 image-full w-48 shadow-sm cursor-pointer h-28 " style={{background: "rgba(0,0,255,0.7) ", }}>
  <figure>
    <img
      src=""
      alt="" />
  </figure>
  <div className="card-body grid grid-cols-1 place-items-center">
     <Link to="/dashboard/transaction" className="card-title">Transactions</Link>
   
  </div>
</div>

        

        
  <div className="card bg-base-100 image-full w-48 shadow-sm cursor-pointer h-28 " style={{background: 'rgba(0,255,0,0.7)'}}>
  <figure>
    <img
      src=""
      alt="" />
  </figure>
  <div className="card-body grid grid-cols-1 place-items-center">
    <Link to="/dashboard/settings" className="card-title">Settings</Link>
  </div>
</div>


</section>




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
    <h2 className="card-title text-2xl">$ {format(totalBalance) || 0}</h2>
    <Link to="/" className="btn btn-xs w-24 ">Fund Card</Link>

     <h2 className="card-title text-amber-100">Card Number</h2>
    <h2 className="card-title text-2xl">0000 0000 0000 0000</h2>

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
  <Link to="/" className="btn btn-ghost btn-md capitalize text-primary text-lg">view all</Link>
</div>
   {filterID.slice(0, 2).map((item) => {
          const { createdAt, amount, accountName, accountNumber, bank, date1, date2, _id } = item;
          return (
            <div className="card bg-base-100 w-full shadow-md p-4 my-4 bg-gray-50" style={{fontFamily:'var(--ff-primary)'}}  >
  <div className="card-body ">
    <h2 className="card-title text-amber-800">Transfer from: <span className="text-black">{accountName}</span>  </h2>
                <h2 className="card-title text-amber-800">Bank Name: <span className="text-black">{bank} </span> </h2>
                 <h2 className="card-title text-amber-800">Transaction ID: <span className="text-black">{_id} </span> </h2>
    <h2 className="card-title text-amber-800 text-sm">Date: <span className="text-black">{date2} </span> </h2>
    
    <div className="card-actions justify-end">
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
 
  <Link to="/dashboard" className="btn btn-md btn-block " >Apply for Loan</Link>
</div>
   </>

  );
};
export default Landing;
