import React from 'react'
import { render } from '@testing-library/react'
import cardData from './mock-data/card.json'
import ShortCard from './mock-data/shortCard.json'
import Card from '../Components/Card'

describe('Card tests', () => {
  it('with enough ingredients. it should render the extra ingredients text', () => {
    const card = render(<Card {...cardData} />)
    expect(card.getByTestId('extraIngredients')).toBeInTheDocument()
  })
  it('with a small amount of ingredients, it should not render extra ingredients text', () => {
    const card = render(<Card {...ShortCard} />)
    expect(card.queryByTestId('extraIngredients')).not.toBeInTheDocument()
  })
})
