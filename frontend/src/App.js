import React from "react";
import NavBar from './components/navBar/navBar'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import createPet from "./components/createPet/createPet";
import pets from "./components/createPet/pets";


function App() {
    return(
      <div>
        <Router>
        <NavBar/>
        <section>
          <Switch>
           
            <Route path = "/create-pets" component ={createPet}/>
            <Route path = "/pets" component ={pets}/>
           
          </Switch>
        </section>
        </Router>
      </div>
    );
  }

export default App;
