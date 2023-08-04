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
    <div className="flex flex-col space-y-3 lg:pb-12 lg:h-[70vh] lg:justify-end sm:h-[60vh] sm:justify-end">
      <div className="h-[92vh] w-screen absolute top-0 left-0 -z-10">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="poster"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className=" font-bold lg:text-7xl md:text-4xl text-4xl">
        {movie?.name || movie?.title || movie?.original_name}
      </h1>
      <p className="max-w-xs md:max-w-lg  md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      
    </div>
  );
};

export default Hero