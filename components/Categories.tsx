import { Movie } from '@/tsdefination';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Movieslist } from './Movieslist';

interface Props {
  title: string;
  movies: Movie[];
}

const Categories = ({ title, movies }: Props) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="md:text-2xl font-semibold cursor-pointer hover:opacity-25 transition">
        {title}
      </h2>
      <div className="group relative md:-ml-4 ">
        <ChevronLeftIcon className=" h-8 w-8 cursor-pointer absolute top-0 bottom-0 left-5 z-30 m-auto hover:scale-100 opacity-0 transition group-hover:opacity-100" />

        <div className="flex overflow-x-scroll scrollbar-hide   items-center space-x-1 md:space-x-3 md:p-2">
          {movies.map((movie) => (
            <Movieslist key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon className=" h-8 w-8 cursor-pointer absolute top-0 bottom-0 right-5 z-30 m-auto hover:scale-100 opacity-0 transition row-hover:opacity-100" />
      </div>
    </div>
  );
};

export default Categories;
