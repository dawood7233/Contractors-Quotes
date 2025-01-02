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
          <a className="link link-hover" href="/privacyPolicy">Privacy policy</a>
          <a className="link link-hover" href="/californiaPrivacy">California Privacy Notice</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover" href="/aboutUs">
            About us
          </a>
          <a className="link link-hover" href="/Contact">Contact</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
