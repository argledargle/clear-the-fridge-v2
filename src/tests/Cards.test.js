import React from 'react'
import { render } from '@testing-library/react'
import Cards from '../Components/Cards'
import resultsArray from './mock-data/cards.json'

describe('cards', () => {
  it('should load an error message if it receives an empty array', () => {
    const emptyArray = []
    const cards = render(<Cards recipes={emptyArray} />)
    const erorrMessage = cards.getByTestId('errorMessage')
    expect(erorrMessage).toBeInTheDocument()
  })

  it('should load cards from an array', () => {
    const app = render(<Cards recipes={resultsArray} />)
    const cards = app.getAllByTestId('cardComponent')
    expect(cards.length).toEqual(resultsArray.length)
  })
})
