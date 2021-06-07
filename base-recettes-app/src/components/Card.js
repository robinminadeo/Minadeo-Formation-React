import React, { Component } from 'react'

export default class Card extends Component {
    requireImage = image => {
        try {
            return require(`../img/${image}`)
        } catch (err) {
            return require(`../img/default.jpeg`)
        }

    }

    render() {
        const { details } = this.props
        const ingredients = details.ingredients.split(',').map(item => <li key={item}>{item}</li>)
        const instructions = details.instructions.split('\n').map(item => <li key={item}>{item}</li>)

        return (
            <div className='card'>
                <div className='image'>
                    <img src={this.requireImage(details.image)} alt={details.nom} />
                </div>
                <div className='recette'>
                    <h2>{details.nom}</h2>
                    <ul className='liste-ingredients'>
                        {ingredients}
                    </ul>
                    <ol className='liste-instructions'>
                        {instructions}
                    </ol>
                </div>
            </div>
        )
    }
}
