import React from "react";
import './Programmes.scss'

export const Programmes = (props) => {
  return (
    <div id="programmes" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Programmes</h2>
        </div>
        <div className="row">
          {props.Data
            ? props.Data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="cont col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                 
                  <h4>{d.name}</h4>
                 
                </div>
              ))
            : "Chargement"}
        </div>
      </div>
    </div>
  );
};
