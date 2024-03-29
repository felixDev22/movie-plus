import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Head from 'next/head';
import requests from '@/utilis/requests';
import { Movie } from '@/tsdefination';
import Categories from '@/components/Categories';

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
  comedyMovies: Movie[];
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {
  return (
    <>
      <div className="relative h-screen bg-gradient-to-b from-gray-900/50 to-[#050000] lg:h-[140vh]">
        <Head>
          <title>Movie World</title>
        </Head>

        <Header />
        <main className="bg-gradient-to-r from-black via-transparent lg:h-[100vh] pl-6 lg:pl-16 lg:space-y-28">
          <Hero netflixOriginals={netflixOriginals} />
          <section className='md:space-y-10'>
            <Categories title="Trending Now" movies={trendingNow} />
            <Categories title="Top Rated" movies={topRated} />
            <Categories title="Action" movies={actionMovies} />
            <Categories title="Comedy" movies={comedyMovies} />
            <Categories title="Documentary" movies={documentaries} />
            <Categories title="Romance" movies={romanceMovies} />
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;

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
