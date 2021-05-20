import logo from './logo.svg';
import './App.css'; 
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <Button soundSrc="./sounds/aye_sir.mp3" name="AYE SIR" />
            <Button soundSrc="./sounds/dont.mp3" name="DON'T" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
