import emailSVG from '../images/email.svg';
import linkedinSVG from '../images/linkedin.svg';

function ContactButtons(){
  return (
    <div className="contact">
      <button className="contact__button">
        <span><img src={emailSVG} alt="" /></span>
        <p>Email</p>
      </button>
      <button className="contact__button contact__button--blue">
        <span><img src={linkedinSVG} alt="" /></span>
        <p>LinkedIn</p>
      </button>
    </div>
  );
}

export default ContactButtons;