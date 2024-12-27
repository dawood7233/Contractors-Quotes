
const NavBar = () => {
  return (
    <div>
       <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
          <a className="btn btn-ghost text-xl">HomeQuotesNow</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2">
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
