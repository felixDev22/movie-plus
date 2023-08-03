

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-center space-x-2 md:space-x-10">
        <image src="../assets/movie+logo.jpg" alt="logo" />

        <ul className="hidden space-x-4 md:flex">
          <li className="navLink">Movies</li>
          <li className="navLink">TV Shows</li>
          <li className="navLink">New & Popular</li>
          <li className="navLink">My List</li>
        </ul>

      </div>
      <div></div>
    </header>
  );
}

export default Header