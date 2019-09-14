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

export const setAbilities = (state = initialStateAbilities, action = {}) => {
    switch(action.type){
        case CHANGE_SEARCH_ABILITIES:
            state.abilities.map(abilObj => {
                if (abilObj.value === action.payload) {
                    abilObj.isChecked = !abilObj.isChecked;
                }
            })
            return state;
        default:
            return state;
    }
}