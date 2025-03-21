import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/Error';
import img from '../assets/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="grid grid-cols-2 place-items-center h-screen max-w-xl mx-auto">
        <h4 className="text-amber-500">Page not Found</h4>
           <img src="/404.svg" className="w-80" alt="not-found" />
      </div>
    );
  }
  return (
  
      <div className="grid grid-cols-2 place-items-center h-screen max-w-xl mx-auto">
        <h4 className="text-amber-500">Something went wrong. Please try again or contact Technical team. </h4>
           <img src="/error.svg" className="w-80" alt="not-found" />
      </div>

  );
};
export default Error;
