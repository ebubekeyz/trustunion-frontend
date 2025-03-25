import { redirect, useLoaderData, useLocation } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/Notification';
import { customFetch } from '../utils';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const Notification = () => {
  const { notification } = useSelector((state) => state.userState);

  if (Object.values(notification).length === 0) {
    return (
      <div
        style={{
          margin: '2rem 0',
          borderBottom: '2px solid var(--clr-grey-5)',
          padding: '0.5rem 0',
        }}
      >
        <h4>You dont have any Notification</h4>
      </div>
    );
  }

  return (
  
      <div className='mt-4 md:mt-[-35rem]'>
        {Object.values(notification).map((item) => {
          const { _id, name, subject, message } = item;
          return (

            <div key={_id} role="alert" className="alert alert-vertical p-4 mb-4 mx-auto md:max-w-4xl">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div>
    <h3 className="font-bold"> {subject}</h3>
    <div className="text-xs">{message}</div>
  </div>
 <div className="approve" style={{ textAlign: 'right' }}>
                 <h5><span className='text-amber-700 text-bold'>{name} </span>(Customer Success Team)</h5>

                </div>
</div>
            // <article key={_id} className="transfer">
            //   <h4 className="date" style={{ marginBottom: '0' }}>
            //     {subject}
            //   </h4>

            //   <div className="inner-transfer-cont">
            //     <div className="details">
            //       <p style={{ marginTop: '0' }}>{message}</p>
            //     </div>

            //     <div className="approve" style={{ textAlign: 'right' }}>
            //       <h5>Customer Success Team,</h5>
            //       <h5>{name}</h5>
            //     </div>
            //   </div>
            // </article>
          );
        })}
      </div>
  
  );
};
export default Notification;
