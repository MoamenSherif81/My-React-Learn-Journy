import buttonImg from '../images/img.svg'
import memesData from '../data/memesData'
import { useState } from 'react';

function Meme(){
  let [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    memeImg: 'https://i.imgflip.com/1bij.jpg',
  });

  let [allMemeImages, setAllMemeImages] = useState(memesData);

  function randomMeme(){
    const memeArr = allMemeImages.data.memes;
    let randomIndex = Math.floor(Math.random() * memeArr.length);
    setMeme(prev => ({
      ...prev,
      memeImg: memeArr[randomIndex].url
    }));
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
        <img src={meme.memeImg} alt="" />
      </div>
    </div>
  );
}

export default Meme;