import React, { useState, useReducer } from 'react'
import _pull from 'lodash/pull'

const url = 'https://api.edamam.com/search?'
const appId = process.env.REACT_APP_APPID
const appKey = process.env.REACT_APP_API_KEY

const dietArray = [
  {
    name: 'Vegan',
    value: 'vegan'
  },
  {
    name: 'Vegetarian',
    value: 'vegetarian'
  },
  {
    name: 'Sugar Conscious',
    value: 'sugar-conscious'
  },
  {
    name: 'Peanut Free',
    value: 'peanut-free'
  },
  {
    name: 'Tree-nut Free',
    value: 'tree-nut-free'
  },
  {
    name: 'Alcohol Free',
    value: 'alcohol-free'
  }
]

const Search = ({ callback }) => {
  const [input, setInput] = useState(undefined)

  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    })

  const [checkedDietArray, dispatch] = useReducer(
    (checkedDietArray, { type, value }) => {
      switch (type) {
        case 'add':
          return [...checkedDietArray, value]
        case 'remove':
          return _pull(checkedDietArray, value)
        default:
          return checkedDietArray
      }
    },
    []
  )

  function buildSearchQuery (e) {
    e.preventDefault()
    if (
      input === undefined ||
      input.textInput === undefined ||
      input.textInput === ''
    ) {
      // eslint-disable-next-line no-undef
      alert('You need to enter something into the text field.')
      return null
    }
    const searchUrl = formatQueryParams(input)
    getResults(searchUrl)

    return formatQueryParams(input)
  }

  function getResults (url) {
    // eslint-disable-next-line no-undef
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
  }

  function formatQueryParams (params) {
    const healthQuery = checkedDietArray
      .map(item => {
        return `health=${item}&`
      })
      .toString()
    const queryStringComponents = {
      app_key: appKey,
      app_id: appId
    }

    if (params.textInput !== '' || params.textInput !== undefined) {
      queryStringComponents.q = params.textInput
    }

    if (params.dietInput !== '' && params.dietInput !== undefined) {
      queryStringComponents.diet = params.dietInput
    }

    const queryString = Object.keys(queryStringComponents)
      .map(key => `${key}=${queryStringComponents[key]}`)
      .join('&')
    const newUrl = url + healthQuery + queryString
    return newUrl
  }

  return (
    <div className='max-w-lg flex p-6 bg-gray-100 mt-10 rounded-lg shadow-md mx-auto'>
      <div className='pt-1'>
        <h1 className='text-xl text-blue-700 leading-tight'>
          What do you want to use up?
        </h1>
        <p className='text-base text-gray-700 leading-normal'>
          Type in the ingredients you're looking to clear out from your kitchen,
          select a diet and click search.
        </p>
        <form className='mx-auto'>
          <div className='flex flex-row justify-between'>
            <input
              className='rounded-sm border border-gray-600'
              name='textInput'
              type='text'
              placeholder='Chicken, rice'
              id='search-term'
              required
              onChange={handleInputChange}
            />
            <select
              className='rounded-sm border-gray-600 border'
              name='dietInput'
              onChange={handleInputChange}
            >
              <option value='' defaultValue>
                Diet
              </option>
              <option value='balanced'>Balanced</option>
              <option value='high-protein'>High-Protein</option>
              <option value='low-carb'>Low-Carb</option>
              <option value='low-fat'>Low-Fat</option>
            </select>
            <input
              type='submit'
              value='Search'
              className='rounded-sm border-gray-600 border'
              onClick={buildSearchQuery}
            />
          </div>
          <fieldset>
            <legend className='text-lg'>Optional health choices:</legend>
            <div className='grid grid-flow-col grid-cols-2 grid-rows-3'>
              {dietArray.map(item => {
                return (
                  <div className='inline' key={item.value}>
                    <input
                      className='mx-1'
                      type='checkbox'
                      name={item.value}
                      value={item.value}
                      id={item.value}
                      onChange={() =>
                        dispatch({
                          type: checkedDietArray.includes(item.value)
                            ? 'remove'
                            : 'add',
                          value: item.value
                        })}
                    />
                    <label
                      className='text-base text-gray-700 leading-normal'
                      htmlFor={item.value}
                    >
                      {item.name}
                    </label>
                  </div>
                )
              })}
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Search
