
import Header from '@/components/Header';
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Movie World</title>
        </Head>

        <Header />
        <main>
          <section></section>
        </main>
      </div>
    </>
  );
}
