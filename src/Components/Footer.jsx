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
          <a className="hover-underline-animation">Kitchen</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="hover-underline-animation" href="/userTerms">Terms of use</a>
          <a className="hover-underline-animation" href="/privacyPolicy">
            Privacy policy
          </a>
          <a className="hover-underline-animation" href="/californiaPrivacy">
            California Privacy Notice
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="hover-underline-animation" href="/aboutUs">
            About us
          </a>
          <a className="hover-underline-animation" href="/Contact">
            Contact
          </a>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ContractorNow Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
