import React from 'react'
import Search from '../Search'
import Cards from '../Cards'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = { searchResults: null }
  }

  searchResults = value => {
    this.setState({ searchResults: value })
  }

  render () {
    return (
      <div className='bg-gray-100'>
        <div className='max-w-lg mx-auto flex p-6 mt-10 rounded-lg shadow-md'>
          <div className='pt-1'>
            <h1 className='text-2xl text-blue-700 leading-tight'>
              Clear the Fridge
            </h1>
            <p className='text-base text-gray-700 leading-normal'>
              A project to help you get the most of whatever you have in your
              fridge or pantry
            </p>
          </div>
        </div>
        <Search callback={this.searchResults} />
        {this.state.searchResults !== null ? (
          <Cards recipes={this.state.searchResults.hits} />
        ) : null}
      </div>
    )
  }
}

export default Main
