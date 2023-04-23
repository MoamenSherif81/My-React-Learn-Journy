import emailSVG from '../images/email.svg';
import linkedinSVG from '../images/linkedin.svg';

function ContactButtons(){
  return (
    <div className="contact">
      <a href='mailto: moamenyt@gmail.com' className="contact__button">
        <span><img src={emailSVG} alt="" /></span>
        <p>Email</p>
      </a>
      <a href='https://www.linkedin.com/in/moamen-sherif/' className="contact__button contact__button--blue">
        <span><img src={linkedinSVG} alt="" /></span>
        <p>LinkedIn</p>
      </a>
    </div>
  );
}

export default ContactButtons;