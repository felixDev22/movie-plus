import { Movie } from '@/tsdefination';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

interface Props {
  title: string;
  movies: Movie[];
}

const Categories = ({ title, movies }: Props) => {
  return (
    <div className='h-40 space-y-1 md:space-y-3'>
      <h2>{title}</h2>
      <div className='row relative '>
        <ChevronLeftIcon className=" h-8 w-8 cursor-pointer absolute top-0 bottom-0 left-5 z-30 m-auto hover:scale-100 opacity-0 transition row-hover:opacity-100" />

        <ChevronRightIcon className=" h-8 w-8 cursor-pointer absolute top-0 bottom-0 right-5 z-30 m-auto hover:scale-100 opacity-0 transition row-hover:opacity-100" />
      </div>
    </div>
  );
};

export default Categories;
