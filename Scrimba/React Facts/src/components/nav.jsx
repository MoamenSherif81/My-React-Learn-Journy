import logo from '../images/logo.svg'

function Nav(props){
  return (
    <nav className={(props.darkMode ? "dark ": "") + "nav"}>
      <div className="nav-header">
        <img className="logo" src={logo} alt="" />
        <h4 className="logo-text">ReactFacts</h4>
      </div>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}

export default Nav;