import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Results from "../Components/Results";
import requests from "../Utils/Requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Bulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Results results={results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.URL || requests.fetchTrending.URL
    }`
    //`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
