import { Component } from 'react';
import Pokemon from './Pokemon'

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <>
        <img id="img-pokedex" src="https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg" alt="Pokedex" />
        <div id="pokedex">
          { pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={ pokemon } />) }
        </div>
      </>
    )
  }
}

export default Pokedex;
