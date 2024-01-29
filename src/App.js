import './App.css';
import CompA from './components/CompA';

function App() {
  const name = "Kaushal"
  return (
    <div className="App">
      <h1>Lets Start</h1>
      <CompA value={name} />
    </div>
  );
}

export default App;
