import React from 'react'
import { render, screen } from '@testing-library/react'
import Search from '../Components/Search'
import userEvent from '@testing-library/user-event'

describe('Search', () => {
  it('clicking on the checkboxes should fire off dispatch function', async () => {
    render(<Search />)
    const checkbox = screen.getByTestId('vegetarian')
    userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('Runs a full search by changing options multiple times', async () => {
    const newScreen = render(<Search />)
    const vegetarianCheckbox = newScreen.getByTestId('vegetarian')
    const veganCheckbox = newScreen.getByTestId('vegan')
    const treeNutCheckbox = newScreen.getByTestId('tree-nut-free')
    const highProtein = newScreen.getByTestId('highProtein')
    const input = newScreen.getByPlaceholderText('Chicken, rice')
    const submit = newScreen.getByTestId('submit')

    userEvent.click(vegetarianCheckbox)
    userEvent.click(veganCheckbox)
    expect(vegetarianCheckbox).toBeChecked()
    expect(veganCheckbox).toBeChecked()
    userEvent.click(veganCheckbox)
    expect(veganCheckbox).not.toBeChecked()

    userEvent.click(highProtein)
    userEvent.click(treeNutCheckbox)

    userEvent.click(input)
    userEvent.type(input, 'chicken, cheese, rice')
    userEvent.click(submit)

    expect(newScreen).toMatchSnapshot()
  })
})
