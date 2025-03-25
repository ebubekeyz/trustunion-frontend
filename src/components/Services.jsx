import { FaAndroid, FaCode, FaSketch } from 'react-icons/fa6';
import Wrapper from '../assets/Services';
import { Link } from 'react-router-dom';
import { service } from '../utils';

const Services = () => {
  return (
    <div className="py-4">
      <h3 className='text-center text-4xl md:text-5xl font-bold py-4'>Services</h3>
         <div className='grid grid-cols-1 md:flex md:flex-row gap-4 align-element'>

          {service.slice(0, 3).map((item) => {
            const { id, text, title,image } = item;
            return (
              <Link  to='/service' key={id} className="card bg-base-100 image-full w-full shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{text}</p>
    <div className="card-actions justify-end">
      <Link to="/service" className="btn btn-dash">Read More</Link>
    </div>
  </div>
</Link>

            );
          })}
     
    </div>
 </div>
  );
};
export default Services;
