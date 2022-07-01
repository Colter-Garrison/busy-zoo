export default function OpenClosedSign({ isOpen }) {
  return (
    <div className={isOpen ? 'open' : 'closed'}>
      {
        isOpen
          ? <h3>Speak Friend and Enter!</h3>
          : <h3>Fly You Fools!</h3>
      }
    </div>
  );
}