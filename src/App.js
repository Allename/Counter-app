import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1 className='counter-label'>Count: {counter}</h1>

      <div className="button-container">
        <button>Increase</button>
        <button className='reset'>Reset</button>
        <button>Decrease</button>
      </div>
    </div>
  );
}

export default App;