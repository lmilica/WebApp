import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Components/Header/Header";
import { CharactersList } from "./Components/Home/CharactersList";

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <CharactersList />
      </div>
    );
  }
}

export default App;
