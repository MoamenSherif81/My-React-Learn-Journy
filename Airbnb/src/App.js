import Navbar from "./components/Navbar";
import Card from "./components/card";
import Hero from "./components/hero";
import experiences from "./data/experiencesData";

function App() {
  let experiencesElements = experiences.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">{experiencesElements}</div>
    </div>
  );
}

export default App;
