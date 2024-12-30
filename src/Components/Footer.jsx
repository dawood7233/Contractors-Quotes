import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-black text-base-200 p-10 ">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Solar</a>
          <a className="link link-hover">Windows</a>
          <a className="link link-hover">Flooring</a>
          <a className="link link-hover">Kitchen</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover" href="/aboutUs">
            About us
          </a>
          <a className="link link-hover">Contact</a>
        </nav>
        <form>
          <h6 className="footer-title">Search Professionals</h6>
          <fieldset className="form-control w-80">
            <div className="join flex-col md:flex-row text-black">
              <input
                type="text"
                placeholder="Choose Project Type"
                className="input input-bordered join-item"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Get Quote</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
