import twitterSvg from '../images/twitter.svg'
import facebookSvg from '../images/facebook.svg'
import instaSvg from '../images/instagram.svg'
import githubSvg from '../images/github.svg'

function Footer(){
  return(
    <footer>
      <ul className="social">
        <li className="social__item">
          <a href="https://twitter.com/MoamenYT_" target='_blank' rel='noreferrer'>
            <img src={twitterSvg} alt="MoamenYT_ Twitter" />
          </a>
        </li>
        <li className="social__item">
          <a href="https://www.facebook.com/MoamenSherif81" target='_blank' rel='noreferrer'>
            <img src={facebookSvg} alt="MoamenSherif81 Facebook" />
          </a>
        </li>
        <li className="social__item">
          <a href="https://www.instagram.com/moamensherif81/" target='_blank' rel='noreferrer'>
            <img src={instaSvg} alt="moamensherif81 Instagram" />
          </a>
        </li>
        <li className="social__item">
          <a href="https://github.com/MoamenSherif81" target='_blank' rel='noreferrer'>
            <img src={githubSvg} alt="MoamenSherif81 Github" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;