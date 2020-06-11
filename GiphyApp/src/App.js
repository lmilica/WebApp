import React from 'react';
import { Search } from './Components/Header/Search/Search'
import { Header } from './Components/Header/Header';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { gifs: [] }
  }
  render() {
    return <div>
      <Header />
      <Search />

    </div>
  }




}



export default App;
