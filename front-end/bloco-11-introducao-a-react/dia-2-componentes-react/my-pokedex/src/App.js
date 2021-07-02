import { Component } from 'react';
import Header from './components/Header';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Pokedex pokemons={pokemons} />
        <Footer />
      </div>
    );
  }
}

export default App;
