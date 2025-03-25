import { Outlet } from 'react-router-dom';
import { FooterDashboard, Navbar } from '../DashboardComponent';
import { useSelector } from 'react-redux';

const HomeLayout = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {user && (
        <div>
          <Navbar />
          <div className="md:ml-[19.2em] px-4 " >
            <Outlet />
                 <FooterDashboard/>
          </div>
     
        </div>
      )}
    </>
  );
};
export default HomeLayout;
