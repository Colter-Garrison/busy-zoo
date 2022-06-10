import { useState } from 'react';
import './App.css';
import OpenClosedSign from './OpenClosedSign';
import AnimalList from './AnimalList';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [animals, setAnimals] = useState(['dog', 'crocodile', 'rat', 'bear']);
  const [unicornSize, setUnicornSize] = useState(20);
  const [lionSize, setLionSize] = useState(20);
  
  function handleDogClick() {
    animals.push('dog');
    setAnimals(animals.slice());
  }

  function handleCrocodileClick() {
    animals.push('crocodile');
    setAnimals(animals.slice());
  }

  function handleRatClick() {
    animals.push('rat');
    setAnimals(animals.slice());
  }

  function handleBearClick() {
    animals.push('bear');
    setAnimals(animals.slice());
  }

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
        <OpenClosedSign isOpen={isOpen} />
        <button onClick={() => setIsOpen(!isOpen)}>Toggle Zoo</button>
        <AnimalList animals={animals} />
        <button onClick={handleDogClick}>Dog</button>
        <button onClick={handleCrocodileClick}>Crocodile</button>
        <button onClick={handleRatClick}>Rat</button>
        <button onClick={handleBearClick}>Bear</button>
      </header>
    </div>
  );
}

export default App;
