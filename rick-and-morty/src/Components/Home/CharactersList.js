import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CharacterList.css";
import { Characters } from "../services/Characters";
import { Character } from "../entities/Character";

export class CharactersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { characters: [] };
  }

  renderCharacters() {
    return this.state.characters.map((character, i) => {
      return (
        <Character key={i} image={character.image} title={character.name} />
      );
    });
  }

  componentDidMount() {
    const chars = new Characters();

    chars.get().then((data) => {
      this.setState({ characters: data.data.results });
    });
  }

  render() {
    return <div className="List__main">{this.renderCharacters()}</div>;
  }
}
