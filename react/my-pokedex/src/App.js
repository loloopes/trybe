import './App.css';
import pokemons from './data';
import PokeCard from './Components/PokeCard'
import React from 'react';

class App extends React.Component {
  render () {
  return (
      <div className="App">
        { pokemons.map(({name, type, image, id, averageWeight}) => (
          <PokeCard
          key={ id }
          name={ name }
          type={ type }
          image={ image }
          averageWeight= {averageWeight}
          />
        ))
        }
      </div>
    );  
  }
}

export default App;
