import { FaAndroid, FaCode, FaSketch } from 'react-icons/fa6';
import Wrapper from '../assets/Services';
import { Link } from 'react-router-dom';
import { service } from '../utils';

const Service = () => {
  return (
    <div className="py-6 max-w-6xl mx-auto px-4">
   
         <div className='grid grid-cols-1 place-items-center md:grid md:grid-cols-3 gap-4 '>

          {service.map((item) => {
            const { id, text, title,image } = item;
            return (
              <div key={id} className="card bg-base-100 image-full w-full shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{text}</p>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
</div>

            );
          })}
     
    </div>
 </div>
  );
};
export default Service;
