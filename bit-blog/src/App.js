import React from "react";
import { NavRouter } from "./Components/Entities/NavRouter";
import { AuthorsList } from "./Components/Authors/AuthorsList";
import { About } from "./Components/Entities/About";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavRouter />
        <Switch>
          <Route exact path="/authors" component={AuthorsList} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
