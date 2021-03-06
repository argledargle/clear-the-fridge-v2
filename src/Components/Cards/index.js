import React from 'react'
import Card from '../Card'

function Cards (props) {
  const recipeArray = props.recipes
  if (recipeArray.length === 0) {
    return (
      <div data-testid='errorMessage' className='max-w-lg mx-auto flex flex-col p-6 bg-gray-100 mt-10 rounded-lg shadow-md'>
        <h1 className='text-2xl text-blue-700 leading-tight'>
          Sorry. No results were found. :(
        </h1>
        <h2 className='text-lg text-blue-700 leading-tight'>
          Try changing your search terms or diet.
        </h2>
      </div>
    )
  }
  return (
    <div className='max-w-lg mx-auto flex flex-col mt-10'>
      {recipeArray.map((item, i) => {
        const recipe = item.recipe
        return <Card key={i} {...recipe} />
      })}
    </div>
  )
}
export default Cards
