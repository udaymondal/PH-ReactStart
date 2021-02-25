import logo from './logo.svg';
import './App.css';

function App() {
  var singer = 'Dr. King Vozed'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My heading</h1>
        <h5>testing cal:  {2+6}</h5>
        <p>My first react paragraph</p>
        <p>singer for to day {singer}</p>
      </header>
    </div>
  );
}

export default App;
