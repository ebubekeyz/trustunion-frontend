import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import Wrapper from '../assets/DashboardWrapper/Navbar';
import { FaBarsStaggered, FaBell } from 'react-icons/fa6';
import Sidebar from './Sidebar';
import { customFetch } from '../utils';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { AiFillBank } from 'react-icons/ai';

const Navbar = ({ onClick }) => {
 
 
  const handleClose = () => {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.remove('show-sidebar');
  };

  const { user, allUsers, notification, notificationId, num } = useSelector(
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
      ? 'http://localhost:5173'
      : 'https://trustunion-bank.com';

 

  const closeEnvelope = () => {
    const popup = document.querySelector('.popup');

    popup.style.display = 'none';
  };

  return (
   
    <div className="">
      <Sidebar />
    </div>
  );
};
export default Navbar;
