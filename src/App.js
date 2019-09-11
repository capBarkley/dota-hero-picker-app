import React, {Component} from 'react';
import HeroList from './components/HeroList';
import SearchBox from './components/SearchBox'
import {heroes} from 'dotaconstants';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      searchField: ''
    }
  }

  componentDidMount() {
    let listOfHeroes = Object.keys(heroes).map(key => {
      return heroes[key];
    });
    this.setState({
      heroes: listOfHeroes
    });
  }

  render(){
    const {heroes} = this.state;
    return !heroes.length ? <h2 className='tc'>Loading</h2>
      :
      (
        <>
          <SearchBox/>
          <HeroList
            heroes={heroes}
            attr='str'/>
          <HeroList
            heroes={heroes}
            attr='agi'/>
          <HeroList
            heroes={heroes}
            attr='int'/>
        </>
      );
  }
}

export default App;
