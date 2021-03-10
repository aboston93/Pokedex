//Use axios calls to actaully populate the list 

import React, { Component } from 'react'
import axios from 'axios'

import PokemonCard from './PokemonCard'
//the insitial state is the original pokemon api list 
export default class PokemonList extends Component {
    state = {
        url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50",
        pokemon: null

    };
// the axios call gets the results through set state  
    async componentDidMount() {
        const res = await axios.get(this.state.url)
        this.setState({ pokemon: res.data['results'] })
    }
// each row a row of rendered pokemon cards 
    render() {
        return (
            <React.Fragment>
                {this.state.pokemon ? (
                    <div className="row ">
                        {this.state.pokemon.map(pokemon =>
                            (<PokemonCard 
                                key={pokemon.name}
                                name = {pokemon.name}
                                url={pokemon.url}
                            />
                            ))}
                    </div>
                    ) : (
                        // Shows up while the page is loading 
                    <h1>Identifying Pokemon</h1>
                    )}
            </React.Fragment>
        );
    }
}
