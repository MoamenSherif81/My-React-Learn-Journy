import { useState } from "react";
import Main from "./components/main";
import Nav from "./components/nav";

function App(){
  let [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode(){
    setDarkMode(prevState => !prevState);
  }

  return (
    <>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode} />
    </>
  );
}

export default App;