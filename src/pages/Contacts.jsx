import Wrapper from '../assets/Contact';

const Contacts = () => {
  document.title = `Contact`;
  return (
    <div className="grid grid-cols-1 place-items-center h-96 max-w-6xl mx-auto px-4" style={{fontFamily: 'var(--ff-header)'}}>
      
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Customer Support" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><p>For general inquiries, account support, or assistance with your banking services, please contact our customer support team. We’re available 24/7 to provide you with the help you need.
Phone: +1 (365) 675-1815
Email: customercare.trustunionbank@gmail.com

Live Chat: Available via our website</p></div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Online Banking Assistance" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6"><p>If you need help with online banking, including issues with logging in, resetting your password, or using specific features of our platform, our online banking support team can assist you.

Phone: +1 (365) 675-1815
Email: customercare.trustunionbank@gmail.com</p></div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Report Fraud or Security Concerns" />
  <div className="tab-content bg-base-100 border-base-300 p-6"><p>If you suspect any fraudulent activity on your account or need to report a security issue, please contact us immediately. We take your security very seriously and will work with you to resolve any concerns.

Phone: +1 (365) 675-1815
Email: customercare.trustunionbank@gmail.com</p></div>
</div>
</div>
  );
};
export default Contacts;
