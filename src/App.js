import React from "react";
import NavBar from "./components/navbar/NavBar";
import './App.css';
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/RowPost/Rowpost";
import {originals, action, horror, comedy, documentaries, love} from './urls'


function App() {
  return (
    <div className="App">
      
      <Banner/>
      <NavBar/>
      <Rowpost url={originals} title='Netflix Originals' />
      <Rowpost url={action} title='Action Movies' isSmall />
      <Rowpost url={horror} title='Horror Movies' isSmall />
      <Rowpost url={love} title='Romance Movies' isSmall />
      <Rowpost url={comedy} title='Comedy Movies' isSmall />
      <Rowpost url={documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
