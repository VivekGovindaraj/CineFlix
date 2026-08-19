    import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
    import { TMDB_BASE_URL, TMDB_API_KEY, TMDB_BEARER_TOKEN } from "./tmdb.js";
    import Search from "../../pages/Search.jsx";

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
            query : () => "/movie/now_playing"
        }),

        getTopRated: builder.query({
            query: () => '/movie/top_rated'
        }),

        getPopular : builder.query({
            query: () => 'movie/popular'
        }),

            getUpcoming: builder.query({
                query: () => "/movie/upcoming",
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

        searchMovies : builder.query({
            query : (keyword) => `/search/movie?query=${keyword}`
        })

        })
    })

    export const {useGetNowPlayingQuery,
                useGetTopRatedQuery,
                    useGetPopularQuery,
                    useGetUpcomingQuery,
                    useGetAnimeQuery,
                    useSearchMoviesQuery
                    } = movieAPI

