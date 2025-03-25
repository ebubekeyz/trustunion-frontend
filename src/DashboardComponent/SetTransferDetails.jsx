import { Form, redirect, useLoaderData } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import { customFetch } from '../utils';
import Wrapper from '../assets/DashboardWrapper/SetTransferDetails';
import { useEffect } from 'react';

export const action =
  (store) =>
  async ({ request }) => {
    const { user } = store.getState().userState;
    const alert = document.querySelector('.form-alert');

    const formData = await request.formData();
    let data = Object.fromEntries(formData);
    const account = store.getState().userState.account;

    const id = Object.values(account)[0]._id;

    data = { ...data, status: 'false' };

    try {
      const resp = await customFetch.patch(`/account/${id}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      alert.innerHTML = 'Update Successful';
      alert.style.background = 'var(--clr-primary-8)';
      setTimeout(() => {
        alert.innerHTML = '';
        alert.style.background = 'none';
      }, 3000);
      window.location.reload();
      return redirect('/dashboard/set-transfer-details');
    } catch (error) {
      const errorMessage = error.resp.data.msg || 'Error';
      alert.textContent = errorMessage;
      alert.style.textAlign = 'center';
      alert.style.color = 'var(--clr-primary-7)';
      alert.style.background = 'rgba(0,0,0,0.7)';

      setTimeout(() => {
        alert.textContent = ``;
        alert.style.display = 'hidden';
        alert.style.background = 'none';
        alert.style.background = 'transparent';
      }, 3000);

      return null;
    }
  };

const SetTransferDetails = () => {
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

  //   window.addEventListener('DOMContentLoaded', () => {
  //     select();
  //   });
  useEffect(() => {
    select();
  }, []);
  return (
    <Wrapper>
      <div className="form">
        <h4>Edit Transfer Details</h4>
        <div className="form-alert"></div>
        <Form method="patch">
          <FormInput type="text" name="name" placeholder="Account Name" />
          <FormInput
            type="text"
            name="accountNumber"
            placeholder="Account Number"
          />
          <FormInput
            type="text"
            name="routingNumber"
            placeholder="Routing Number"
          />
          <FormInput
            type="text"
            name="pin"
            placeholder="Enter your transfer pin"
          />
          <div className="custom-select">
            <select name="bank" id="ms">
              <option value="Choose Bank">Choose Bank</option>
              <option value="Bank Of America">Bank Of America</option>
              <option value="Capital One">Capital One</option>
              <option value="Chase Bank (Jp Morgan Chase)">
                Chase Bank (Jp Morgan Chase)
              </option>
              <option value="Citibank">Citibank</option>
              <option value="Fifth Third Bank">Fifth Third Bank</option>
              <option value="HSBC">HSBC</option>
              <option value="PNC Bank">PNC Bank</option>
              <option value="Santander">Santander</option>
              <option value="Truist Bank">Truist Bank</option>
              <option value="U.S. Bancorp">U.S. Bancorp</option>
              <option value="USAA">USAA</option>
              <option value="Wells Fargo Bank">Wells Fargo Bank</option>
            </select>
          </div>
          <SubmitBtn text="update" />
        </Form>
      </div>
    </Wrapper>
  );
};
export default SetTransferDetails;
