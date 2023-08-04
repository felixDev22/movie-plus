import { baseUrl } from "@/constants/base";
import { Movie } from "@/tsdefination";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  netflixOriginals: Movie[]
}

function Hero({ netflixOriginals }: Props ){
  const [movie, setMovie] = useState<Movie | null >(null)

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])


  return (
    <div>
      <div>
        <Image
          src={`${baseUrl} ${movie?.backdrop_path || movie?.poster_path}`}
          alt="poster"
          layout='fill'
        />
      </div>
    </div>
  );
};

export default Hero