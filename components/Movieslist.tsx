import { Movie } from "@/tsdefination"
import Image from "next/image"

interface Props{
  movie: Movie
}

export const Movieslist = ({movie}: Props) => {
  return (
    <div className="h-28 min-w-[190px]  md:h-28 md:min-w-[200px] relative cursor-pointer trasition duration-200
    ease-out md:hover:scale-110">

      <Image
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
      layout="fill"
      className="object-cover rounded-sm md:rounded"
      alt="thumbnail"  
      />




    </div>
  )
}
