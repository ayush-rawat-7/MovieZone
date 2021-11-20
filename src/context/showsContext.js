import {
    GET_POPULAR_SHOWS_SUCCESS,
    GET_POPULAR_SHOWS_BEGIN,
    GET_POPULAR_SHOWS_ERROR,
    GET_SEARCHED_SHOWS_BEGIN,
    GET_SEARCHED_SHOWS_ERROR,
    GET_SEARCHED_SHOWS_SUCCESS,
    GET_SINGLE_SHOW_SUCCESS,
    GET_SINGLE_SHOW_BEGIN,
    GET_SINGLE_SHOW_ERROR,
} from "../actions"
import React, { useEffect, useContext } from 'react';
import { useReducer } from 'react';
import reducer from "../reducers/showsReducer"

const ShowContext = React.createContext();

const initialState = {
    showsLoading: false,
    showsError: false,
    searchedShows: [],
    popularShows: [],
    single_show_loading: false,
    single_show_error: false,
    single_show: [],
    query: ""
}

export const ShowsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchMostPopularShows = async () => {
        dispatch({ type: GET_POPULAR_SHOWS_BEGIN })
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`);;
            const shows = await response.json();
            dispatch({ type: GET_POPULAR_SHOWS_SUCCESS, payload: shows.results })
        } catch (err) {
            dispatch({ type: GET_POPULAR_SHOWS_ERROR })
        }
    }
    const getSearchedShows = async (query) => {
        dispatch({ type: GET_SEARCHED_SHOWS_BEGIN })
        let searchURL = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
        try {
            const res = await fetch(searchURL);
            const searchedShows = await res.json();
            if (searchedShows.length < 1) {
                dispatch({ type: GET_SEARCHED_SHOWS_ERROR })
            } else {
                dispatch({ type: GET_SEARCHED_SHOWS_SUCCESS, payload: searchedShows.results })
            }
        } catch (error) {
            dispatch({ type: GET_SEARCHED_SHOWS_ERROR })
        }
    }

    const getSingleShow = async (id) => {
        dispatch({ type: GET_SINGLE_SHOW_BEGIN });
        let searchURL = `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
        try {
            const res = await fetch(searchURL);
            const singleShow = await res.json();
            dispatch({ type: GET_SINGLE_SHOW_SUCCESS, payload: singleShow })
        } catch (error) {
            dispatch({ type: GET_SINGLE_SHOW_ERROR })
        }
    }

    useEffect(() => {
        fetchMostPopularShows()
    }, [])

    return (
        <ShowContext.Provider
            value={{
                ...state,
                dispatch,
                getSearchedShows,
                getSingleShow
            }}>
            {children}
        </ShowContext.Provider>
    )
}
export const useShowsContext = () => {
    return useContext(ShowContext)
}