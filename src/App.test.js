import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('if user clicks troll it will grow', () => {
  render(<App />);
  const linkElement = screen.getByText(/The Balrog hit Gandalf!!/i);
  expect(linkElement).toBeInTheDocument();
});

test('if user clicks on the Elf button, there should be one more Elf on the screen', () => {
  render(<App />);
  const elfElement = screen.getAllByText(/🧝/i);
  expect(elfElement.length).toBe(1);
  const elfButton = screen.getByText(/Elf/i);
  fireEvent.click(elfButton);
  const elfAfterClick = screen.getAllByText(/🧝/i);
  expect(elfAfterClick.length).toBe(2);
});

test('if user clicks on the Wizard button, there should be one more Wizard on the screen', () => {
  render(<App />);
  const wizardElement = screen.getAllByText(/🧙‍♂️/i);
  expect(wizardElement.length).toBe(2);
  const wizardButton = screen.getByText(/Wizard/i);
  fireEvent.click(wizardButton);
  const wizardAfterClick = screen.getAllByText(/🧙‍♂️/i);
  expect(wizardAfterClick.length).toBe(3);
});