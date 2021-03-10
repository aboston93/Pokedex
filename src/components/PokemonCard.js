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
        


        render() {
        


            return (
                <div className=" col-md-3 col-sm-6 mb-5">
                    <PokeLink to = {`pokemon/${this.state.pokemonIndex}`}>
                    <div className=" card">
                        <h5 className=" card-header">{this.state.pokemonIndex}</h5>
                        <Sprite className = "card-img-top rounded mx-auto mt-2" 
                        src={this.state.imageUrl}
                        onLoad={() => this.setState({imageLoading: false})}
                        onError={() => this.setState({toManyRequests: true})}
                        />
    
                        
                        <div className="card-body mx-auto ">
                            <h6 className="card-title">{this.state.name.toLowerCase().split(" ").map(letter => letter.charAt(0).toUpperCase()+letter.substring(1)).join("")}</h6>
                        </div>
                    </div>
                    </PokeLink>
                </div>
    
            )
        }
    }
    