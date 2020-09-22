import React from 'react'

function Card (props) {
  const truncateIngredient = ingredient => {
    if (ingredient.length < 25) {
      return ingredient
    } else {
      const ingredientLine = ingredient.slice(0, 25)
      return ingredientLine.concat('...')
    }
  }
  const ingredientArray = props.ingredientLines.splice(0, 9)
  return (
    <div className='group flip h-64 min-w-full max-w-lg my-6 mx-auto'>
      <div className='flip-content min-h-full h-64 min-w-full max-w-lg relative group-hover:transformation rounded-lg shadow-md'>
        <div className='flip-card-front absolute min-h-full h-64 min-w-full max-w-lg bg-gray-100 rounded-lg shadow-md flex flex-row'>
          <img
            className='h-64 rounded-lg'
            src={props.image}
            alt={props.label}
          />
          <ul className='grid grid-cols-2 gid-row-5 gap-1 p-1 grid-flow-row max-w-md'>
            {ingredientArray.map((ingredient, i) => {
              return (
                <li className='text-sm text-left row-span-1' key={i}>
                  {truncateIngredient(ingredient)}
                </li>
              )
            })}
            {props.ingredientLines.length >= 9 ? (
              <li className='text-sm text-left row-span-1'>
                and {props.ingredientLines.length - 8} more ingredients...
              </li>
            ) : null}
          </ul>
        </div>
        <div className='flip-card-back absolute min-h-full min-w-full max-w-lg bg-gray-100 rounded-lg shadow-md'>
          <h1 className='text-xl text-blue-700 leading-tight'>
            <a href={props.url}>{props.label}</a>
          </h1>
          <h3>TODO: Map nutrition facts here</h3>
          {/* <ul className='grid grid-flow-row grid-cols-2 gap-1'>
            {ingredientArray.map((ingredient, i) => {
              return <li key={i}>{ingredient}</li>
            })}
            {props.ingredientLines.length >= 6 ? (
              <li>
                and {props.ingredientLines.length - 5} more ingredients...
              </li>
            ) : null}
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default Card
