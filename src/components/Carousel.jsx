import { NavLink } from "react-router-dom";
import Wrapper from "../assets/Carousel";




const Carousel = () => {
 
  return (
 <Wrapper>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse max-w-5xl mx-auto">
    <img
      src="/pay.svg"
      className="max-w-md rounded-lg shadow-2xl hidden md:block" />
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-sky-200">Welcome to Trust Union Bank!</h1>
      <p className="py-6 text-sky-100" style={{fontFamily:'var(--ff-primary)'}}>
      Your trusted partner for secure, convenient, and 24/7 online banking. Manage your finances with ease, anytime, anywhere!
      </p>
       <NavLink to="/register" className="btn btn-dash capitalize text-sky-200 hover:text-black">Open an Account</NavLink>
    </div>
  </div>
</div>
    </Wrapper>
  );
};
export default Carousel;
