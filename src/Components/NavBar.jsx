const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-[#1f2020] text-base-100 fixed top-0 left-0 w-full z-20 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
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
              {/* For mobile */}
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
                <ul className="p-2">
                  <li>
                    <a>Solar</a>
                  </li>
                  <li>
                    <a>Windows</a>
                  </li>
                  <li>
                    <a>Roofing</a>
                  </li>
                  <li>
                    <a>HVAC</a>
                  </li>
                  <li>
                    <a>Painting</a>
                  </li>
                  <li>
                    <a>Plumbing</a>
                  </li>
                  <li>
                    <a>Gutters</a>
                  </li>
                  <li>
                    <a>Home Security</a>
                  </li>
                  <li>
                    <a>Kitchen</a>
                  </li>
                  <li>
                    <a>Siding</a>
                  </li>
                  <li>
                    <a>Bathroom</a>
                  </li>
                  <li>
                    <a>Fencing</a>
                  </li>
                  <li>
                    <a>Flooring</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/aboutUs">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <a href="/" className="flex items-center">
            <img className="h-14 lg:h-16 pl-3" src="logo.png" alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-[16px]">
            <li>
              <a href="/" className="hover:text-[#ffb000] hover-underline-animation ">
                Home
              </a>
            </li>
            <li className="relative group">
              <a className="hover:text-[#ffb000] cursor-pointer" href="/services">Services
              </a>
              {/* Sub-section menu */}
              <ul className="absolute hidden group-hover:flex bg-[#1f2020] px-10 py-4 rounded-lg shadow-lg w-[350px] flex-wrap gap-4 z-20 top-full left-0">
                <li>
                  <a className="hover:text-[#ffb000] ">Solar</a>
                </li>
                <li>
                  <a className="hover:text-[#ffb000]">Windows</a>
                </li>
                <li>
                  <a className="hover:text-[#ffb000]">Roofing</a>
                </li>
                <li>
                  <a className="hover:text-[#ffb000]">HVAC</a>
                </li>
                <li>
                  <a className="hover:text-[#ffb000]">Painting</a>
                </li>
                <li>
                  <a className="hover:text-[#ffb000]">Plumbing</a>
                </li>
                <li>
                  <a className="hover:text-[#ffb000]">Gutters</a>
                </li>
                <li>
                  <a className="hover:text-[#ffb000]">Home Security</a>
                </li>
                <li>
                  <a className="hover:text-[#ffb000]">Kitchen</a>
                </li>
                <li>
                  <a className="hover:text-[#ffb000]">Siding</a>
                </li>
                <li>
                  <a className="hover:text-[#ffb000]">Bathroom</a>
                </li>
                <li>
                  <a className="hover:text-[#ffb000]">Fencing</a>
                </li>
                <li>
                  <a className="hover:text-[#ffb000]">Flooring</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#ffb000] hover-underline-animation">
                Contact
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-[#ffb000] hover-underline-animation">
                Projects
              </a>
            </li>
            <li>
              <a href="/aboutUs" className="hover:text-[#ffb000] hover-underline-animation">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn bg-primary text-black">Get Quotes</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
