import cardImg from '../images/image 12.png';
import starImg from '../images/Star 1.png';


function Card(){
  return (
    <div className="card">
      <div className="card__top">
        <img src={cardImg} alt="" className="card__img" />
        <div className="card__availability">
          SOLD OUT
        </div>
      </div>
      <div className="card__info">
        <div className="card__reviews">
          <img src={starImg} alt="" />
          <span className='card__reviews-rate'>5.0</span>
          <span className='card__reviews-count'>(6)</span>.
          <span className='card__reviews-location'>USA</span>
        </div>
        <div className="card__description">
          Life lessons with Katie Zaferes
        </div>
        <div className="card__price">
          <span className="card__price--bold">From $136</span> / person
        </div>
      </div>
    </div>
  );
}

export default Card;