import { useEffect, useState } from "react";

function WindowTracker(){
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    function watchWidth(){
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', watchWidth);
    return () => {
      window.removeEventListener('resize', watchWidth);
    }
  })

  return (
    <h1>Window width: {windowWidth}</h1>
  )
}

export default WindowTracker;