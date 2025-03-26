import { Link, redirect } from 'react-router-dom';
import { Delete as Del } from '../DashboardComponent';
import Wrapper from '../assets/DashboardWrapper/Cards';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { formatPrice } from '../utils';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }
  return null;
};

const Cards = () => {
  const user = useSelector((state) => state.userState.user);
  

  const format = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };


  const { withdrawBalance, balance, deposit} = useSelector(
    (state) => state.userState
  );

  const totalBalance = balance - withdrawBalance;
  const bal = {
    bal: totalBalance,
  };
  localStorage.setItem('bal', JSON.stringify(bal));
  return (
    
    



      <div className="card image-full w-full my-4 md:mt-[-35rem] md:w-[30rem] md:mx-auto shadow-sm" style={{fontFamily:'var(--ff-primary)'}}>
        <figure>
          <img
            src="/global2.jpeg"
            alt="" />
        </figure>
        <div className="card-body">
         <h2 className="card-title text-amber-100">Balance</h2>
          <h2 className="card-title text-2xl">$ 0</h2>
          <Link to="" className="btn btn-xs w-24 ">Fund Card</Link>
      
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
    
  );
};
export default Cards;
