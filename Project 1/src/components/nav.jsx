import logo from '../images/logo.svg'

function Nav(){
  return (
    <nav className="nav">
      <div className="nav-header">
        <img className="logo" src={logo} alt="" />
        <h4 className="logo-text">ReactFacts</h4>
      </div>
      <p className='nav-text'>React Course - Project 1</p>
    </nav>
  );
}

export default Nav;