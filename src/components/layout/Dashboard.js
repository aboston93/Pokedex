import React, { Component } from 'react'
import PokemonList from '../pokemon/PokemonList'




//rendering the actual list 

export default class Dashboard extends Component {
    render() {
        return (
            <div className = "row">
                <div className = "col">
                    <PokemonList/>
                    </div> 
                
            </div>
        )
    }
}
