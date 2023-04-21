function Card(props){
  let badgeText;
  if(props.openSpots === 0) badgeText = 'SOLD OUT'
  else if(props.location === 'Online') badgeText = 'ONLINE';

  return (
    <div className="card">
      <div className="card__top">
        <img src={props.img} alt="" className="card__img" />
        {badgeText && <div className="card__badge">
          {badgeText}
        </div>}
      </div>
      <div className="card__info">
        <div className="card__reviews">
          <img src='./images/Star 1.png' alt="" />
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