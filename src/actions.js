import { CHANGE_SEARCH_FIELD } from './constants'

export const setSearchFIeld = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})