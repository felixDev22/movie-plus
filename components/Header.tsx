import { SearchIcon } from '@heroicons/react/solid';
import { BellIcon, UserIcon} from '@heroicons/react/solid';
import Image from 'next/image';
import {useEffect, useState} from 'react';




const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
 const handleScrolled = () => {
  if (window.scrollY > 0) {
    setScrolled(true);
  } else {
    setScrolled(false);
  }
}
  window.addEventListener('scroll', handleScrolled)
  return () => {
    window.removeEventListener('scroll', handleScrolled)
  }
}, []);
  
  return (
    <header className={scrolled ? 'bg-[#080808]' : ''}>
      <div className="flex items-center justify-center space-x-2 md:space-x-10">
        <Image
          src="/assets/movie+logo.png"
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
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="hidden sm:inline h-6 w-6" />
        <UserIcon className="sm:inline h-6 w-6" />
      </div>
    </header>
  );
};

export default Header