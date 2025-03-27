import { useEffect } from 'react';
import {
  About,
  Blog,
  Carousel,
  Connect,
  Header,
  Projects,
  Services,
  Skills,
  Testimonies,
  Timeline,
} from '../components';

const Landing = () => {
  document.title = `Trust Union Bank - Empowering Your Financial Future, Today.`;

  return (
    <>
    <Carousel />
     
     
      {/* <Projects /> */}
      {/* <Connect />
      <Testimonies />
  
      <Blog /> */}
       
      {/* <Timeline /> */}
      <About />
      <Services />
           <Testimonies />
    </>
  );
};
export default Landing;
