import heroImg from '../images/main-img.png'

function Hero(){
  return (
    <div className="hero">
      <img className='hero__img' src={heroImg} alt="" />
      <div className="hero__text-cont">
        <h1 className='hero__title'>Online Experiences</h1>
        <p className='hero__text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  );
}

export default Hero;