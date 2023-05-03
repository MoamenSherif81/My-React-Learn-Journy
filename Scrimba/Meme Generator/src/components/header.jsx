import navLogo from '../images/Troll Face.png'

function Header(){
  return (
    <nav>
      <div className="nav__logo">
        <img className="nav__logo-icon" src={navLogo} alt='logo' />
        <div className="nav__logo-text">Meme Generator</div>
      </div>
      <div className="nav__text">
        React Course - Project 3
      </div>
    </nav>
  );
}

export default Header;