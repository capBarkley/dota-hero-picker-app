import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroList from '../components/HeroList';
import SearchBox from '../components/SearchBox'
import { heroes } from 'dotaconstants';
import './App.css';
import { setSearchField, setAbilities } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchHero.searchField,
    abilities: state.setAbilities.abilities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onCheckboxChange: (event) => dispatch(setAbilities(event.target.checked))
  }
}

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
    this.setState({
      heroes: listOfHeroes
    });
  }

  render(){
    const {heroes} = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredHeroes = heroes.filter( hero => {
      return hero.localized_name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !heroes.length ? <h2 className='tc'>Loading</h2>
      :
      (
        <>
          <SearchBox searchChange={onSearchChange}/>
          <HeroList
            heroes={filteredHeroes}
            attr='str'/>
          <HeroList
            heroes={filteredHeroes}
            attr='agi'/>
          <HeroList
            heroes={filteredHeroes}
            attr='int'/>
        </>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
