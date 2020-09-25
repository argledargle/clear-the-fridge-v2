import React from 'react'
import { ReactComponent as Logo } from '../../svg/external-link.svg'

function Card (props) {
  console.log(props)
  const truncateIngredient = ingredient => {
    if (ingredient.length < 25) {
      return ingredient
    } else {
      const ingredientLine = ingredient.slice(0, 25)
      return ingredientLine.concat('...')
    }
  }
  var ingredientListLength = 0
  window.screen.width < 639
    ? (ingredientListLength = 4)
    : (ingredientListLength = 9)
  const moreIngredients = props.ingredientLines.length - ingredientListLength
  const ingredientArray = props.ingredientLines.splice(0, ingredientListLength)
  return (
    <div className='group flip h-64 min-w-full max-w-lg my-6 mx-auto'>
      <div className='flip-content min-h-full h-64 min-w-full max-w-lg relative group-hover:transformation rounded-lg shadow-md'>
        <div className='flip-card-front absolute min-h-full h-64 min-w-full max-w-lg bg-gray-100 rounded-lg shadow-md flex flex-row'>
          <img
            className='h-64 rounded-lg'
            src={props.image}
            alt={props.label}
          />
          <ul className='grid sm:grid-cols-1 grid-cols-2 grid-rows-5 gap-1 p-1 grid-flow-row max-w-md'>
            {ingredientArray.map((ingredient, i) => {
              return (
                <li className='text-sm text-left row-span-1' key={i}>
                  {truncateIngredient(ingredient)}
                </li>
              )
            })}
            {moreIngredients > 0 ? (
              <li className='text-sm text-left row-span-1'>
                and {moreIngredients} more ingredients...
              </li>
            ) : null}
          </ul>
        </div>
        <div className='flip-card-back absolute min-h-full min-w-full max-w-lg bg-gray-100 rounded-lg shadow-md'>
          <h1 className='text-xl text-blue-700 leading-tight'>
            <a href={props.url} target='_blank' rel='noopener noreferrer'>
              {props.label} <Logo className='inline text-blue-700 mb-1' />
            </a>
          </h1>
          <div className='flex flex-col flex-wrap h-56'>
            <div class='Nutrition Facts' className='w-1/2'>
              Nutrition Facts
            </div>
            <div class='servings per container' className='w-1/2'>
              servings for container
            </div>
            <div class='Serving Size' className='w-1/2'>
              Serving size
            </div>
            <div class='Black Bar' className='w-1/2'></div>
            <div className='flex flex-row w-1/2'>
              <div className='flex flex-col'>
                <div class='Amount per Serving'>Amount Per Serving</div>
                <div class='Calories'>Calories</div>
              </div>
              <div class='Number'>Num</div>
            </div>
            <div class='% Daily Value' className='w-1/2'>
              % Daily Value
            </div>
            <div class='Saturated Fat (FATSAT)' className='w-1/2'>
              FATSAT g
            </div>
            <div class='Trans Fat (FATRN)' className='w-1/2'>
              FATRN g
            </div>
            <div class='Sodium (NA)' className='w-1/2'>
              NA mg
            </div>
            <div class='Total Carbs (CHOCDF)' className='w-1/2'>
              CHOCDF g
            </div>
            <div class='Total Sugars (SUGAR)' className='w-1/2'>
              SUGAR g
            </div>
            <div class='Protein (PROCNT)' className='w-1/2'>
              PROCNT g
            </div>
            <div class='Vitamin D (VITD)' className='w-1/2'>
              VITD æg
            </div>
            <div class='Calcium (CA)' className='w-1/2'>
              CA mg
            </div>
            <div class='Iron (FE)' className='w-1/2'>
              FE mg
            </div>
            <div class='Potassium (K)' className='w-1/2'>
              K mg
            </div>
            <div class='Vitamin B12 (VITB12)' className='w-1/2'>
              VITB12 æg
            </div>
            <div class='Fiber (FIBTG)' className='w-1/2'>
              FIBTG g
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
