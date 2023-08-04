import { Movie } from "@/tsdefination";
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


  return(
  <div>
    <div>
      
    </div>
  </div>
  );
};

export default Hero