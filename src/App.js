import React, {Component} from 'react';
import HeroList from './components/HeroList';
import {heroes} from 'dotaconstants';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: []
    }
  }

  componentDidMount() {
    let listOfHeroes = Object.keys(heroes).map(key => {
      return heroes[key];
    });
    this.setState({heroes: listOfHeroes});
  }

  render(){
    const {heroes} = this.state;
    return !heroes.length ? <h2 className='tc'>Loading</h2>
      :
      (
        <HeroList heroes={heroes}/>
      );
  }
}

export default App;
