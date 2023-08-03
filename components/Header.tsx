import { SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image';


const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-center space-x-2 md:space-x-10">
        <Image
          src="/assets/movie+logo.jpg"
          alt="logo"
          width={100}
          height={100}
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="navLink">Movies</li>
          <li className="navLink">TV Shows</li>
          <li className="navLink">New & Popular</li>
          <li className="navLink">My List</li>
        </ul>
      </div>
      <div>
        <SearchIcon className="hidden sm:inline" />
      </div>
    </header>
  );
}

export default Header