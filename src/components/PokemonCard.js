//styling the surrounding card as it should apper in the pokedex
// gonna use react router  styling to be determined

import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Sprite = styled.img`
width: 5em;
height: 6em;

`;


const PokeLink = styled(Link)`
hover: red;

`

//cute little sprite you see when you play actual size?



// all of the rendered info needs to be stored 

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ' ',
        imageLoading:true,
        toManyRequests:false
    }
    componentDidMount(){
        const { name, url } = this.props
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
        this.setState({
             name :name,
             imageUrl: imageUrl,
             pokemonIndex: pokemonIndex
        });
    
        }
        


        render(){

            return(
            <div>

            </div>

            )
        }
        }