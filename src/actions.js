import { CHANGE_SEARCH_FIELD, CHANGE_SEARCH_ABILITIES } from './constants';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const setAbilities = (ability) => ({
    type: CHANGE_SEARCH_ABILITIES,
    payload: ability
})