import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const meuApp = render( <App />);
  const likeElement = meuApp.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
