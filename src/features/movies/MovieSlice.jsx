import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import movieApi from "../../common/Apis/MovieApi";
import { APIKey } from "../../common/Apis/MovieApiKey";
const initialState = {
    movies:{},
    shows:{},
    selectedMovieOrShow:{}
}


export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies",
    async ()=>{
        const movieText = "Harry";
       
      const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie `)
      return response.data;
    }
    
)
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async () => {
  const showText = "Friends";
  const response = await movieApi.get(
    `?apikey=${APIKey}&s=${showText}&type=series `
  );
  return response.data;
});
export const fetchAsyncMoviesOrShows = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShows",
  async (id) => {
    const showText = "Friends";
    const response = await movieApi.get(
      `?apikey=${APIKey}&i=${id}&Plot=full `
    );
    return response.data;
  }
);

   

const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow={};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pendingf");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMoviesOrShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});
export const { removeSelectedMovieOrShow } = MovieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;

export default MovieSlice.reducer