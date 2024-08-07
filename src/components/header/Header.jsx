import React from "react";
import './Header.scss'

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.Data ? props.Data.title : "Chargement"}
                  <span></span>
                </h1>
                <p>{props.Data ? props.Data.paragraph : "Chargement"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  En savoir plus
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
