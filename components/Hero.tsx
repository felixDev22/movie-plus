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
      <div className="h-[92vh] w-screen absolute top-0 left-0 -z-10">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="poster"
          layout='fill'
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Hero