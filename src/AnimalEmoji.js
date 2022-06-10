export default function AnimalEmoji({ animal }) {
  return (
    <div>
      {animal === 'dog' && '🐕'}
      {animal === 'crocodile' && '🐊'}
      {animal === 'rat' && '🐀'}
      {animal === 'bear' && '🐻'}
    </div>
  );
}