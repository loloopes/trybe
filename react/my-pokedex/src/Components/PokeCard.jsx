import React from 'react';
import PropTypes from 'prop-types'

class PokeCard extends React.Component {
  render () {
    const {name, type, image, averageWeight} = this.props
    
    return (
      <div className="poke-card">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div>
          <img src={image} alt="Pokephoto"></img>
        </div>
      </div>
    )
  }
}

export default PokeCard;

PokeCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string, 
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }),
  image: PropTypes.string, 
}