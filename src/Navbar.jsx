import React from "react";
import Cart from "./Section_comp";
import Jobs2 from "./Jobs2";
import Blog2 from "./Blog2";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            <img src={props.img} alt="" className="ms-2" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav fs-5 ms-md-5">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/Batchs">
                  Batchs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="">
                  Internships
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/Certificate">
                  Certificate
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/placement">
                  Placement
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/job">
                  Job
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/Blog2">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="">
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn" to="">
                  Get Carrer Guidance
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
