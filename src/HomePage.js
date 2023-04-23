import React, { useState } from 'react';
import { CustomButton } from './CustomButton';
import OpenClosedSign from './OpenClosedSign';
import AnimalList from './AnimalList';

export default function HomePage() {

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
            <CustomButton onClick={() => setWizardSize(wizardSize + 10)}>Gandalf hit the Balrog!</CustomButton>
            <CustomButton onClick={() => setWizardSize(wizardSize - 10)}>The Balrog hit Gandalf!</CustomButton>
          </div>
          <div className='competitor'>
            <p style={{ fontSize: `${monsterSize}px` }}>🧌</p>
            <CustomButton onClick={() => setMonsterSize(monsterSize + 10)}>The Balrog hit Gandalf!!</CustomButton>
            <CustomButton onClick={() => setMonsterSize(monsterSize - 10)}>Gandalf hit the Balrog!!</CustomButton>
          </div>
        </div>
        <OpenClosedSign isOpen={isOpen} />
        <CustomButton onClick={() => setIsOpen(!isOpen)}>Gandalf says</CustomButton>
        <div className='parade-button'>
          <AnimalList animals={animals} />
          <CustomButton onClick={handleElfClick}>Elf</CustomButton>
          <CustomButton onClick={handleWizardClick}>Wizard</CustomButton>
          <CustomButton onClick={handleTrollClick}>Troll</CustomButton>
          <CustomButton onClick={handleFairyClick}>Fairy</CustomButton>
          <CustomButton onClick={handleDelete}>Bye Bye</CustomButton>
        </div>
      </header>
    </div>
  );
}
