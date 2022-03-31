import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Results */}
      <Results results={results}/>
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;
  const URL = `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`;
  
  const request = await fetch(URL).then(res => res.json())

  return {
    props: {
      results: request.results
    }
  }
}