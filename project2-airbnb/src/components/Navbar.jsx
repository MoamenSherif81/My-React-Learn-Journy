import navLogo from '../images/logo.png';

function Navbar(){
  return (
    <nav>
      <img src={navLogo} alt="" className="nav__logo" />
    </nav>
  );
}

export default Navbar;