import React from "react";
import { footerSocial } from "../data";
import { FaPhone, FaHome, FaMailBulk, FaPrint} from "react-icons/fa";
import logo from "../images/logo1.svg"


const Footer = () => {
  return (
    <footer className="bg-body-secondary text-center text-lg-start text-muted">
      <section className=" d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block text-dark">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <ul className="d-flex list-unstyled justify-content-around">
            {footerSocial.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a className="me-4 text-reset" aria-current="page" href={url}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="">
        <div className="text-dark container-fluid text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img src={logo} alt={logo} className="w-50 h-25 m-0 p-4 m-0" />
                LEBAWIMISGANA
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

              <p>
                <FaHome />
                &nbsp; Addis Ababa, AA 10012, ETH
              </p>

              <p>
                <FaMailBulk />
                &nbsp; misgemoges@gmail.com
              </p>

              <p>
                <FaPhone />
                &nbsp; +251962699769
              </p>

              <p>
                <FaPrint />
                &nbsp;+ 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          LebawiMisgana@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
