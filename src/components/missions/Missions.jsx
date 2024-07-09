import React from "react";
import './Missions.scss';

export const Missions = (props) => {
  return (
    <div id="mission" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Missions</h2>
          <p>
           
          </p>
        </div>
        <div className="row">
  {props.Data
    ? props.Data.map((d, i) => (
        <div key={`${d.name}-${i}`} className="col-md-4 col-sm-12 mission">
          <div className="thumbnail">
            <img src={d.img} alt="..." className="mission-img" />
            <div className="caption">
              <h4>{d.name}</h4>
              <ul>
                {d.text.map((textItem, index) => (
                  <li key={`${d.name}-text-${index}`}>{textItem}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))
    : "Chargement"}
</div>



      </div>
    </div>
  );
};
