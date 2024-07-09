import { Image } from "./image";
import React from "react";
import './Gallerie.scss'

export const Gallery = (props) => {
  return (
    <div id="gallerie" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallerie</h2>
          
        </div>
        <div className="row">
          <div className="gallerie-items">
            {props.Data
              ? props.Data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Chargement..."}
          </div>
        </div>
      </div>
    </div>
  );
};
