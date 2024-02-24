import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section>
      <div className="footer">
        <footer className="text-center text-lg-start mt-xl-5 pt-4">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase mb-4">OUR WORLD</h5>
                <ul className="list-unstyled mb-4">
                  <li>
                    <a href="#!" className="text-black">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Collections
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Environmental philosophy
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Artist collaborations
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase mb-4">OUR WORLD</h5>
                <ul className="list-unstyled mb-4">
                  <li>
                    <a href="#!" className="text-black">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Collections
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Environmental philosophy
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Artist collaborations
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 gap-4 ">
                <h5 className="text-uppercase mb-4">
                  Sign up to our newsletter
                </h5>

                <div className="mb-1">
                  <input
                    type="email"
                    id="form5Example2"
                    className="form-control"
                  />
                  <label className="form-label" for="form5Example2">
                    Email address
                  </label>
                </div>

                <button type="submit" className="btn">
                  Subscribe
                </button>
              </div>
              {/* Add similar code for other columns */}
            </div>
          </div>
          <div className="text-center p-3">
            © 2024 Copyright:
            <a className="text-black" href="">
              Akhtar
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
