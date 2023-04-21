import Navbar from "./components/Navbar";
import Card from "./components/card";
import Hero from "./components/hero";
import firstImg from "./images/image 12.png";
import secondImg from "./images/wedding-photography 1.png";
import thirdImg from "./images/mountain-bike 1.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">
        <Card
          img={firstImg}
          rate="5.0"
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price="136"
          available={false}
        />
        <Card
          img={secondImg}
          rate="5.0"
          reviewCount={30}
          country="USA"
          title="Learn wedding photography"
          price="125"
          available={true}
        />
        <Card
          img={thirdImg}
          rate="4.8"
          reviewCount={2}
          country="USA"
          title="Group Mountain Biking"
          price="50"
          available={false}
        />
      </div>
    </div>
  );
}

export default App;
