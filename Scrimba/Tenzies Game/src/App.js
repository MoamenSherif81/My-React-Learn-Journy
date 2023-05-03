import { useEffect, useState } from "react";
import Die from "./components/Die";
import {nanoid} from 'nanoid'
import Confettie from 'react-confetti'

function App() {
  const [dice, setDice] = useState(getRandomDice()); 
  const [tenzies, setTenzies] = useState(false);
  const [cnt, setCnt] = useState(0);
  const [best, setBest] = useState(JSON.parse(localStorage.getItem('best')));

  useEffect(() => {
    const isAllHeld = dice.every(die => die.isHeld);
    const value = dice[0].value;
    const isAllSame = dice.every(die => die.value === value);
    if(isAllHeld && isAllSame){
      setTenzies(true);
      if(best === null || cnt < best) {
        setBest(cnt);
      }
    } 
  }, [dice, cnt, best])

  useEffect(() => localStorage.setItem('best', best), [best])

  function generateNewDie(){
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }
  }

  function getRandomDice(){
    let newArr = [];
    for(let i = 0; i < 10; i++){
      newArr.push(generateNewDie());
    }
    return newArr;
  }

  function toggleHeld(id){
    if(tenzies) return;
    setDice(prevArr => prevArr.map(
      (ele) => (ele.id === id) ? {...ele, isHeld: !ele.isHeld} : ele
    ))
  }

  function rollDice(){
    if(tenzies){
      setDice(getRandomDice());
      setTenzies(false);
      setCnt(0);
    } else {
      setCnt(prev => prev + 1);
      setDice(prevArr => prevArr.map(ele => {
        return ele.isHeld ? ele : generateNewDie()
      }))
    }
  }

  const diceElements = dice.map(
    (ele) => {
      return (
      <Die 
        key={ele.id} 
        id={ele.id} 
        value={ele.value} 
        isHeld={ele.isHeld} 
        toggleHeld={toggleHeld}/>
      )
    }
  )

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dies-cont">
        {diceElements}
      </div>
      <button className="roll-btn" onClick={rollDice}>{tenzies ? 'New game!' : 'Roll'}</button>
      {tenzies && <Confettie />}
      <p className="info">
        {best !== null && `Your best: ${best}`} Roll Count: {cnt}
      </p>
    </main>
  );
}

export default App;
