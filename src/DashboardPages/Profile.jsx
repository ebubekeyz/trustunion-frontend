import { Link, redirect, useLoaderData } from 'react-router-dom';
import { Account as Acc } from '../DashboardComponent';
import { customFetch } from '../utils';
import Wrapper from '../assets/DashboardWrapper/AccountInfo';
import { useSelector } from 'react-redux';
import { FiEdit, FiLock } from 'react-icons/fi';
import moment from 'moment';

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};

const Profile = () => {
  const user = useSelector((state) => state.userState.user);

  const dob = user.dob;
  const year = dob.slice(0, 4);
  const age = Number(moment().format('YYYY')) - year;

  return (
    <div>
      {/* <div className="account">
        <div className="sub-menu">
          <Link to="/dashboard/account" className="editAccount">
            <FiEdit className="icon" />
            <h4>Update</h4>
          </Link>

          <Link to="/dashboard/security" className="security">
            <FiLock className="icon" />
            <h4>Security </h4>
          </Link>
        </div>

        <article className="transfer">
          <p className="date">Account Details</p>
          <div className="inner-transfer-cont">
            <div className="details">
              <p className="name">Name:</p>
              <p className="item">
                {user.firstName} {user.lastName}
              </p>
            </div>

            <div className="details">
              <p className="name">Age:</p>
              <p className="item">{age} years</p>
            </div>

            <div className="details">
              <p className="name">Address:</p>
              <p className="item">{user.address}</p>
            </div>

            <div className="details">
              <p className="name">Occupation:</p>
              <p className="item">{user.occupation}</p>
            </div>

            <div className="details">
              <p className="name">Marital Status:</p>
              <p className="item">{user.maritalStatus}</p>
            </div>

            <div className="details">
              <p className="name">Email:</p>
              <p className="item">{user.email}</p>
            </div>

            <div className="details">
              <p className="name">Country:</p>
              <p className="item">{user.country}</p>
            </div>
          </div>
        </article>
      </div> */}


      <section className="grid grid-cols-1 gap-4 mx-auto mt-4 md:mt-[-35rem] mb-4" style={{fontFamily:'var(--ff-header)'}}>
        <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-48 rounded-full ring ring-offset-2 mx-auto max-w-6xl">
    <img src={user.passport} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 items-center text-center mx-auto">
          <h1 className='font-semibold text-2xl'>{user.firstName} {user.lastName}</h1>
          <h1 className='font-semibold text-2xl'>{user.email}</h1>
          <Link to="/dashboard/settings" className="btn btn-block btn-md cursor-pointer">Edit Profile</Link>
       </div>
      </section>
      
    </div>
  );
};
export default Profile;
