
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Head from 'next/head';
import requests from '@/utilis/requests';
import { Movie } from '@/tsdefination';

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  documentaries: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
}


const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {
  return (
    <>
      <div className="relative h-screen bg-gradient-to-b from-black-900/10 to-[#010511] lg:h-[140vh]">
        <Head>
          <title>Movie World</title>
        </Head>

        <Header />
        <main>
          <Hero />
          <section></section>
        </main>
      </div>
    </>
  );
};

export default Home

export const getServerSideProps = async () => {
 
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      documentaries: documentaries.results,
      comedyMovies: comedyMovies.results,
      romanceMovies: romanceMovies.results,
    },
  };
};
