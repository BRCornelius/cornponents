import './App.css';
import { DisplayButton } from './lib/components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <DisplayButton buttonLabel="Click Me"><h1>Sounds great</h1></DisplayButton>
    </div>
  );
}

export default App;
