import Navbar from "./components/Navbar";
import Card from "./components/card";
import Hero from "./components/hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
