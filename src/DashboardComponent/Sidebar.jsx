import {
  FaClosedCaptioning,
  FaDollarSign,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMoneyBillTransfer,
  FaMoneyBills,
  FaPerson,
  FaPhone,
  FaPinterest,
  FaPowerOff,
  FaQuestion,
  FaTwitter,
} from 'react-icons/fa6';
import Wrapper from '../assets/DashboardWrapper/Sidebar';
import {
  FaEdit,
  FaHome,
  FaIdCard,
  FaReceipt,
  FaServicestack,
  FaTimes,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../features/user/userSlice';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { customFetch } from '../utils';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userState.user);

  const handleLogout = (e) => {
    navigate('/login');
    dispatch(logoutUser());
  };









    const { allUsers, notification, notificationId, num } = useSelector(
      (state) => state.userState
    );
  const passport = useSelector((state) => state.userState.passport);
 

  
    const clickNotice = async () => {
      const data = { status: 'sent' };
      try {
        const resp = await customFetch.patch(
          `/notification/${notificationId}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
  
    let url =
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:7000'
        : 'https://trustunion-backend.onrender.com';
  return (
    

   <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
        
        {/* start */}
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
             
            <label htmlFor="my-drawer" className="drawer-button md:hidden"> <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div></label>
    <NavLink to="/dashboard" className="text-xl">Trustunion<span className="text-[#c09321] text-bold">Bank</span></NavLink>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <Link  onClick={clickNotice} to="/dashboard/notification" className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item">{num}</span>
      </div>
    </Link>
      </div>
         </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={`${passport}`} alt="passport" className="pass" />
                 
                </div>
                
      </div>
      <ul
        tabIndex={0}
        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 shadow">
        <li>
          <NavLink to="/dashboard/profile" className="justify-between">
            Profile
           
          </NavLink>
        </li>
        <li><a href="/dashboard/settings">Settings</a></li>
        <li onClick={handleLogout}><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>


        {/* end */}
  </div>
  <div className="drawer-side md:hidden z-50">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-[#6b551d] text-amber-50 min-h-full w-80 p-4  ">
      {/* Sidebar content here */}
      <div className="mb-10 text-lg text-amber-50"><article><div className="btn-ghost avatar grid grid-cols-1 items-center place-items-center mx-auto">
        <div className="rounded-full w-[3.2rem]">
              <img src={`${passport}`} alt="passport" className="pass" />
            </div>
            
               
          </div>   <p className='text-center mx-auto mt-4 text-sm'>Username: {user.username}</p>
            <p className='text-center mx-auto mt-4 text-sm'>Account Number: {user.accountNumber}</p>
             <p className='text-center mx-auto mt-4 text-sm'>Routing Number: {user.routingNumber}</p>
          </article></div>
          
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/dashboard/sendMoney">Send</a></li>
          <li><a href="/dashboard/deposit">Account Details</a></li>
          {/* <li><a>Loan</a></li> */}
           <li><a href="/dashboard/cards">Card</a></li>
          <li><a onClick={clickNotice} href="/dashboard/notification">Notification <sup className="num">{num}</sup></a></li>

            <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn hover:bg-transparent hover:shadow-none hover:border-none hover:outline-none btn-ghost rounded-field text-amber-50 ml-[-0.3rem]">Transactions</div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-[rgba(0,0,0,0.5)] rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
          <li><a href="/dashboard/transaction">Incoming</a></li>
          <li><a href="/dashboard/outgoing">Outgoing</a></li>
        </ul>
      </div>
           <li><a href="/dashboard/settings">Settings</a></li>
          
          
    </ul>
      </div>

   <div className="hidden md:drawer md:lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label> */}
  </div>
  <div className="drawer-side" style={{zIndex: '500'}}>
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className=""></label>
   <ul className="menu bg-[#6b551d] text-amber-50 min-h-full w-80 p-4"  >
      {/* Sidebar content here */}
      <div className="mb-10 ml-2 text-lg text-amber-50"><article><div className="btn-ghost avatar grid grid-cols-1 items-center place-items-center mx-auto">
        <div className="rounded-full w-[3.2rem]">
              <img src={`${passport}`} alt="passport" className="pass" />
            </div>
            
               
          </div>   <p className='text-center mx-auto mt-4 text-sm'>Username: {user.username}</p>
          <p className='text-center mx-auto mt-4 text-sm'>Account Number: {user.accountNumber}</p>
          <p className='text-center mx-auto mt-4 text-sm'>Routing Number: {user.routingNumber}</p>
          </article></div>
          <li><a href="/dashboard">Dashboard</a></li>
           <li><a href="/dashboard/sendMoney">Send</a></li>
          <li><a href="/dashboard/deposit">Account Details</a></li>
          {/* <li><a>Loan</a></li> */}
           <li><a href="/dashboard/cards">Card</a></li>
            <li><a href="/dashboard/notification" onClick={clickNotice}>Notification <sup className="num">{num}</sup></a> </li>
            


            <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn hover:bg-transparent hover:shadow-none hover:border-none hover:outline-none btn-ghost rounded-field text-amber-50 ml-[-0.3rem]">Transactions</div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-[rgba(0,0,0,0.5)] rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
         <li><a href="/dashboard/transaction">Incoming</a></li>
          <li><a href="/dashboard/outgoing">Outgoing</a></li>
        </ul>
      </div>
              {/* <li><a href="/dashboard/transaction">Transactions</a></li> */}
           <li><a href="/dashboard/settings">Settings</a></li>
          
          
    </ul>
  </div>
</div>
      

      
</div>
  );
};
export default Sidebar;
