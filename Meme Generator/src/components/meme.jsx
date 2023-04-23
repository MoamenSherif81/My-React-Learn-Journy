import buttonImg from '../images/img.svg'
import memesData from '../data/memesData'
import { useState } from 'react';

function Meme(){
  let [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    memeImg: 'https://i.imgflip.com/1bij.jpg',
  });

  let [allMemeImages] = useState(memesData);

  function randomMeme(){
    const memeArr = allMemeImages.data.memes;
    let randomIndex = Math.floor(Math.random() * memeArr.length);
    setMeme(prev => ({
      ...prev,
      memeImg: memeArr[randomIndex].url
    }));
  }

  function handleChange(e){
    const {name, value} = e.target;
    setMeme(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return(
    <div className="meme">
      <div className="meme__form">
        <div className="meme__inputs-cont">
          <input 
            className='meme__input' 
            placeholder='Top text' 
            type="text" 
            name="topText"
            onChange={handleChange} 
            value={meme.topText}
          />
          <input 
            className='meme__input' 
            placeholder='Bottom text' 
            type="text" 
            name="bottomText" 
            onChange={handleChange} 
            value={meme.bottomText}
          />
        </div>
        <button type="submit" onClick={randomMeme} className='meme__submit'>
          Get a new meme image <img className='meme__submit-icon' src={buttonImg} alt="" />
        </button>
      </div>
      <div className="meme__img">
        <img src={meme.memeImg} alt="" />
        <h3 className='meme__text meme__text--top'>{meme.topText}</h3>
        <h3 className='meme__text meme__text--bottom'>{meme.bottomText}</h3>
      </div>
    </div>
  );
}

export default Meme;