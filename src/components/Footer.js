import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container ">
      <footer className="d-flex justify-content-around page-footer row row-cols mt-10 bg-light">
        <div className="col">
          <div className="nav flex-column mb-3 link-dark">
            <div className="">
              <img
                src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/240584989_173622064794381_4485450073447507273_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=106&ccb=1-5&_nc_sid=dd9801&_nc_ohc=GAuAYNnQhUYAX_dVVj1&_nc_ht=scontent-los2-1.xx&oh=00_AT-21u1XYljMTSNYE4nC9Pj-TwfGBhBzs9mopxmiIf69lw&oe=624D2B6C"
                alt="bizka logo"
                style={{ height: "13rem" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="col text-primary">
          <h6 className="text-uppercase mt-5 mb-2 nav flex-column font-weight-bold text-important">
            Contact US
          </h6>
          <ul className="list-unstyled">
            <li className="nav-item mb-2">Phone No</li>
            <li className="nav-item mb-2">bizak@gmail.com</li>
            <li className="nav-item mb-2">Find a Client</li>
          </ul>
        </div>
        <div className="col text-primary">
          <h6 className="col text-uppercase mt-5 nav flex-column font-weight-bold">
            Services
          </h6>
        </div>

        <div className="col-sm-3 text-primary">
          <h6 className="text-uppercase mt-5 mb-2 nav flex-column font-weight-bold text-important">
            Products
          </h6>
          <ul className="list-unstyled nav flex-column">
            <li className="nav-item mb-2">
              <a className="nav-link p-0" href="#">
                Contact US
              </a>
            </li>
            <li className="my-2 nav-item mb-2">
              <a className="nav-link p-0" href="#">
                {" "}
                Discover
              </a>
            </li>
            <li className="my-2 nav-item mb-2">
              <a className="nav-link p-0" href="#">
                Porfolios
              </a>
            </li>
            <li className="my-2 nav-item mb-2">
              {" "}
              <a className="nav-link p-0" href="#">
                FAQ
              </a>
            </li>
            <li className="my-2 nav-item mb-2">
              {" "}
              <a className="nav-link p-0" href="#">
                Site Guide
              </a>
            </li>
          </ul>
        </div>

        <div className="col-sm-3 ">
          <h6 className=" text-uppercase mt-5 font-weight-bold text-primary">
            Information
          </h6>

          <ul className="list-unstyled nav flex-column">
            <li className="nav-item mb-2">
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
      <div>
        <div className="col col-lg-3 mt-2">
          <ul className="nav justify-space-between gap-4 list-unstyled list-inline d-flex">
            <li className="list-inline-item">
              <a className="btn-floating btn-md text-primary" href="#">
                <p className="fs-2 pr-15">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </p>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-md text-primary " href="#">
                <p className="fs-2">
                  <FontAwesomeIcon icon={faFacebook} />
                </p>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-md text-primary" href="#">
                <p className="fs-2">
                  <FontAwesomeIcon icon={faTwitter} />
                </p>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-md text-primary" href="#">
                <p className="fs-2">
                  <FontAwesomeIcon icon={faLinkedin} />
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr
        class="bg-dark mt-4  d-inline-block "
        style={{ width: "100%", height: "2px" }}
      />
      <div className="row-md-2 col-lg-12 d-flex justify-content-end list-inline py-3">
        <li className="list-inline-item">
          <a className="col text-decoration-none text-black" href="#">
            Privacy and Security
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="col text-decoration-none text-black">
            Terms and Condition
          </a>
        </li>
      </div>
    </div>
  );
};

export default Footer;
