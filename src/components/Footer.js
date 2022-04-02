import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="page-footer bg-dark">
      <div className="bg-light">
        <div className="container">
          <div className="column py-4 d-grid align-items-center">
            <div className="grid col-md-12  ">
              <img className="d-block" alt="bizka logo"></img>
              <div className="d-flex-row-6">
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <div className="container text-center text-md-left mt-5">
            <div className="row">
              <div className="col-md-3 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">Contact US</h6>
                <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" />
                <ul className="list-unstyled">
                  <li className="my-2">
                    <i className="fas fa-home mr-3"></i> Karachi, NY 10012, US
                  </li>
                  <li className="my-2">
                    <i className="fas fa-envelope mr-3"></i>{" "}
                    theproviders@gmail.com
                  </li>
                  <li className="my-2">
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </li>
                  <li className="my-2">
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  The Providers
                </h6>
                <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" />
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <div className="col-md-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">Products</h6>
                <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" />
              </div>

              <div className="col-md-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">Information</h6>
                <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" />
                <ul className="list-unstyled">
                  <li className="my-2">
                    <a href="#">Home</a>
                  </li>
                  <li className="my-2">
                    <a href="#">About</a>
                  </li>
                  <li className="my-2">
                    <a href="#">Services</a>
                  </li>
                  <li className="my-2">
                    {" "}
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-flex  footer-copyright text-align-right py-3">
            <p>
              <a href="#">Privacy and Security</a>
            </p>
            <p>Terms and Condition</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
