import { useState } from 'react';
import Wrapper from '../assets/Faqs';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';

const Faqs = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const [show2, setShow2] = useState(false);

  const handleShow2 = () => {
    setShow2(!show2);
  };
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);
  const [show13, setShow13] = useState(false);
  const [show14, setShow14] = useState(false);
  const [show15, setShow15] = useState(false);

  const handleShow3 = () => {
    setShow3(!show3);
  };

  const data = [
    {
      id: 1,
      text: ' What are your business hours?',
      handleShow: () => {
        setShow(!show);
      },
      text2:
        'Our branches are typically open from 9:00 AM to 5:00 PM, Monday through Friday. ',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show,
    },
    {
      id: 2,
      text: 'How can I contact customer service?',
      handleShow: () => {
        setShow2(!show2);
      },
      text2:
        'You can reach our customer service team by calling [Customer Service Number], emailing us at support.pledgebank@gmail.com, or using the live chat feature on our website.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show2,
    },
    {
      id: 3,
      text: 'How do I open a new account?',
      handleShow: () => {
        setShow3(!show3);
      },
      text2:
        'You can open a new account online through our website, visit any of our branches, or contact customer service for assistance.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show3,
    },
    {
      id: 4,
      text: 'What do I need to open an account?',
      handleShow: () => {
        setShow4(!show4);
      },
      text2:
        'To open an account, you will need a valid government-issued ID, proof of address, and your Social Security number or Tax Identification Number. Additional documentation may be required for specific account types.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show4,
    },
    {
      id: 5,
      text: 'How can I check my account balance?',
      handleShow: () => {
        setShow5(!show5);
      },
      text2:
        'You can check your account balance through our online banking platform, mobile app, by visiting a branch, or using one of our ATMs.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show5,
    },
    {
      id: 6,
      text: 'How do I reset my online banking password?',
      handleShow: () => {
        setShow6(!show6);
      },
      text2: 'You can also contact customer service for assistance.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show6,
    },
    {
      id: 7,
      text: 'What are the options for making a deposit?',
      handleShow: () => {
        setShow7(!show7);
      },
      text2:
        'You can make deposits via our ATMs, mobile check deposit through our app, in-branch, or through direct deposit from your employer',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show8,
    },
    {
      id: 8,
      text: 'How do I set up direct deposit?',
      handleShow: () => {
        setShow3(!show8);
      },
      text2:
        'Provide your employer with our bank routing number and your account number. You can find these details on your checks or by logging into your online banking account.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show8,
    },
    {
      id: 9,
      text: 'What are the options for making a deposit?',
      handleShow: () => {
        setShow9(!show9);
      },
      text2:
        'You can make deposits via our ATMs, mobile check deposit through our app, in-branch, or through direct deposit from your employer',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show9,
    },
    {
      id: 10,
      text: 'How do I apply for a loan?',
      handleShow: () => {
        setShow3(!show10);
      },
      text2:
        'You can apply for a loan online, in person at a branch, or by contacting our loan officers. Visit our website for more details on the loan application process.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show10,
    },
    {
      id: 11,
      text: 'What documents are required for a loan application?',
      handleShow: () => {
        setShow10(!show10);
      },
      text2:
        'Required documents typically include proof of income, employment verification, credit history, and personal identification. Specific requirements may vary by loan type.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show10,
    },
    {
      id: 12,
      text: 'How can I check the status of my loan application?',
      handleShow: () => {
        setShow11(!show11);
      },
      text2:
        'Log into your online account to check the status of your application, or contact your loan officer directly.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show11,
    },
    {
      id: 13,
      text: 'Is online banking secure?',
      handleShow: () => {
        setShow12(!show12);
      },
      text2:
        'Yes, we use advanced encryption and security measures to protect your information. Ensure you use strong passwords and monitor your account regularly for any suspicious activity.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show12,
    },
    {
      id: 14,
      text: 'What should I do if I suspect fraudulent activity on my account?',
      handleShow: () => {
        setShow13(!show13);
      },
      text2:
        'Contact our customer service immediately if you suspect any unauthorized transactions. We will assist you in securing your account and investigating the issue.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show13,
    },
    {
      id: 15,
      text: 'How can I protect myself from fraud?',
      handleShow: () => {
        setShow14(!show14);
      },
      text2:
        'Use strong, unique passwords for your accounts, monitor your account activity regularly, enable account alerts, and avoid sharing your personal information.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show14,
    },
    {
      id: 16,
      text: 'How do I set up a wire transfer?',
      handleShow: () => {
        setShow15(!show15);
      },
      text2:
        'You can set up a wire transfer by visiting a branch or through our online banking platform. You will need the recipient banking information and the amount to be transferred.',
      icon1: <FaPlusSquare />,
      icon2: <FaMinusSquare />,
      show: show15,
    },
  ];

  return (
    <>
      <div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" defaultChecked />
  <div className="collapse-title font-semibold">How do I open an account?</div>
  <div className="collapse-content text-sm">To open an account, simply visit our website and click on the “Open Account” button. You’ll need to provide some personal information, verify your identity, and choose the account type that best fits your needs. Once approved, you'll have immediate access to your account online.</div>
</div>
<div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title font-semibold">Is online banking secure?</div>
  <div className="collapse-content text-sm">Yes, we prioritize the security of your financial data. Our online banking platform uses advanced encryption technologies and multi-factor authentication (MFA) to ensure that your personal and financial information remains safe and secure at all times.</div>
</div>
<div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title font-semibold"> How can I reset my online banking password?</div>
        <div className="collapse-content text-sm">If you’ve forgotten your password, simply click on the “Forgot Password” link on the login page. You’ll be prompted to verify your identity, and then you can reset your password. If you need further assistance, our customer support team is available to help.</div>
        
        <div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title font-semibold">Can I transfer money to another bank account?</div>
  <div className="collapse-content text-sm">Yes, you can transfer funds to accounts at other banks. Simply log into your account, select the “Transfer Funds” option, and follow the instructions. You can send money domestically and, in some cases, internationally.</div>
        </div>
        

        <div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title font-semibold">How do I pay my bills through online banking?</div>
  <div className="collapse-content text-sm">To pay bills, log into your account and navigate to the “Bill Payment” section. You can add your payees and make one-time or recurring payments directly from your account. You’ll receive confirmation once the payment is processed.</div>
        </div>
        




        <div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title font-semibold"> What should I do if I suspect fraudulent activity on my account?</div>
  <div className="collapse-content text-sm">If you notice any suspicious activity, please contact us immediately via our customer support number or secure messaging system. We’ll work with you to investigate the issue and protect your account. You can also freeze your account temporarily while we assist you.</div>
</div>

        

        <div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title font-semibold">How do I apply for a loan through online banking?</div>
  <div className="collapse-content text-sm">To apply for a loan, log into your account and visit the “Loan Applications” section. Choose the loan type, enter the required details, and submit your application. Our team will review your request and get back to you with a decision.</div>
</div>


        
        <div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title font-semibold">What fees are associated with online banking?</div>
  <div className="collapse-content text-sm">We offer a variety of account types, some with no fees and others with minimal charges for specific services (e.g., wire transfers, overdrafts). For detailed fee information, please refer to our pricing guide or contact customer support for more details.</div>
</div>

        

        <div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title font-semibold">How can I update my personal details (e.g., address, phone number)?</div>
  <div className="collapse-content text-sm">You can update your personal information directly from your online banking dashboard. Navigate to your profile settings and make the necessary changes. If you need assistance, our support team is happy to help.</div>
        </div>
        


        
        <div className="collapse bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title font-semibold">How do I close my account?</div>
  <div className="collapse-content text-sm">If you wish to close your account, please contact customer support. We’ll guide you through the process and ensure your account is properly closed. Be sure to clear any pending transactions before proceeding.</div>
</div>


        
</div>
    </>
  );
};
export default Faqs;
