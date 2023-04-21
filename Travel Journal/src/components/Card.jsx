import locationIcon from '../images/location.svg'

function Card(props){
  return(
    <div className="card">
      <div className='card__img'>
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="card__content">
        <div className="card__location">
          <div className="card__country">
            <img className='card__location-icon' src={locationIcon} alt="" />
            <span>{props.location}</span>
          </div>
          <div className="card__location-link">
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
        </div>
        <h3 className="card__title">
          {props.title}
        </h3>
        <div className="card__date">
          {props.startDate} - {props.endDate}
        </div>
        <p className="card__text">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Card;