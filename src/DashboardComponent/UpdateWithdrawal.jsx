import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/DashboardWrapper/SendMoney';
import { customFetch } from '../utils';
import { loginUser } from '../features/user/userSlice';
import FormInput from '../components/FormInput';
import { FormSelect, SubmitBtn } from '../components';
import { FaArrowCircleDown, FaTimes } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { addWithdraw } from '../features/user/userSlice';
import Alert from './Alert';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import { FiDownload } from 'react-icons/fi';
import moment from 'moment';

export const action =
  (store) =>
  async ({ request }) => {
    const alert = document.querySelector('.form-alert');
    const name = document.querySelector('#name');
    const amount = document.querySelector('#amount');
    const bank = document.querySelector('#bank');
    const account = document.querySelector('#account');
    const alertImg = document.querySelector('.alert-img');
    const format = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const formData = await request.formData();
    const { user, balance } = store.getState().userState;
    let data = Object.fromEntries(formData);

    data = {
      ...data,
      accountNumber: data.accountNumber,
      accountName: data.accountName,
      amount: data.amount,
      bank: data.bank,
      date1: data.date1,
      date2: data.date2,
      narration: data.narration,
    };

    if (balance > 0) {
      try {
        const resp = await customFetch.patch(
          `/withdraw/${data.withdraw}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        alertImg.classList.add('show2');

        const withdraw2 = resp.data.withdraw;
        name.textContent = withdraw2.accountName;
        bank.textContent = withdraw2.bank;
        amount.textContent = `USD ${format(withdraw2.amount)}`;
        account.textContent = withdraw2.accountNumber;

        // console.log(withdraw2);

        return null;
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
    } else {
      alert.innerHTML = `Balance is too low for this transaction`;
      alert.style.background = 'var(--clr-primary-8)';
      setTimeout(() => {
        alert.innerHTML = '';
        alert.style.background = 'none';
      }, 3000);
    }
  };

const UpdateWithdrawal = () => {
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

  const navigate = useNavigate();
  const { user, account, allUsers, allWithdraw } = useSelector(
    (state) => state.userState
  );

  const [show, setShow] = useState(false);

  const length = Object.values(account).length - 1;
  const mainAccount = Object.values(account);

  const close = () => {
    const alertImg = document.querySelector('.alert-img');
    alertImg.classList.remove('show2');
    window.location.reload();
  };
  const ok = () => {
    const alertImg = document.querySelector('.alert-img');
    alertImg.classList.remove('show2');
    window.location.reload();
  };

  const handleConfirm = () => {
    const name = document.querySelector('#senderName');
    const inputShow = document.querySelector('.input-show');
    const confirmBtn = document.querySelector('.confirm-btn');
    const alert = document.querySelector('.form-alert');
    const ms = document.querySelector('#ms').value;
    const acc = document.querySelector('#acc').value;

    if (
      acc !== '' &&
      acc === mainAccount[length].accountNumber &&
      ms === mainAccount[length].bank
    ) {
      inputShow.classList.add('show');
      name.value = mainAccount[length].name;
      confirmBtn.style.display = 'none';
      setShow(true);
    } else {
      alert.innerHTML = `Sorry you cannot transfer at the moment. Please contact Support team to resolve this issue`;
      alert.style.background = 'var(--clr-primary-8)';
      setTimeout(() => {
        alert.innerHTML = '';
        alert.style.background = 'none';
      }, 3000);
    }
  };

  // const doc = new jsPDF()

  const receiptRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    });
    // adding font
    doc.setFont('Inter-Regular', 'normal');

    doc.html(receiptRef.current, {
      async callback(doc) {
        await doc.save('receipt');
      },
    });
  };

  const handleWithdraw = () => {
    const withdrawValue = document.querySelector('#withdraw');
    localStorage.setItem('withdrawValue', JSON.stringify(withdrawValue));
    console.log(withdrawValue);
  };
  return (
    <Wrapper>
      <div className="form-alert"></div>
      <div className="alert-main"></div>

      <div ref={receiptRef} className="alert-img">
        <div className="close-btn" onClick={close}>
          <FaTimes className="close" />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            background: 'var(--clr-primary-5)',
            padding: '0.3rem 0',
          }}
        >
          <img
            src="/logo.png"
            style={{ width: '1rem', marginRight: '1rem' }}
            alt="logo"
          />
          <h4>Pledge</h4>
          <h4 className="nav-logo" style={{ color: 'var(--clr-primary-10)' }}>
            Bank
          </h4>
        </div>

        <div className="c-img">
          <img
            src="/confirmed2.png"
            className="confirmed-img"
            style={{ width: '5rem', margin: '0 auto' }}
            alt="confirmed"
          />
        </div>
        <h4 style={{ textAlign: 'center', margin: '0 auto' }}>Success</h4>

        <p
          style={{
            marginBottom: '0',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <span>Name:</span>
          <span
            className="bold"
            style={{
              textTransform: 'capitalize',
              color: 'var(--clr-primary-2)',
            }}
            id="name"
          >
            {' '}
          </span>
        </p>
        <p
          style={{
            marginBottom: '0',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <span>Amount:</span>
          <span
            className="bold"
            style={{
              textTransform: 'capitalize',
              color: 'var(--clr-primary-2)',
            }}
            id="amount"
          >
            {' '}
          </span>
        </p>
        <p
          style={{
            marginBottom: '0',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <span>Bank Name: </span>
          <span
            className="bold"
            style={{
              textTransform: 'capitalize',
              color: 'var(--clr-primary-2)',
            }}
            id="bank"
          ></span>
        </p>
        <p
          style={{
            marginBottom: '0',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <span>Account Number:</span>{' '}
          <span
            className="bold"
            style={{
              textTransform: 'capitalize',
              color: 'var(--clr-primary-2)',
            }}
            id="account"
          ></span>
        </p>

        <button onClick={ok} className="btn confirmed-btn">
          OK
        </button>
        <button onClick={handleGeneratePdf} className="btn share-btn">
          <FiDownload />
        </button>
      </div>

      <Form method="patch" className="form">
        {/* <article className="from">
          <h4>Transfer From:</h4>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <div className="acc-details">
            <p>{user.typeOfAccount}:</p>
            <p>{user.accountNumber}</p>
          </div>
        </article> */}

        <h4 className="test">(Item to edit)</h4>
        {user.role === 'user' ? (
          ''
        ) : (
          <div className="custom-select test2">
            <select
              name="withdraw"
              onClick={handleWithdraw}
              id="withdraw"
              className=""
            >
              {Object.values(allWithdraw).map((item) => {
                const { _id, accountName, amount } = item;
                return (
                  <option key={_id} value={_id}>
                    {accountName}({amount})
                  </option>
                );
              })}
            </select>
          </div>
        )}

        <div className="custom-select test2">
          <select name="bank" id="ms" className="">
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

        <article className="to">
          <div>
            <h4 className="test">Transfer To:</h4>
            <FormInput
              placeholder="Beneficiary Account Number"
              name="accountNumber"
              id="acc"
            />

            <div className="input-show" style={{ width: '100%' }}>
              <FormInput name="accountName" id="senderName" />
            </div>
          </div>
        </article>

        <span onClick={handleConfirm} className="btn confirm-btn">
          Confirm Receiver
        </span>

        <h4 className="test" style={{ marginTop: '2rem' }}>
          User
        </h4>
        {user.role === 'user' ? (
          <input type="text" name="user" defaultValue={user._id} hidden />
        ) : (
          <div className="custom-select test2">
            <select name="user" id="ms" className="">
              {Object.values(allUsers).map((item) => {
                const { _id, firstName, lastName } = item;
                return (
                  <option key={_id} value={_id}>
                    {firstName} {lastName}
                  </option>
                );
              })}
            </select>
          </div>
        )}

        {user.role === 'admin' || user.role === 'owner' ? (
          <div className="">
            <FormInput placeholder="12th June 2024" name="date1" />
            <FormInput placeholder="11:57am, 12/06/2024" name="date2" />
          </div>
        ) : (
          <div>
            <input
              type="text"
              name="date1"
              defaultValue={moment().format('Do MMMM YYYY')}
              hidden
            />
            <input
              type="text"
              name="date2"
              defaultValue={moment().format('hh:mm a, DD/MM/YYYY')}
              hidden
            />
          </div>
        )}

        {show ? (
          <div>
            <FormInput placeholder="Amount" name="amount" />

            <FormInput placeholder="Narration" name="narration" />

            {user.role === 'user' ? (
              <SubmitBtn text="Transfer" />
            ) : (
              <SubmitBtn text="Update" />
            )}
          </div>
        ) : (
          ''
        )}
      </Form>
    </Wrapper>
  );
};
export default UpdateWithdrawal;
