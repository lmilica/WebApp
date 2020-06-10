import React from 'react';
import { Header } from './Components/Header';
import { MainTittle } from './Components/MainTittle';
import { ListOfShows } from './Components/ListOfShows';


function App() {
  return (
    <div className="App">
      <Header />
      <MainTittle />
      <ListOfShows />
    </div>
  );
}

export default App;
