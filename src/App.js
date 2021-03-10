import React from 'react';
import NavBar from './components/layout/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/layout/Dashboard'
import Pokemon from './components/pokemon/Pokemon'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//call using the path fed from the dashboarded
//
function App() {
  return (
    <Router>
    <div className="App">
       <NavBar/><div className="container">
         <Switch>
          
           <Route exact path="/" component={Dashboard}/>
           
           <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        
         </Switch>
       </div>
    </div>
    </Router> 
  );
}

export default App;
