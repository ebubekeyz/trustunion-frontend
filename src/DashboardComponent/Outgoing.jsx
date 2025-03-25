import moment from 'moment';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/DashboardWrapper/Transact';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const Outgoing = () => {
  const [show, setShow] = useState(true);

  const handleIncoming = () => {
    setShow(false);
  };

  const handleOutgoing = () => {
    setShow(true);
  };

  const { withdraw, deposit } = useLoaderData();

  const format = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

    const realDeposit= Object.values(deposit);
    
    
  return (
    <>
      <div className="md:mt-[-36rem] md:max-w-4xl md:mx-auto">
          
          {realDeposit.map((item) => {
            const { createdAt, amount, accountName, date1, bank, date2, _id } = item;

            return (
      

              <div className="card bg-base-100 w-full shadow-md p-4 my-4 bg-gray-50" style={{fontFamily:'var(--ff-primary)'}}  >
  <div className="card-body ">
    <h2 className="card-title text-amber-800">Transfer From: <span className="text-black">{accountName}</span>  </h2>
                <h2 className="card-title text-amber-800">Bank Name: <span className="text-black">{bank} </span> </h2>
                 {/* <h2 className="card-title text-amber-800">Transaction ID: <span className="text-black">{_id} </span> </h2> */}
    
    
                <div className="card-actions flex justify-between items-center">
                  <h2 className="card-title text-amber-800 text-sm">Date: <span className="text-black">{date1} </span> </h2>
      <h1 className="text-xl"><span className="text-amber-800 ">Amount:</span> ${format(amount)} </h1>
    </div>
  </div>
</div>
    
            );
          })}
        </div>
     
    </>
  );
};
export default Outgoing;
