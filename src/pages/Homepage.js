import React from "react";
import team from "../images/cyber.svg";

const Homepage = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <article className="col-md-8 col-lg-6 col-xl-6 mt-5">
            <h1>
              There are only two types of companies: those that have been
              hacked, and those that will be
            </h1>
            <br />
            <br />
            <p className="fs-5">
              Cryptography is a technique used to secure digital communication,
              ensuring confidentiality, integrity, and authenticity of data
              transmitted over computer networks. It involves the use of
              mathematical algorithms to transform plain text into an encoded
              form that can only be decoded with a secret key. Cryptography
              plays a vital role in computer security, protecting sensitive
              information from unauthorized access, theft, or modification. With
              the increasing number of cyber threats, cryptography has become an
              essential tool for businesses, governments, and individuals to
              safeguard their data and maintain the privacy and security of
              their online communications.
            </p>
            <button className="btn btn-primary w-25">Start now</button>
          </article>
          <article className="col-md-4 col-lg-6 col-xl-6">
            <div className="card my-4 shadow p-3 mb-5 bg-body-tertiary rounded">
              <img src={team} className="" alt="team" />
              <div className="card-body">
                <h5 className="card-title">LM Computer Security Team</h5>
                <p className="card-text">
                  Our computer security team is a group of professionals
                  responsible for protecting an organization's information
                  assets and technology infrastructure from threats such as
                  cyberattacks, data breaches, and other security risks. These
                  teams typically consist of security analysts, engineers, and
                  administrators who work together to implement security
                  protocols, monitor networks for potential vulnerabilities, and
                  respond to incidents as they arise.
                </p>
                <a
                  href="/contact"
                  className="btn btn-primary d-block text-capitalize"
                >
                  Join Us
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
