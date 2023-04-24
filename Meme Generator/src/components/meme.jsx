import buttonImg from '../images/img.svg'
import { useEffect, useState } from 'react';

function Meme(){
  //initialize states
  let [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    memeImg: 'https://i.imgflip.com/1bij.jpg',
  });
  let [allMemes, setAllMemes] = useState([]);

  //Get the data from API and store it in the state
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes));
  }, [])

  //function to get a randome meme from memes Array
  function randomMeme(){
    let randomIndex = Math.floor(Math.random() * allMemes.length);
    setMeme(prev => ({
      ...prev,
      memeImg: allMemes[randomIndex].url
    }));
  }

  //Function to handle the change of the form
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