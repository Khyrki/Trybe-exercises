import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        { pokemons.map((pokemon) => <Pokemon pokemon = { pokemon } key = { pokemon.id }/>) }
      </div>
    )
  }
}

export default Pokedex;
