import {
    GET_POPULAR_SHOWS_SUCCESS,
    GET_POPULAR_SHOWS_BEGIN,
    GET_POPULAR_SHOWS_ERROR,
    GET_SEARCH_QUERY,
    GET_SEARCHED_SHOWS_BEGIN,
    GET_SEARCHED_SHOWS_ERROR,
    GET_SEARCHED_SHOWS_SUCCESS,
    GET_SINGLE_SHOW_SUCCESS,
    GET_SINGLE_SHOW_BEGIN,
    GET_SINGLE_SHOW_ERROR,
} from "../actions"

const shows_reducer = (state, action) => {
    if (action.type === GET_POPULAR_SHOWS_BEGIN) {
        return { ...state, showsLoading: true }
    }
    if (action.type === GET_POPULAR_SHOWS_ERROR) {
        return { ...state, showsLoading: false, showsError: true }
    }
    if (action.type === GET_POPULAR_SHOWS_SUCCESS) {
        return {
            ...state,
            showsLoading: false,
            popularShows: action.payload
        }
    }
    if (action.type === GET_SEARCHED_SHOWS_BEGIN) {
        return { ...state, showsLoading: true }
    }
    if (action.type === GET_SEARCHED_SHOWS_ERROR) {
        return { ...state, showsLoading: false, showsError: true }
    }
    if (action.type === GET_SEARCHED_SHOWS_SUCCESS) {
        return {
            ...state,
            showsLoading: false,
            searchedShows: action.payload
        }
    }
    if (action.type === GET_SINGLE_SHOW_BEGIN) {
        return { ...state, showsLoading: true }
    }
    if (action.type === GET_SINGLE_SHOW_ERROR) {
        return { ...state, showsLoading: false, showsError: true }
    }
    if (action.type === GET_SINGLE_SHOW_SUCCESS) {
        return {
            ...state,
            showsLoading: false,
            single_show: action.payload
        }
    }
    if (action.type === GET_SEARCH_QUERY) {
        return {
            ...state,
            query: action.payload
        }
    }
}
export default shows_reducer;