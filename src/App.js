import { useState } from 'react';
import './App.css';


function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [animals, setAnimals] = useState(['dog', 'crocodile', 'rat', 'bear']);
  const [unicornSize, setUnicornSize] = useState(20);
  const [lionSize, setLionSize] = useState(20);
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='fight'>
          <div className='competitor'>
            <p style={{ fontSize: `${unicornSize}px` }}>🦄</p>
            <button onClick={() => setUnicornSize(unicornSize + 10)}>Grow Unicorn</button>
            <button onClick={() => setUnicornSize(unicornSize - 10)}>Shrink Unicorn</button>
          </div>
          <div className='competitor'>
            <p style={{ fontSize: `${lionSize}px` }}>🦁</p>
            <button onClick={() => setLionSize(lionSize + 10)}>Grow Lion</button>
            <button onClick={() => setLionSize(lionSize - 10)}>Shrink Lion</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
