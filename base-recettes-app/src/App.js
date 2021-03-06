import React, { Component } from 'react'
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'
import recettes from './recettes'

// CSS
import './App.css'

import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  chargerExemple = () => this.setState({ recettes })

  ajouterRecette = recette => {
    const recettes = { ... this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes })
  }

  modifierRecette = (key, recette) => {
    const recettes = { ... this.state.recettes }
    recettes[key] = recette
    this.setState({ recettes })
  }

  supprimerRecette = key => {
    const recettes = { ... this.state.recettes }
    recettes[key] = null
    this.setState({ recettes })
  }

  render() {
    const cards = Object.keys(this.state.recettes)
      .map(key => <Card
        key={key}
        details={this.state.recettes[key]} />)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <div className='cards'>
          {cards}
        </div>
        <Admin
          pseudo={this.props.pseudo}
          recettes={this.state.recettes}
          supprimerRecette={this.supprimerRecette}
          ajouterRecette={this.ajouterRecette}
          modifierRecette={this.modifierRecette}
          chargerExemple={this.chargerExemple} />
      </div>
    )
  }
}

export default App
