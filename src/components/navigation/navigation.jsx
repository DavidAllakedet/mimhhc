import React from "react";
import './Navigation.scss';

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
          Les Héros du Christ
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#vision" className="page-scroll">
              Vision
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
              Description
              </a>
            </li>
            <li>
              <a href="#valeurs" className="page-scroll">
              Valeurs
              </a>
            </li>
            <li>
              <a href="#gallerie" className="page-scroll">
                Gallerie
              </a>
            </li>
            <li>
              <a href="#mission" className="page-scroll">
              Mission
              </a>
            </li>
            {/* <li>
              <a href="" className="page-scroll">
              Programme
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
