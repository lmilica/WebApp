import Axios from "axios";

export class Characters {
  get() {
    return Axios.get(`https://rickandmortyapi.com/api/character/`);
  }
}
