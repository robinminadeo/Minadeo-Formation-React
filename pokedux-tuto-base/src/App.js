import React, { useEffect } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import { CLICK, showPokemonAction, catchPokemonAction } from './store/action'
import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import fetchPokemons from './store/fetchPokemons';
import Loader from './components/loader'
const App = ({ fetchPokemons, pending, showPokemon, pokemons, catchPokemon }) => {

  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  if (pending) {
    return <Loader />
  }

  return (
    <div className="App">
      <GameBoy showPokemon={() => showPokemon(pokemons)}
        catchPokemon={catchPokemon} />
      <PokeList />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    click: () => dispatch({ type: CLICK }),
    fetchPokemons: () => dispatch(fetchPokemons()),
    showPokemon: pokemons => dispatch(showPokemonAction(pokemons)),
    catchPokemon: () => dispatch(catchPokemonAction())
  }
}

const mapStateToProps = ({ pending, pokemons }) => {
  return {
    pending,
    pokemons
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
