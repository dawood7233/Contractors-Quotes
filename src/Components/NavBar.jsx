import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { allServices } from "../Components/servicesData";

const NavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Function to determine if the current page matches the link path
  const isActiveLink = (path) => location.pathname === path;

  // Toggle main menu visibility
  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
    setServicesSubmenuOpen(false);
  };

  // Toggle services submenu visibility
  const toggleServicesSubmenu = () =>
    setServicesSubmenuOpen(!servicesSubmenuOpen);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".btn-ghost")
      ) {
        setMenuOpen(false);
        setServicesSubmenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="navbar bg-[#1f2020] text-base-100 fixed top-0 left-0 w-full z-20 shadow-lg">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu (Hamburger Icon) */}
          <div className="md:hidden">
            <button className="btn btn-ghost" onClick={toggleMenu}>
              {menuOpen ? (
                // Cross Icon (close the menu)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon (open the menu)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              )}
            </button>
          </div>

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img className="h-14 lg:h-16 pl-3" src="logo.png" alt="Logo" />
          </a>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 left-0 w-full bg-[#1f2020] text-base-100 z-10 shadow-lg"
          >
            <ul className="menu p-4">
              <li>
                <a
                  href="/"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleServicesSubmenu();
                    }}
                  >
                    Services
                  </a>
                  <button
                    onClick={toggleServicesSubmenu}
                    className={
                      isActiveLink("/services") ? "text-[#ffb000]" : ""
                    }
                  >
                    {servicesSubmenuOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18 15l-6-6-6 6"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 9l6 6 6-6"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {servicesSubmenuOpen && (
                  <ul className="pl-4">
                    {allServices.map((service) => (
                      <li key={service.id}>
                        <a
                          onClick={(e) => {
                            e.preventDefault(); // Prevents the default anchor behavior
                            setMenuOpen(false); // Ensures the menu closes
                            setServicesSubmenuOpen(false); // Ensures the submenu closes
                            navigate(`/services/${service.id}`, {
                              state: { title: service.title },
                            });
                          }}
                          className="hover:text-[#ffb000]"
                        >
                          {service.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="/projects"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/aboutUs"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Navbar Center (Desktop) */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-[16px]">
            <li>
              <a
                href="/"
                className={`hover:text-[#ffb000] hover-underline-animation ${
                  isActiveLink("/") ? "text-[#ffb000] active-underline" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li className="relative group">
              <a
                className={`hover:text-[#ffb000] hover-underline-animation ${
                  isActiveLink("/services")
                    ? "text-[#ffb000] active-underline"
                    : ""
                }`}
                href="/services"
              >
                Services
              </a>
              <ul className="absolute hidden group-hover:flex bg-[#1f2020] px-10 py-4 rounded-lg shadow-lg w-[350px] flex-wrap gap-4 z-20 top-full left-0">
                {allServices.map((service) => (
                  <li key={service.id}>
                    <a
                      onClick={() =>
                        navigate(`/services/${service.id}`, {
                          state: { title: service.title },
                        })
                      }
                      className="hover:text-[#ffb000]"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a
                href="/contact"
                className={`hover:text-[#ffb000] hover-underline-animation ${
                  isActiveLink("/contact")
                    ? "text-[#ffb000] active-underline"
                    : ""
                }`}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className={`hover:text-[#ffb000] hover-underline-animation ${
                  isActiveLink("/projects")
                    ? "text-[#ffb000] active-underline"
                    : ""
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/aboutUs"
                className="hover:text-[#ffb000] hover-underline-animation"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <a className="btn bg-primary text-black" href="/services">
            Get Quotes
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
