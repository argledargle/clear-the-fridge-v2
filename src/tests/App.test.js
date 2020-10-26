/* global beforeAll, jest, afterAll, describe, test, it, expect */ // eslint-disable-line

import React from 'react'
import { render } from '@testing-library/react'
import App from '../Components/App'

test('renders the app', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Clear the Fridge/i)
  expect(linkElement).toBeInTheDocument()
})
