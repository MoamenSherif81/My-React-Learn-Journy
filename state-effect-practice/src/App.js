import { useState } from "react";
import WindowTracker from "./components/WindowTracker";

function App() {
  let [show, setShow] = useState(true);

  function toggleShow(){
    setShow(prev => !prev);
  }

  return (
    <div className="App">
      <button onClick={toggleShow}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
