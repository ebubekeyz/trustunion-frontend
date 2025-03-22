import { Form, Link, NavLink, redirect } from 'react-router-dom';
import Wrapper from '../assets/Register';
import { customFetch } from '../utils';
import { loginUser } from '../features/user/userSlice';
import { FaArrowCircleDown } from 'react-icons/fa';
import FormInput from '../components/FormInput';
import { FormSelect, SubmitBtn } from '../components';
import { useEffect } from 'react';

export const action =
  (store) =>
  async ({ request }) => {
    const formAlert = document.querySelector('#form-alert');
    const formData = await request.formData();
    let data = Object.fromEntries(formData);
    console.log(data);

    try {
      const response = await customFetch.post('/auth/local/register', data);
      formAlert.textContent = `successful`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
      }, 3000);
      return redirect('/login');
    } catch (error) {
      console.log(error);
      const errorMessage = error.response.data.msg || 'Registration Failed';
      formAlert.textContent = errorMessage;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';
      formAlert.style.background = 'rgba(0,0,0,0.7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
        formAlert.style.background = 'transparent';
      }, 3000);
      return null;
    }
  };

const Register = () => {
  const handleTab = (e) => {
    const about = document.querySelector('.about');
    const btns = document.querySelectorAll('.tab-btn');
    const articles = document.querySelectorAll('.content');
    const id = e.target.dataset.id;

    if (id) {
      // remove selected from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      // hide other articles
      articles.forEach(function (article) {
        article.classList.remove('active');
      });
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  };

  const validate1 = () => {
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;

    const data = document.querySelector('#btn1');
    const password = document.querySelector('#password').value;
    const formAlert = document.querySelector('#form-alert');

    if (!firstName || !lastName || !password) {
      data.dataset.id = '';
      formAlert.textContent = `Input should not be empty`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
      }, 3000);
    } else {
      data.dataset.id = 'vision';
    }
  };
  const validate2 = () => {
    const address = document.querySelector('#address').value;
    const email = document.querySelector('#email').value;
    const idNumber = document.querySelector('#idNumber').value;
    const data = document.querySelector('#btn2');
    const formAlert = document.querySelector('#form-alert');

    if (!email || !address || !idNumber) {
      data.dataset.id = '';
      formAlert.textContent = `Input should not be empty`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
      }, 3000);
    } else {
      data.dataset.id = 'vision2';
    }
  };

  const validate3 = () => {
    const country = document.querySelector('#country').value;
    const dob = document.querySelector('#dob').value;
    const phone = document.querySelector('#phone').value;
    const data = document.querySelector('#btn3');
    const formAlert = document.querySelector('#form-alert');

    if (!country || !dob || !phone) {
      data.dataset.id = '';
      formAlert.textContent = `Input should not be empty`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
      }, 3000);
    } else {
      data.dataset.id = 'goals';
    }
  };

  const validate4 = () => {
    const ao = document.querySelector('#ao').value;
    const ms = document.querySelector('#ms').value;
    const toa = document.querySelector('#toa').value;
    const data = document.querySelector('#btn4');
    const formAlert = document.querySelector('#form-alert');

    if (!ao || !ms || !toa) {
      data.dataset.id = '';
      formAlert.textContent = `Input should not be empty`;
      formAlert.style.textAlign = 'center';
      formAlert.style.color = 'var(--clr-primary-7)';

      setTimeout(() => {
        formAlert.textContent = ``;
        formAlert.style.display = 'hidden';
        formAlert.style.background = 'none';
      }, 3000);
    } else {
      data.dataset.id = 'goals2';
    }
  };

  const select = () => {
    let x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName('custom-select');
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName('select')[0];
      ll = selElmnt.length;
      /* For each element, create a new DIV that will act as the selected item: */
      a = document.createElement('DIV');
      a.setAttribute('class', 'select-selected');
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /* For each element, create a new DIV that will contain the option list: */
      b = document.createElement('DIV');
      b.setAttribute('class', 'select-items select-hide');
      for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
    create a new DIV that will act as an option item: */
        c = document.createElement('DIV');
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener('click', function (e) {
          /* When an item is clicked, update the original select box,
        and the selected item: */
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName('select')[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName('same-as-selected');
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute('class');
              }
              this.setAttribute('class', 'same-as-selected');
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener('click', function (e) {
        /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle('select-hide');
        this.classList.toggle('select-arrow-active');
      });
    }

    function closeAllSelect(elmnt) {
      /* A function that will close all select boxes in the document,
  except the current select box: */
      var x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
      x = document.getElementsByClassName('select-items');
      y = document.getElementsByClassName('select-selected');
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove('select-arrow-active');
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add('select-hide');
        }
      }
    }

    /* If the user clicks anywhere outside the select box,
then close all select boxes: */
    document.addEventListener('click', closeAllSelect);
  };

  useEffect(() => {
    select();
  }, [validate3]);
  return (
    <Wrapper>
   {/* <div className="hero bg-base-200 md:min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-amber-200">Open An Account!</h1>
      <p className="py-6 text-amber-50">
      Please ensure you enter your correct information to avoid account suspension. 
      </p>
    </div>
    <div className="card bg-base-100 max-w-sm md:max-w-lg shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset ">
          <div><label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email"  name="email"/></div>
          <div className=""><label className="fieldset-label">First Name</label>
          <input type="text" className="input" placeholder="First Name" /></div>
          <div className=""> <label className="fieldset-label">Last Name</label>
          <input type="text" className="input" placeholder="Last Name" /></div>
         <div className=""> <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" /></div>
         <div className=""> <label className="fieldset-label">Phone</label>
          <input type="text" className="input" placeholder="Phone" /></div>
         <div className=""> <label className="fieldset-label">Country</label>
                  <input type="text" className="input" placeholder="Country" /></div>
         <div className=""> 
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Gender</legend>
  <select defaultValue="Pick a browser" className="select" name="gender">
    <option disabled={true}>Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
 
</fieldset>
         </div>


           <div className=""> 
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Marital Status</legend>
  <select defaultValue="Pick a browser" className="select" name="maritalStatus">
    <option disabled={true}>Select Marital Status</option>
    <option value="Single">Single</option>
    <option value="Married">Married</option>
    <option value="Divorced">Divorced</option>
  </select>
 
</fieldset>
         </div>

          <div className=""> 
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Account Type</legend>
  <select defaultValue="Pick a browser" className="select" name="typeOfAccount">
    <option disabled={true}>Select Account Type</option>
    <option value="Savings Account">Savings Account</option>
    <option value="Checking Account">Checking Account</option>
    <option value="Money Market Account">Money Market Account</option>
    <option value="Certificate Of Deposit Account">Certificate Of Deposit Account</option>
  </select>

</fieldset>
         </div>


         <div className="pt-4"><label className="fieldset-label">Date of Birth</label>
           <input type="date" className="input" name="dob"/></div>
                
               
                
          
              </fieldset>

              <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
  <label className="label">
    <input type="checkbox"  className="checkbox" />
    Do you agree to our Terms and Conditions?
  </label>
</fieldset>

               <button type="submit" className="btn btn-neutral mt-4">Open Account</button>
              
      </div>
    </div>
  </div>
</div> */}

       
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-amber-200">Register</h1>
      <p className="py-6 text-amber-50">
    Please ensure you enter your correct information to avoid account suspension.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
           <div><label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email"  name="email"/></div>
          <div className=""><label className="fieldset-label">First Name</label>
          <input type="text" className="input" placeholder="First Name" /></div>
          <div className=""> <label className="fieldset-label">Last Name</label>
          <input type="text" className="input" placeholder="Last Name" /></div>
         <div className=""> <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" /></div>
         <div className=""> <label className="fieldset-label">Phone</label>
          <input type="text" className="input" placeholder="Phone" /></div>
         <div className=""> <label className="fieldset-label">Country</label>
                  <input type="text" className="input" placeholder="Country" /></div>
                <div className=""> 
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Gender</legend>
  <select defaultValue="Pick a browser" className="select" name="gender">
    <option disabled={true}>Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
 
</fieldset>
         </div>

                 <div className=""> 
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Marital Status</legend>
  <select defaultValue="Pick a browser" className="select" name="maritalStatus">
    <option disabled={true}>Select Marital Status</option>
    <option value="Single">Single</option>
    <option value="Married">Married</option>
    <option value="Divorced">Divorced</option>
  </select>
 
</fieldset>
         </div>

                 <div className=""> 
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Account Type</legend>
  <select defaultValue="Pick a browser" className="select" name="typeOfAccount">
    <option disabled={true}>Select Account Type</option>
    <option value="Savings Account">Savings Account</option>
    <option value="Checking Account">Checking Account</option>
    <option value="Money Market Account">Money Market Account</option>
    <option value="Certificate Of Deposit Account">Certificate Of Deposit Account</option>
  </select>

</fieldset>
         </div>

                 <div className="pt-4"><label className="fieldset-label">Date of Birth</label>
           <input type="date" className="input" name="dob"/></div>

                 <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
  <label className="label">
    <input type="checkbox"  className="checkbox" />
    Do you agree to our Terms and Conditions?
  </label>
</fieldset>
                
          <button type="submit" className="btn btn-neutral mt-4">Open Account</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    </Wrapper>
  );
};
export default Register;
