import { Link, useRouteError } from 'react-router-dom';


const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="grid grid-cols-2 place-items-center h-screen max-w-xl mx-auto p-4">
        <h4 className="text-amber-500">Page not Found <Link to="/dashboard" className='btn btn-primary btn-xs'>Go back to Dashboard</Link></h4>

           <img src="/404.svg" className="w-80" alt="not-found" />
      </div>
    );
  }
  return (
  
   
       <div className="grid grid-cols-2 place-items-center h-screen max-w-xl mx-auto px-4">
        <h4 className="text-amber-500">Something went wrong. Please try again or contact Technical team.  <Link to="/dashboard" className='btn btn-primary btn-xs'>Go back to Dashboard</Link></h4>
      <img src="/error.svg" className="w-80" alt="not-found" />
    
      </div>
 
   
  );
};
export default Error;
