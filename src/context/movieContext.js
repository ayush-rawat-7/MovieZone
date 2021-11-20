import {
    GET_POPULAR_MOVIES_BEGIN,
    GET_POPULAR_MOVIES_SUCCESS,
    GET_POPULAR_MOVIES_ERROR,
    GET_SEARCHED_MOVIES_BEGIN,
    GET_SEARCHED_MOVIES_ERROR,
    GET_SEARCHED_MOVIES_SUCCESS,
    GET_SINGLE_MOVIE_SUCCESS,
    GET_SINGLE_MOVIE_BEGIN,
    GET_SINGLE_MOVIE_ERROR,
} from "../actions"
import React, { useEffect, useContext } from 'react';
import { useReducer } from 'react';
import reducer from "../reducers/movieReducer"

const MovieContext = React.createContext();

const initialState = {
    moviesLoading: false,
    moviesError: false,
    searchedMovies: [],
    popularMovies: [],
    single_movie_loading: false,
    single_movie_error: false,
    single_movie: [],
    query: ""
}
// const Single_Movie_url = `https://api.themoviedb.org/3/movie/${id}?api_key=27ebd40fd0f0e7922c85c299cb2f9eb8`

export const MoviesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchMostPopular = async () => {
        dispatch({ type: GET_POPULAR_MOVIES_BEGIN })
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`);;
            const movies = await response.json();
            dispatch({ type: GET_POPULAR_MOVIES_SUCCESS, payload: movies.results })
        } catch (error) {
            dispatch({ type: GET_POPULAR_MOVIES_ERROR })
        }
    }

    const getSearchedMovies = async (query) => {
        dispatch({ type: GET_SEARCHED_MOVIES_BEGIN })
        let searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
        try {
            const res = await fetch(searchURL);
            const searchedMovies = await res.json();
            if (searchedMovies.length < 1) {
                dispatch({ type: GET_SEARCHED_MOVIES_ERROR })
            } else {
                dispatch({ type: GET_SEARCHED_MOVIES_SUCCESS, payload: searchedMovies.results })
            }
        } catch (error) {
            dispatch({ type: GET_SEARCHED_MOVIES_ERROR })
        }
    }

    const getSingleMovie = async (id) => {
        dispatch({ type: GET_SINGLE_MOVIE_BEGIN })
        let searchURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
        try {
            const res = await fetch(searchURL);
            const singleMovie = await res.json();
            dispatch({ type: GET_SINGLE_MOVIE_SUCCESS, payload: singleMovie })
        } catch (error) {
            dispatch({ type: GET_SINGLE_MOVIE_ERROR })
        }
    }


    useEffect(() => {
        fetchMostPopular()
    }, [])

    return (
        <MovieContext.Provider
            value={{
                ...state,
                dispatch,
                getSearchedMovies,
                getSingleMovie
            }}>
            {children}
        </MovieContext.Provider>
    )
}
export const useMovieContext = () => {
    return useContext(MovieContext)
}