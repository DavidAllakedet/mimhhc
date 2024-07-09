import React from "react";
import './Valeurs.scss'

export const Valeurs = (props) => {
  return (
    <div id="valeurs" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Valeurs</h2>
        </div>
        <div className="row">
          {props.Data
            ? props.Data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="valeur-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Chargement"}
        </div>
      </div>
    </div>
  );
};
