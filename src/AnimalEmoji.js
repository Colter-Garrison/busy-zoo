export default function AnimalEmoji({ animal }) {
  return (
    <div>
      {animal === 'elf' && '🧝'}
      {animal === 'wizard' && '🧙‍♂️'}
      {animal === 'troll' && '🧌'}
      {animal === 'fairy' && '🧚'}
    </div>
  );
}