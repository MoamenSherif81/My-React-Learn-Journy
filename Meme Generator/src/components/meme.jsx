import buttonImg from '../images/img.svg'
import memesData from '../data/memesData'

function Meme(){

  function randomMeme(){
    const memeArr = memesData.data.memes;
    let randomIndex = Math.floor(Math.random() * memeArr.length);
    console.log(memeArr[randomIndex].url)
  }

  return(
    <div className="meme">
      <div className="meme__form">
        <div className="meme__inputs-cont">
          <input className='meme__input' placeholder='Top text' type="text" name="" id="" />
          <input className='meme__input' placeholder='Bottom text' type="text" name="" id="" />
        </div>
        <button type="submit" onClick={randomMeme} className='meme__submit'>
          Get a new meme image <img className='meme__submit-icon' src={buttonImg} alt="" />
        </button>
      </div>
      <div className="meme__img">

      </div>
    </div>
  );
}

export default Meme;