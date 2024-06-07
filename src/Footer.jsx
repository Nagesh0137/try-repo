import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark">
        <div className="container text-white">
          <div className="row p-4 ">
            <div className="col-md-3">
              <h4>USEFUL LINKS</h4>
              <ul className="">
                <li className="nav-link fs-5">Home</li>
                <li className="nav-link fs-5">About Us</li>
                <li className="nav-link fs-5">FAQ</li>
                <li className="nav-link fs-5">Term of Service</li>
                <li className="nav-link fs-5">Privacy Policy</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>OUR SERVICES</h4>
              <ul className="">
                <li className="nav-link fs-5">Classroom training</li>
                <li className="nav-link fs-5">Interview Preparation</li>
                <li className="nav-link fs-5">100% Job Guarantee</li>
                <li className="nav-link fs-5">Global Certification</li>
                <li className="nav-link fs-5">Degital Classroom</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>CONTACT US</h4>
              <ul className="">
                <li className="nav-link fs-6">3rd Floor Lendkar Apartment</li>
                <li className="nav-link fs-6">Balikashram Rd, near Kamala</li>
                <li className="nav-link fs-6">
                  Ayurvedic Hospital, Ahmednagar
                </li>
                <li className="nav-link fs-6">Maharashtra 414001</li>
                <li className="nav-link fs-6">Phone: 09011144920</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>About A2Z IT HUB PVT LTD</h4>
              <ul className="">
                <li className="nav-link fs-6">
                  A2Z IT HUB PVT LTD was founded
                </li>
                <li className="nav-link fs-6">
                  2018 with a passion for create Digital
                </li>
                <li className="nav-link fs-6">
                  coding World. Since then, we have
                </li>
                <li className="nav-link fs-6">
                  grown into a dynamic team of skilled
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
