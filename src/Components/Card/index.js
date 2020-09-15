import React from 'react'

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isFlipped: false,
      ...props
    }
  }

  //   render () {
  //     return (
  //       <div className='max-w-lg flex p-6 bg-gray-100 my-10 rounded-lg shadow-md mx-auto'>
  //         <div className='pt-1'>
  //           <h1 className='text-xl text-blue-700 leading-tight'>
  //             {this.props.label}
  //           </h1>
  //           <ul>
  //             {this.props.ingredientLines.map((ingredient, i) => {
  //               return <li key={i}>{ingredient}</li>
  //             })}
  //           </ul>
  //           {console.log(this.props)}
  //         </div>
  //         <div className='pt-1'>
  //           <h1 className='text-xl text-blue-700 leading-tight'>
  //             Back of card.
  //           </h1>
  //         </div>
  //       </div>
  //     )
  //   }
  // }

  render () {
    return (
      <div className='group flip h-64 min-w-full max-w-lg my-6 mx-auto'>
        <div className='flip-content min-h-full h-64 min-w-full max-w-lg relative group-hover:transformation rounded-lg shadow-md'>
          <div className='flip-card-front absolute min-h-full h-64 min-w-full max-w-lg bg-gray-100 rounded-lg shadow-md'>
            <img className='mx-auto' src={this.props.image} alt={this.props.label}/>
          </div>
          <div className='flip-card-back absolute min-h-full min-w-full max-w-lg bg-gray-100 rounded-lg shadow-md'>
            <h1 className='text-xl text-blue-700 leading-tight'>
              {this.props.label}
            </h1>
            <ul className='grid grid-flow-row grid-cols-2 gap-1'>
              {this.props.ingredientLines.map((ingredient, i) => {
                return <li key={i}>{ingredient}</li>
              })}
            </ul>
            {console.log('recipe: ', this.props)}
          </div>
        </div>
      </div>
    )
  }
}

export default Card
