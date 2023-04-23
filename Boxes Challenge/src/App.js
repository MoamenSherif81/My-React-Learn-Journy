import { useState } from 'react';
import './App.css';
import boxes from './data/data';
import Box from './components/box';

function App(props) {
  let [boxesArr, setBoxesArr] = useState(boxes);
  

  function toggle(id){
    setBoxesArr(prevArr => prevArr.map(box => ({
      ...box, 
      on: (box.id === id) ? !box.on : box.on
    })));
  }

  const boxesEle = boxesArr.map(ele => {
    return (
      <Box 
        key={ele.id} 
        id={ele.id}
        on={ele.on}
        handleClick={() => toggle(ele.id)} 
      />
    )
  });

  return (
    <>
      {boxesEle}
    </>
  );
}

export default App;
