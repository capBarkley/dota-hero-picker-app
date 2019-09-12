import { CHANGE_SEARCH_FIELD, CHANGE_SEARCH_ABILITIES } from './constants'

const initialStateSearch = {
    searchField: ''
}

export const searchHero = (state = initialStateSearch, action = {}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload};
        default:
            return state;
    }
}

const initialStateAbilities = {
    abilities: []
}

export const searchAbilities = (state = initialStateAbilities, action ={}) => {
    switch(action.type){
        case CHANGE_SEARCH_ABILITIES:
            if (state.abilities.includes(action.payload)) {
                return state
            } else {
                return {...state, abilities: [...state.abilities, action.payload]}
            }
    }
}