import React from 'react'
import ReactCardFlip from 'react-card-flip'

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isFlipped: false,
      ...props
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render () {
    return (
      <ReactCardFlip>
        <div className='max-w-lg flex p-6 bg-gray-100 my-10 rounded-lg shadow-md mx-auto' onClick={this.handleClick}>
          <div className='pt-1'>
            <h1 className='text-xl text-blue-700 leading-tight'>
              {this.props.label}
            </h1>
            <ul>
              {this.props.ingredientLines.map((ingredient, i) => {
                return <li key={i}>{ingredient}</li>
              })}
            </ul>
            {console.log(this.props)}
          </div>
        </div>
        <div onClick={this.handleClick}>Back of card</div>
      </ReactCardFlip>
    )
  }
}

export default Card
