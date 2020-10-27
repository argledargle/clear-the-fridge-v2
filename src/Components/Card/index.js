import React from 'react'
import { ReactComponent as Logo } from '../../svg/external-link.svg'

const Card = props => {
  const truncateText = (ingredient, length) => {
    if (ingredient.length < length) {
      return ingredient
    } else {
      const ingredientLine = ingredient.slice(0, length)
      return ingredientLine.concat('...')
    }
  }
  const caloriesPerServing = props.calories / props.yield
  const ingredientListLength = window.screen.width < 639 ? 4 : 9
  const moreIngredients = props.ingredientLines.length - ingredientListLength
  const ingredientArray = props.ingredientLines.slice(0, ingredientListLength)

  return (
    <div data-testid='cardComponent' className='group flip h-64 min-w-full max-w-lg my-6 mx-auto'>
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
                  {truncateText(ingredient, 25)}
                </li>
              )
            })}
            {moreIngredients > 0 ? (
              <li data-testid='extraIngredients' className='text-sm text-left row-span-1'>
                and {moreIngredients} more ingredients...
              </li>
            ) : null}
          </ul>
        </div>
        <div className='flip-card-back absolute min-h-full min-w-full max-w-lg bg-gray-100 rounded-lg shadow-md'>
          <label className='text-xl text-blue-700 leading-tight'>
            <a href={props.url} target='_blank' rel='noopener noreferrer'>
              {truncateText(props.label, 35)}
              <Logo className='inline text-blue-700 mb-1' />
            </a>
          </label>
          <div className='flex flex-col flex-wrap h-56 pt-1 text-left pl-8 sm:pl-.8'>
            <div className='w-5/12 sm:w-45'>
              <h1 className='text-xl font-extrabold border-b border-black leading-none'>
                Nutrition Facts
              </h1>
            </div>
            <div className='text-xs border-b-8 border-black w-5/12 sm:w-45'>
              Serves about {props.yield}
            </div>
            <div className='flex flex-row w-5/12 sm:w-45 justify-between border-b border-black'>
              <div className='flex flex-col'>
                <p className='text-xs font-extrabold'>Amount Per Serving</p>
                <p className='text-lg font-extrabold leading-none'>Calories</p>
              </div>
              <p className='text-3xl self-end font-extrabold leading-none'>
                {Math.round(caloriesPerServing)}
              </p>
            </div>
            <p className='w-5/12 sm:w-45 text-right text-xs font-extrabold border-b border-black'>
              % Daily Value<span className='text-sm'>*</span>
            </p>
            <p className='w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs'>
              <span>
                <span className='font-extrabold'>Total Fat</span>{' '}
                {Math.round(props.totalNutrients.FAT?.quantity / props.yield)}
                {props.totalNutrients.FAT?.unit}
              </span>
              <span>
                {Math.round(props.totalDaily.FAT?.quantity / props.yield)}
                {props.totalDaily.FAT?.unit}
              </span>
            </p>
            <p className='w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs pl-2'>
              <span>
                <span className='italic'>Saturated fat</span>{' '}
                {Math.round(props.totalNutrients.FASAT?.quantity / props.yield)}
                {props.totalNutrients.FASAT?.unit}
              </span>
              <span>
                {Math.round(props.totalDaily.FASAT?.quantity / props.yield)}
                {props.totalDaily.FASAT?.unit}
              </span>
            </p>
            <p className='w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs pl-2'>
              <span>
                <span className='italic'>Trans fat</span>{' '}
                {Math.round(props.totalNutrients.FATRN?.quantity / props.yield)}
                {props.totalNutrients.FATRN?.unit}
              </span>
            </p>
            <p className='w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs'>
              <span>
                <span className='font-extrabold'>Sodium</span>{' '}
                {Math.round(props.totalNutrients.NA?.quantity / props.yield)}
                {props.totalNutrients.NA?.unit}
              </span>
              <span>
                {Math.round(props.totalDaily.NA?.quantity / props.yield)}
                {props.totalDaily.NA?.unit}
              </span>
            </p>
            <p className='w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs'>
              <span>
                <span className='font-extrabold'>Total Carbohydrate</span>{' '}
                {Math.round(
                  props.totalNutrients.CHOCDF?.quantity / props.yield
                )}
                {props.totalNutrients.CHOCDF?.unit}
              </span>
              <span>
                {Math.round(props.totalDaily.CHOCDF?.quantity / props.yield)}
                {props.totalDaily.CHOCDF?.unit}
              </span>
            </p>
            <p className='w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs pl-2'>
              <span>
                <span className='italic'>Total Fiber</span>{' '}
                {Math.round(props.totalNutrients.FIBTG?.quantity / props.yield)}
                {props.totalNutrients.FIBTG?.unit}
              </span>
              <span>
                {Math.round(props.totalDaily.FIBTG?.quantity / props.yield)}
                {props.totalDaily.FIBTG?.unit}
              </span>
            </p>
            <p className='w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs pl-2 leading-5'>
              <span>
                <span className='italic'>Total Sugars</span>{' '}
                {Math.round(props.totalNutrients.SUGAR?.quantity / props.yield)}
                {props.totalNutrients.SUGAR?.unit}
              </span>
            </p>
            <p className='w-5/12 sm:w-45 flex flex-row justify-between border-b-8 border-black text-xs'>
              <span>
                <span className='font-extrabold'>Protein</span>{' '}
                {Math.round(
                  props.totalNutrients.PROCNT?.quantity / props.yield
                )}
                {props.totalNutrients.PROCNT?.unit}
              </span>
            </p>
            <p className='w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs'>
              <span>
                <span>Vitamin D</span>{' '}
                {Math.round(props.totalNutrients.VITD?.quantity / props.yield)}
                {props.totalNutrients.VITD?.unit}
              </span>
              <span>
                {Math.round(props.totalDaily.VITD?.quantity / props.yield)}
                {props.totalDaily.VITD?.unit}
              </span>
            </p>
            <p className='w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs'>
              <span>
                <span>Calcium</span>{' '}
                {Math.round(props.totalNutrients.CA?.quantity / props.yield)}
                {props.totalNutrients.CA?.unit}
              </span>
              <span>
                {Math.round(props.totalDaily.CA?.quantity / props.yield)}
                {props.totalDaily.CA?.unit}
              </span>
            </p>
            <p className='w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs'>
              <span>
                <span>Iron</span>{' '}
                {Math.round(props.totalNutrients.FE?.quantity / props.yield)}
                {props.totalNutrients.FE?.unit}
              </span>
              <span>
                {Math.round(props.totalDaily.FE?.quantity / props.yield)}
                {props.totalDaily.FE?.unit}
              </span>
            </p>
            <p className='w-5/12 sm:w-45 flex flex-row justify-between border-b border-black text-xs'>
              <span>
                <span>Potassium</span>{' '}
                {Math.round(props.totalNutrients.K?.quantity / props.yield)}
                {props.totalNutrients.K?.unit}
              </span>
              <span>
                {Math.round(props.totalDaily.K?.quantity / props.yield)}
                {props.totalDaily.K?.unit}
              </span>
            </p>
            <p className='text-xxs w-5/12 sm:w-45'>
              *The % Daily Value (DV) tells you how much a nutrient in a serving
              of food contributes to a daily diet. 2,000 calories a day is used
              for general nutrition advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
