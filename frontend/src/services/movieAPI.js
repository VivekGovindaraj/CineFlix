    import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
    import { TMDB_BASE_URL, TMDB_API_KEY, TMDB_BEARER_TOKEN } from "./tmdb.js";
    import Search from "../../pages/Search.jsx";
import { build } from "vite";

    export const movieAPI = createApi ({
        reducerPath : "movieAPI",

        baseQuery : fetchBaseQuery({
            baseUrl: TMDB_BASE_URL,
            prepareHeaders: (headers) => {
            headers.set("Authorization", `Bearer ${TMDB_BEARER_TOKEN}`);
            headers.set("accept", "application/json");

            return headers;
            },
        

        }),
        endpoints : (builder) => ({

        getNowPlaying : builder.query({
            query : ({page}) => ({
                url:"/movie/now_playing",
                params :{
                    page : page
                }
            })
        }),

        getTopRated: builder.query({
            
            query :({page}) => ({
                url:'/movie/top_rated',
                params: {
                    page:page
                }
            })
        }),

        getPopular : builder.query({
            query: () =>({
                url:'movie/popular',
                params :{
                    page:page
                }
            }) 
        }),

        getUpcoming: builder.query({
            query: () =>({
                url:"/movie/upcoming",
                params: {
                    page:page
                }
            }) 
        }),

        getAnime: builder.query({
            query: () => ({
                url: "/discover/movie",
                params: {
                with_genres: "16",
                sort_by: "popularity.desc",
                },
            }),
            }),
            getMovieVideos: builder.query({
            query: (movieId) => `/movie/${movieId}/videos`
            }),

        searchMovies: builder.query({
            query: ({ keyword, page }) => ({
                url: "/search/movie",
                params: {
                query: keyword,
                page: page
                }
            })
            }),

        }) ,
   
    })

    export const {useGetNowPlayingQuery,
                useGetTopRatedQuery,
                    useGetPopularQuery,
                    useGetUpcomingQuery,
                    useGetAnimeQuery,
                    useSearchMoviesQuery,
                    useGetMovieVideosQuery
                    } = movieAPI

