import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div div className="pokemon">
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img src={ image } alt='Pokémon icon' />
      </div>
    );
  }
}

export default Pokemon;
