import React from 'react';
import './App.css';
import pokemons from './data'
import Pokedex from './components/pokedex'

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <Pokedex pokemons ={ pokemons }/>
    </div>
  );
}

export default App;
