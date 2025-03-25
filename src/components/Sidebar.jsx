import {
  FaClosedCaptioning,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa6';
import Wrapper from '../assets/Sidebar';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ onClick }) => {
  return (
    <Wrapper>
      <aside className="sidebar" id="sidebar">
        <div>
          <button className="close-btn" id="close-btn">
            <FaTimes onClick={onClick} />
          </button>
          {/* nav-links  */}
          <ul className="sidebar-links">
            <li>
              <a href="/">home</a>
            </li>
             <li>
              <a href="/services">services</a>
            </li>
              <li>
              <a href="/contacts">contact</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
           
            <li>
              <a href="/faqs">Faqs</a>
            </li>

              <li>
              <a href="/login">Login</a>
            </li>

              <li>
              <a href="/register">Register</a>
            </li>
          
          </ul>
        </div>
      </aside>
    </Wrapper>
  );
};
export default Sidebar;
