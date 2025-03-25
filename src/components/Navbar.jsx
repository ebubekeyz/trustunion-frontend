import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import Wrapper from '../assets/Navbar';

import Sidebar from './Sidebar';
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { AiFillBank } from "react-icons/ai";
import { HiMiniBars3 } from "react-icons/hi2";

const Navbar = () => {
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('#nav');
    if (window.pageYOffset > 80) {
      navbar.classList.add('navbar-fixed');
    } else {
      navbar.classList.remove('navbar-fixed');
    }
  });
  const handleToggle = () => {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.add('show-sidebar');
  };
  const handleClose = () => {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.remove('show-sidebar');
  };

  // const { user, notification } = useSelector((state) => state.userState);

  // const filter = Object.values(notification).filter(
  //   (item) => item.status === 'pending'
  // );

  // const noticeLength = filter.length;
  // const id = Object.values(notification)[0]._id;

  // const clickNotice = async () => {
  //   const data = { status: 'sent' };
  //   try {
  //     const resp = await customFetch.patch(`/notification/${id}`, data, {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const closeEnvelope = () => {
  //   const popup = document.querySelector('.popup');

  //   popup.style.display = 'none';
  // };
  return (
    <Wrapper>
      <nav className="nav" id="nav">
        <div className="nav-center">
          {/* nav header  */}
          <div className="nav-header">
             
            <div className="nav-logo">
              {/* <span className="pb">Pb</span> */}
               <AiFillBank style={{fontSize: '2rem', marginRight: '0.7rem'}} />
             Pledge<span className="inner">Bank</span>
            </div>
            <button className="nav-btn" id="nav-btn">
              <HiMiniBars3  onClick={handleToggle} />
            </button>
          </div>
          {/* nav-links  */}
          <ul className="nav-links">
            <li>
              <Link to="/" className="link first">
                home
              </Link>
            </li>
             <li>
              <Link to="/services" className="link">
                services
              </Link>
            </li>
             <li>
              <Link to="/contacts" className="link">
                contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                about
              </Link>
            </li>
           
            <li>
              <Link to="/faqs" className="link">
                Faqs
              </Link>
            </li>
           
             <li>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* {noticeLength > 0 ? (
          <div className="popup">
            <div className="close-btn">
              <FaTimes className="close-envelope" onClick={closeEnvelope} />
            </div>
            <h4>New Message</h4>
            <img src="/envelope.svg" alt="envelope" className="envelope" />
            <a
              href="http://localhost:5173/dashboard/notification"
              className="btn envelope-link"
              onClick={clickNotice}
            >
              Read
            </a>
          </div>
        ) : (
          ''
        )} */}
      </nav>

      <Sidebar onClick={handleClose} />
    </Wrapper>
  );
};
export default Navbar;
