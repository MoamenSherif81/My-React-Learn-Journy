import starImg from '../images/Star 1.png';


function Card(props){
  return (
    <div className="card">
      <div className="card__top">
        <img src={props.img} alt="" className="card__img" />
        <div className="card__availability">
          {props.available ? "ONLINE" : "SOLD OUT"}
        </div>
      </div>
      <div className="card__info">
        <div className="card__reviews">
          <img src={starImg} alt="" />
          <span className='card__reviews-rate'>{props.rate}</span>
          <span className='card__reviews-count'>({props.reviewCount})</span>.
          <span className='card__reviews-location'>{props.country}</span>
        </div>
        <div className="card__description">
          {props.title}
        </div>
        <div className="card__price">
          <span className="card__price--bold">From ${props.price}</span> / person
        </div>
      </div>
    </div>
  );
}

export default Card;