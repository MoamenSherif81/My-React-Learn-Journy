import './App.css';
import MainCard from './components/MainCard';
import userImage from './images/Moamen Sherif.jpeg'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img className="card__img" src={userImage} alt="" />
        <MainCard />
      </div>
    </div>
  );
}

export default App;
