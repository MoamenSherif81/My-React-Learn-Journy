import './App.css';
import ContactButtons from './components/ContactButtons';
import PersonInfo from './components/PersonInfo';
import About from './components/about';
import Footer from './components/footer';
import Intersts from './components/interests';
import userImage from './images/Moamen Sherif.jpeg'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img className="card__img" src={userImage} alt="" />
        <main>
          <PersonInfo />
          <ContactButtons />
          <About />
          <Intersts />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
