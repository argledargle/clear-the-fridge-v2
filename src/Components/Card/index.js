import React from 'react'

class Card extends React.Component {
  render () {
    return (
      <>
        <h1>Welcome to the card</h1>
        {console.log(this.props)}
      </>
    )
  }
}

export default Card
