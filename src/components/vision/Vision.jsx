import React from "react";

export const Vision = (props) => {
  return (
    <div id="vision" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Vision</h2>
        </div>
        <div className="three-columns">
          {props.Data
            ? props.Data.map((d, i) => (
                <div key={`${d.title}-${i}`}>
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>

      </div>
    </div>
  );
};
