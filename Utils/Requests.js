const API_KEY = process.env.API_KEY;

const TMDB_DATA = {
  fetchTrending: {
    title: "Trending",
    URL: `/trending/all/week?api_key=${API_KEY}`,
  },
  fetchTopRated: {
    title: "Top Rated",
    URL: `/movie/top_rated?api_key=${API_KEY}`,
  },
  fetchAction: {
    title: "Action",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedy: {
    title: "Comedy",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorror: {
    title: "Horror",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomance: {
    title: "Romance",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movie",
    URL: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};

export default TMDB_DATA;
