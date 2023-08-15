import { render, screen } from '@testing-library/react';
import App from './App';

import BookForm from './BookForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders form elements', ()=>{
  render (<BookForm />)
  const resDate = screen.getByTestId('res-date');
  expect (resDate).toBeInTheDocument();

}

)