import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container ">
      <footer className="d-flex flex-wrap justify-content-between row row-cols-6 py-6 my-6 border-top">
        <div className="col">
          <div className="nav flex-column align-items-center mb-3 link-dark">
            <div className="">
              <img alt="bizka logo"></img>
              <div>
                <div className="col">
                  <ul className="nav md-4 justify-space-between list-unstyled d-flex">
                    <li className="ms-6">
                      <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li className="ms-6">
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li className="ms-6">
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li className="ms-6">
                      <a href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <h6 className="text-uppercase nav flex-column font-weight-bold">
            Contact US
          </h6>
          <hr className=" mb-4 mt-0  mx-auto" />
          <ul className="list-unstyled">
            <li className="nav-item mb-2">Phone No</li>
            <li className="my-6 nav-item mb-2">theproviders@gmail.com</li>
          </ul>
        </div>
        <div className="col">
          <h6 className="col text-uppercase nav flex-column font-weight-bold">
            The Providers
          </h6>
          <hr className="mb-4 mt-0 mx-auto" />
          <p className="nav-item mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="col">
          <h6 className="text-uppercase nav flex-column font-weight-bold">
            Products
          </h6>
          <hr className="mb-4 mt-0 mx-auto" />
        </div>

        <div className="col ">
          <h6 className="text-uppercase font-weight-bold">Information</h6>
          <hr className=" mb-4 mt-0  mx-auto" />
          <ul className="list-unstyled nav flex-column">
            <li className="my-6 nav-item mb-2">
              <a className="nav-link p-0" href="#">
                About US
              </a>
            </li>
            <li className="my-2 nav-item mb-2">
              <a className="nav-link p-0" href="#">
                {" "}
                Blog
              </a>
            </li>
            <li className="my-2 nav-item mb-2">
              <a className="nav-link p-0" href="#">
                Privacy Policy
              </a>
            </li>
            <li className="my-2 nav-item mb-2">
              {" "}
              <a className="nav-link p-0" href="#">
                Terms &amp;
              </a>
            </li>
            <li className="my-2 nav-item mb-2">
              {" "}
              <a className="nav-link p-0" href="#">
                Condition
              </a>
            </li>
            <li className="my-2 nav-item mb-2">
              {" "}
              <a className="nav-link p-0" href="#">
                Press Release
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="d-flex  footer-copyright py-3">
        <p>
          <a className="text-decoration-none" href="#">
            Privacy and Security
          </a>
        </p>
        <p>Terms and Condition</p>
      </div>
    </div>
  );
};

export default Footer;
