import navIcon from '../images/nav-icon.svg'

function Navbar(){
  return (
    <nav>
      <img src={navIcon} alt="" className="nav__icon" />
      <div className="nav__title">My travel journal</div>
    </nav>
  );
}

export default Navbar;