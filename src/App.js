import './App.css';
import Button from './components/button.component/button.component.jsx'
import Card from './components/card.component/card.component';

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="mainTextContainer">
        <div className="innerContainer">
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching sripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
      </div>
      <div className="inputContainer">
        <Button />
        <Card />
      </div>
      </div>
    </div>
  );
}

export default App;
