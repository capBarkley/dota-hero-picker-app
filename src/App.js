import React, {Component} from 'react';
import HeroList from './components/HeroList';
import SearchBox from './components/SearchBox'
import {heroes, hero_abilities, abilities} from 'dotaconstants';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      heroesAbil: [],
      abilities: []
    }
  }

  componentDidMount() {
    let listOfHeroes = Object.keys(heroes).map(key => {
      return heroes[key];
    });
    // let listOfHeroesAbil = Object.keys(hero_abilities).map(key => {
    //   return hero_abilities[key];
    // });
    // let listOfAbilities = Object.keys(abilities).map(key => {
    //   return abilities[key];
    // });
    this.setState({
      heroes: listOfHeroes
      // heroesAbil: listOfHeroesAbil,
      // abilities: listOfAbilities
    });
  }

  handleCheckChange = () => {
    let arrOfAbilities = [];
    arrOfAbilities.push($('input:checked').map(function() {
        return this.value;
      })
      .get());
    this.setState({abilities: arrOfAbilities});
  }

  render(){
    const {heroes, abilities} = this.state;
    return !heroes.length ? <h2 className='tc'>Loading</h2>
      :
      (
        <div className='wrapper'>
          <SearchBox
            handleCheckChange={this.handleCheckChange}/>
          <HeroList
            heroes={heroes}
            attr='str'
            abilities={abilities}/>
          <HeroList
            heroes={heroes}
            abilities={abilities}/>
          <HeroList
            heroes={heroes}
            abilities={abilities}/>
        </div>
      );
  }
}

export default App;
