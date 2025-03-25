import Wrapper from '../assets/Error';

const ErrorElement = () => {
  return (
   <div className="grid grid-cols-2 place-items-center h-screen max-w-xl mx-auto px-4">
          <h4 className="text-amber-500">Something went wrong. Please try again or contact Technical team.  <Link to="/" className='btn btn-primary btn-xs'>Go back to HomePage</Link></h4>
        <img src="/error.svg" className="w-80" alt="not-found" />
      
        </div>

  );
};
export default ErrorElement;
