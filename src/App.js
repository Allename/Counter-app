import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      <h1 className='counter-label'>Count: {counter}</h1>

      <div className="button-container">
        <button onClick={() => {setCounter(counter + 1)}}>Increase</button>
        <button onClick={() => {setCounter(0)}} className='reset'>Reset</button>
        <button onClick={() => {
          if(counter === 0) {
            return;
          } else {
            setCounter(counter - 1)
          }
        }}>Decrease</button>
      </div>
    </div>
  );
}

export default App;