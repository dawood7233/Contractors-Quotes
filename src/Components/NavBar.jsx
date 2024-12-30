const NavBar = () => {
  return (
    <div>
       <div className="navbar bg-black text-base-100 fixed top-0 left-0 w-full z-20 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a href="/">Home</a></li>
              <li>
                <a>Services</a>
                <ul className="p-2">
                  <li><a>Solar</a></li>
                  <li><a>Roofing</a></li>
                </ul>
              </li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/aboutUs">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <a href="/" className="flex items-center">
            <img className="h-14 lg:h-16 pl-3" src="logo.png" alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2 bg-black">
                  <li><a>Solar</a></li>
                  <li><a>Windows</a></li>
                </ul>
              </details>
            </li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/aboutUs">About Us</a></li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn bg-fuchsia-700 text-amber-400">Get Quotes</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
