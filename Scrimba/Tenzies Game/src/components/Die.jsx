import { nanoid } from "nanoid";

function Die(props){
  const styles = {
    backgroundColor: props.isHeld ? '#59e391' : '#fff',
  }

  function putDots(number){
    const dotsArr = [];
    for(let i = 0; i < number; i++){
      dotsArr.push(<div key={nanoid()} className="dot"><div className="dot-content"></div></div>)
    }
    return dotsArr
  }

  return (
    <div className='die' onClick={() => props.toggleHeld(props.id)}>
      <div className="die-content" style={styles}>
        {putDots(props.value)}
      </div>
    </div>
  );
}

export default Die;