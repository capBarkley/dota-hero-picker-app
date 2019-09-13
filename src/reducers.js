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
    abilities: [
        {id: 1, value: 'silence', isChecked: false},
        {id: 2, value: 'stun', isChecked: false},
        {id: 3, value: 'slow', isChecked: false}
    ]
}

export const setAbilities = (state = initialStateAbilities, action ={}) => {
    switch(action.type){
        case CHANGE_SEARCH_ABILITIES:
            console.log(state);
            return state;

            // state.abilities.filter(abil => abil.value === action.payload.value).isChecked = action.payload.isChecked;
            // return {...state, abilities: state.abilities}
    }
}