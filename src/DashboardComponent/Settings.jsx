import { useSelector } from 'react-redux';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { SubmitBtn } from '../components';

export const action =
  (store) =>
  async ({ request }) => {
   
  };







const Settings = () => {
   const user = useSelector((state) => state.userState.user);


  return (
    <section className="grid grid-cols-1 gap-4 mx-auto mt-4 md:mt-[-35rem] mb-4" style={{fontFamily:'var(--ff-header)'}}>
        <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-48 rounded-full ring ring-offset-2 mx-auto max-w-6xl">
    <img src={user.passport} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 items-center text-center mx-auto">
         <Form method="post" className="card-body form-control">
        <fieldset className="fieldset md:grid md:grid-cols-2 gap-4">
         <div> <label className="fieldset-label" >Username</label>
          <input type="text" className="input" placeholder="Username" name="username"/></div>
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" name="password" />
         
                
                <SubmitBtn text="Update"/>
        </fieldset>
              </Form>
          
       </div>
      </section>
      
  )
}
export default Settings