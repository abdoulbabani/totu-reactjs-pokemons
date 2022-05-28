import React, { FunctionComponent } from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PokemonList from "./pages/pokemon-list";
import PokemonsDetail from "./pages/pokemon-details"
import PageNotFound from "./pages/page-not-found";

const App: FunctionComponent = () => {

 return (
  <Router>
    <div>
  {/* la barre de navigation commun a toutes les pages*/}
  <nav>
    <div className="nav-wrapper teal">
      <Link to={"/"} className="brand-logo center">Pokédex</Link>
    </div>
  </nav>
    <Switch>
      <Route exact path={"/"} component={PokemonList}/>
      <Route exact path={"/pokemons"} component={PokemonList}/>
      <Route path={"/pokemons/:id"} component={PokemonsDetail}/>
      <Route component={PageNotFound}/>
    </Switch>
  
  </div>
   </Router>
 )

};

export default App;
