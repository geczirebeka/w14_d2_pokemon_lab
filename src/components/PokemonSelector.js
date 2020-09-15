import React from 'react';

const PokemonSelector = (props) => {

    const options = props.pokemons.map((pokemon) => {
        return (
            <option key={pokemon.id} value={pokemon.id}>{pokemon.name}</option>
        );
    });

    return (
        <select>
            <option disabled value="default">Choose a Pokemon...</option>
            {options}
        </select>
    )
}

export default PokemonSelector;