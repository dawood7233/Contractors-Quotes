import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-black text-base-200 p-10 ">
        <nav>
          <a href="/" className="">
            <img className="h-14 lg:h-16 pl-3" src="/assets/images/logo.png" alt="Logo" />
          </a>
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
            Copyright © {new Date().getFullYear()} - All right reserved by TheContractorNow Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
