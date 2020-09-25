import React from 'react';
import { render } from '@testing-library/react';
import App from '../Components/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Clear the Fridge/i);
  expect(linkElement).toBeInTheDocument();
});
