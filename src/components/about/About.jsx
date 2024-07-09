import React from "react";
import './About.scss';

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/logo.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>A PROPOS </h2>
              <p>{props.Data ? props.Data.paragraph : "Chargement..."}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
