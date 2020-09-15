import React from 'react'
import Card from '../Card'

//TODO: uninstall styled-components

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = { ...props }
  }
  render () {
    const recipeArray = this.state.recipes

    if (this.props.length === 0) {
      return (
        <div className='max-w-lg mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-md'>
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
      <div>
        {recipeArray.map((item, i) => {
          const recipe = item.recipe
          console.log('recipe: ', recipe)
          return <Card key={i} {...recipe} />
        })}
      </div>
    )
  }
}
export default Main
