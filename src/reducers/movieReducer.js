import {
    GET_POPULAR_MOVIES_BEGIN,
    GET_POPULAR_MOVIES_SUCCESS,
    GET_POPULAR_MOVIES_ERROR,
    GET_SEARCH_QUERY,
    GET_SEARCHED_MOVIES_BEGIN,
    GET_SEARCHED_MOVIES_ERROR,
    GET_SEARCHED_MOVIES_SUCCESS,
    GET_SINGLE_MOVIE_SUCCESS,
    GET_SINGLE_MOVIE_BEGIN,
    GET_SINGLE_MOVIE_ERROR,
} from "../actions"


const movies_reducer = (state, action) => {
    if (action.type === GET_POPULAR_MOVIES_BEGIN) {
        return { ...state, moviesLoading: true }
    }
    if (action.type === GET_POPULAR_MOVIES_ERROR) {
        return { ...state, moviesLoading: false, moviesError: true }
    }
    if (action.type === GET_POPULAR_MOVIES_SUCCESS) {
        return {
            ...state,
            moviesLoading: false,
            popularMovies: action.payload
        }
    }
    if (action.type === GET_SEARCHED_MOVIES_BEGIN) {
        return { ...state, moviesLoading: true }
    }
    if (action.type === GET_SEARCHED_MOVIES_ERROR) {
        return { ...state, moviesLoading: false, moviesError: true }
    }
    if (action.type === GET_SEARCHED_MOVIES_SUCCESS) {
        return {
            ...state,
            moviesLoading: false,
            searchedMovies: action.payload
        }
    }
    if (action.type === GET_SINGLE_MOVIE_BEGIN) {
        return { ...state, moviesLoading: true }
    }
    if (action.type === GET_SINGLE_MOVIE_ERROR) {
        return { ...state, moviesLoading: false, moviesError: true }
    }
    if (action.type === GET_SINGLE_MOVIE_SUCCESS) {
        return {
            ...state,
            moviesLoading: false,
            single_movie: action.payload
        }
    }
    if (action.type === GET_SEARCH_QUERY) {
        return {
            ...state,
            query: action.payload
        }
    }
}

export default movies_reducer;