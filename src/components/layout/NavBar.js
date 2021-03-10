import React, { Component } from 'react';



// allows the user to get back to the list of pokemon
// navigation by pokemon region 
export default class NavBar extends Component {
    render() {
        return (
            <div>
               <nav className = "navbar navbar-expand-md navbar-dark bg-red fixed-top">
                   <a href =" " className = "navbar-brand col-sm-3 col-md-2 mz-0 align-items-center">Pokedex
                   </a>
                   </nav> 
            </div>
        )
    }
}
