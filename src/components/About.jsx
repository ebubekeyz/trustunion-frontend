import { Link } from 'react-router-dom';
import Wrapper from '../assets/AboutHome';
import aboutImg from '../assets/about-img.jpeg';

const About = () => {
  return (
    <>
     <div className="hero bg-base-200 ">
  <div className="hero-content text-center">
    <div className="max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-bold">About <span className="bg-sky-700 text-white p-1">Us</span></h1>
      <p className="py-6">
        We’re committed to transforming the way you manage your money. As a secure, user-friendly online banking platform, we provide fast, reliable, and accessible financial services right at your fingertips. Whether you're managing personal accounts, paying bills, or making investments, our goal is to make banking simple, efficient, and secure for you. 
      </p>
      <Link to="/about" className="btn btn-active text-md">More</Link>
    </div>
  </div>
</div>
    </>
  );
};
export default About;
