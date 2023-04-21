import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import journeys from './data/journeys';

function App() {
  let journeysElements = journeys.map((ele) => {
    return <Card key={ele.id} {...ele}/>
  })
  return (
    <div className="App">
      <Navbar />
      <div className='cards'>
        {journeysElements}
      </div>
    </div>
  );
}

export default App;
