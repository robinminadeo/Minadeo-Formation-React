import React, { Component } from 'react'

export default class Header extends Component {

    formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`

    render() {

        const { pseudo } = this.props

        return (
            <header>
                <h1>La boite à recettes {this.formatPseudo(pseudo)}</h1>
            </header>
        )
    }
}
