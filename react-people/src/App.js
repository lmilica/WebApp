import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { Header } from "./Components/Header/Header";
import { Search } from './Components/Search/Search';
// import { Footer } from "./Components/Footer/Footer";
import { BitPeople } from "./Components/BitPeople/BitPeople";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      list: [],
      filteredList: []
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(list => this.setState({
        list: list.results,
        filteredList: list.results,
      }))
  }

  onUsersFilter = (filteredUsers) => {
    this.setState({ filteredList: filteredUsers })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search list={this.state.list} onFilter={this.onUsersFilter} />
        <BitPeople list={this.state.filteredList} />
      </div>
    );
  }
}

export default App;
