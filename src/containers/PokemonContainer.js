import React, { Component } from 'react';
import PokemonSelector from '../components/PokemonSelector';

class PokemonContainer extends Component {
    constructor() {
        super();

        this.state = {
            pokemons: [],
            selectedPokemon: '',
        };
    }

    componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        fetch(url)
            .then(res => res.json())
            .then(pokemons => {
                const list = pokemons.results;
                list.forEach((pokemon, index) => {
                    pokemon.id = 1 + index;

                })
                this.setState({pokemons: list})
            })
            .catch(err => console.log(err));

    }

    render() {
        return (
            <>
                <h1>Pokemons!</h1>
                <PokemonSelector pokemons={this.state.pokemons} />
            </>
        );
    }
}

export default PokemonContainer;