export default function OpenClosedSign({ isOpen }) {
  return (
    <div className={isOpen ? 'open' : 'closed'}>
      {
        isOpen
          ? <h3>We are Open!</h3>
          : <h3>We are closed! Go Away!</h3>
      }
    </div>
  );
}