import { redirect } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/Deposit';
import { FiCopy } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import copy from 'copy-to-clipboard';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const Deposit = () => {
  const user = useSelector((state) => state.userState.user);
  const alert = document.querySelector('.form-alert');

  const [copyText, setCopyText] = useState({
    name: `${user.firstName}  ${user.lastName} `,
    number: user.accountNumber,
    phone: user.phone,
     routingNumber: user.routingNumber || 623852453,
    sortCode: user.sortCode,
    bank: 'Pledge Bank',
  });

  const handleCopy1 = () => {
    const alert = document.querySelector('.form-alert');
    console.log(alert);
    copy(copyText.name);
    alert.innerHTML = `${copyText.name} copied!!`;
    alert.style.background = 'var(--clr-primary-8)';
    setTimeout(() => {
      alert.innerHTML = '';
      alert.style.background = 'none';
    }, 3000);
  };
  const handleCopy2 = () => {
    const alert = document.querySelector('.form-alert');
    copy(copyText.number);
    alert.innerHTML = `${copyText.number} copied!!`;
    alert.style.background = 'var(--clr-primary-8)';
    setTimeout(() => {
      alert.innerHTML = '';
      alert.style.background = 'none';
    }, 3000);
  };
  const handleCopy3 = () => {
    const alert = document.querySelector('.form-alert');
    copy(copyText.sortCode);
    alert.innerHTML = `${copyText.sortCode} copied!!`;
    alert.style.background = 'var(--clr-primary-8)';
    setTimeout(() => {
      alert.innerHTML = '';
      alert.style.background = 'none';
    }, 3000);
  };

const handleCopy5 = () => {
    const alert = document.querySelector('.form-alert');
    copy(copyText.phone);
    alert.innerHTML = `${copyText.phone} copied!!`;
    alert.style.background = 'var(--clr-primary-8)';
    setTimeout(() => {
      alert.innerHTML = '';
      alert.style.background = 'none';
    }, 3000);
  };


  const handleCopy6 = () => {
    const alert = document.querySelector('.form-alert');
    copy(copyText.routingNumber);
    alert.innerHTML = `${copyText.routingNumber} copied!!`;
    alert.style.background = 'var(--clr-primary-8)';
    setTimeout(() => {
      alert.innerHTML = '';
      alert.style.background = 'none';
    }, 3000);
  };


  const handleCopy4 = () => {
    const alert = document.querySelector('.form-alert');
    copy(copyText.bank);
    alert.innerHTML = `${copyText.bank} copied!!`;
    alert.style.background = 'var(--clr-primary-8)';
    setTimeout(() => {
      alert.innerHTML = '';
      alert.style.background = 'none';
    }, 3000);
  };
  return (
    // <Wrapper>
    //   <div className="form-alert"></div>
    //   <div className="deposit">
    //     <article className="transfer">
    //       <h4 className="date">Account Details</h4>
    //       <div className="inner-transfer-cont">
    //         <div className="details">
    //           <h4 className="name">Account Name:</h4>
    //           <h4>{copyText.name}</h4>
    //           <FiCopy onClick={handleCopy1} style={{ cursor: 'pointer' }} />
    //         </div>

    //         <div className="details">
    //           <h4 className="name">Account Number:</h4>
    //           <h4>{copyText.number}</h4>
    //           <FiCopy onClick={handleCopy2} style={{ cursor: 'pointer' }} />
    //         </div>

    //         <div className="details">
    //           <h4 className="name">Bank Name:</h4>
    //           <h4>{copyText.bank}</h4>
    //           <FiCopy onClick={handleCopy4} style={{ cursor: 'pointer' }} />
    //         </div>

    //          <div className="details">
    //           <h4 className="name">Account Phone Number:</h4>
    //           <h4>{copyText.phone}</h4>
    //           <FiCopy onClick={handleCopy5} style={{ cursor: 'pointer' }} />
    //         </div>

    //          <div className="details">
    //           <h4 className="name">Routing Number:</h4>
    //           <h4>{copyText.routingNumber}</h4>
    //           <FiCopy onClick={handleCopy6} style={{ cursor: 'pointer' }} />
    //         </div>

    //         <div className="details">
    //           <h4 className="name">Sort Code:</h4>
    //           <h4>{copyText.sortCode}</h4>
    //           <FiCopy onClick={handleCopy3} style={{ cursor: 'pointer' }} />
    //         </div>
    //       </div>
    //     </article>
    //   </div>
    // </Wrapper>


    <div className="-">
        
    
          <section className="grid grid-cols-1 gap-4 mx-auto mt-4 md:mt-[-35rem] mb-4" style={{fontFamily:'var(--ff-primary)'}}>
            <div className="avatar">
      <div className="ring-primary ring-offset-base-100 w-48 rounded-full ring ring-offset-2 mx-auto max-w-6xl ">
        <img src={user.passport} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 items-center text-center mx-auto">
          <h1 className='font-semibold'><span className="font-bold text-amber-700 mr-4">Account Name:</span> {user.firstName} {user.lastName}</h1>
          <h1 className='font-semibold'><span className="font-bold text-amber-700 mr-4">Account ID:</span> {user._id}</h1>
          <h1 className='font-semibold'><span className="font-bold text-amber-700 mr-4">Bank Name:</span> Trust Union Bank</h1>
          <h1 className='font-semibold'><span className="font-bold text-amber-700 mr-4">Phone Number:</span> {user.phone}</h1>
              <h1 className='font-semibold'><span className="font-bold text-amber-700 mr-4">Account Number:</span> {user.accountNumber}</h1>
              <h1 className='font-semibold'><span className="font-bold text-amber-700 mr-4">Routing Number:</span> {user.routingNumber}</h1>
              <h1 className='font-semibold'><span className="font-bold text-amber-700 mr-4">Sort Code:</span> {user.sortCode}</h1>
           </div>
          </section>
          
        </div>
  );
};
export default Deposit;
