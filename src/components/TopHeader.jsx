import { NavLink } from "react-router-dom";
import Wrapper from "../assets/TopHeader"
import { FaPhoneAlt } from "react-icons/fa";

const TopHeader = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm md:px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-7 w-md p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
        {/* <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/service">Services</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
        <li><NavLink to="/faqs">Faqs</NavLink></li>
      </ul>
          </div>
          
          <div className="flex flex-row items-center">
           
    <NavLink to="/" className="text-ghost text-xl font-semibold">TrustUnion<span className="text-[#78b126]">Bank</span></NavLink>
         </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">Home</NavLink></li>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/service">Services</NavLink></li>
      <li><NavLink to="/contacts">Contact</NavLink></li>
      <li><NavLink to="/faqs">Faqs</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to='/login' className="btn btn-neutral">login</NavLink>
  </div>
</div>
     
  )
}
export default TopHeader