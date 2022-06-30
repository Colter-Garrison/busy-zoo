import { useState } from 'react';
import './App.css';
import OpenClosedSign from './OpenClosedSign';
import AnimalList from './AnimalList';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [animals, setAnimals] = useState(['elf', 'wizard', 'troll', 'fairy']);
  const [wizardSize, setWizardSize] = useState(40);
  const [monsterSize, setMonsterSize] = useState(40);
  
  function handleElfClick() {
    animals.push('elf');
    setAnimals(animals.slice());
  }

  function handleWizardClick() {
    animals.push('wizard');
    setAnimals(animals.slice());
  }

  function handleTrollClick() {
    animals.push('troll');
    setAnimals(animals.slice());
  }

  function handleFairyClick() {
    animals.push('fairy');
    setAnimals(animals.slice());
  }

  function handleDelete() {
    animals.pop();
    setAnimals(animals.slice());
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='fight'>
          <div className='competitor'>
            <p style={{ fontSize: `${wizardSize}px` }}>🧙‍♂️</p>
            <button onClick={() => setWizardSize(wizardSize + 10)}>Gandalf hit the Balrog!</button>
            <button onClick={() => setWizardSize(wizardSize - 10)}>The Balrog hit Gandalf!</button>
          </div>
          <div className='competitor'>
            <p style={{ fontSize: `${monsterSize}px` }}>🧌</p>
            <button onClick={() => setMonsterSize(monsterSize + 10)}>The Balrog hit Gandalf!!</button>
            <button onClick={() => setMonsterSize(monsterSize - 10)}>Gandalf hit the Balrog!!</button>
          </div>
        </div>
        <OpenClosedSign isOpen={isOpen} />
        <button onClick={() => setIsOpen(!isOpen)}>Gandalf says</button>
        <div className='parade-button'>
          <AnimalList animals={animals} />
          <button onClick={handleElfClick}>Elf</button>
          <button onClick={handleWizardClick}>Wizard</button>
          <button onClick={handleTrollClick}>Troll</button>
          <button onClick={handleFairyClick}>Fairy</button>
          <button onClick={handleDelete}>Bye Bye</button>
        </div>
      </header>
    </div>
  );
}

export default App;