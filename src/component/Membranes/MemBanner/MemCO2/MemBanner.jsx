import React from "react";
import "./MemBanner.css";
// import airplane from "/public/membranes/airplane.webp";
// import farm from "../../../../assets/membranes/farm.jpg";

export default function MemBanner() {
  return (
    <div className="banner">
      <div
        className="section-banner banner-1"
        // style={{ backgroundImage: `url(${airplane})` }}
      >
        <h3 className="type">N2 Separator</h3>
        <p className="memDesc">Good for recovering N2</p>
        <button>Learn More</button>
      </div>
      <div
        className="section-banner banner-2"
        // style={{ backgroundImage: `url(${farm})` }}
      >
        <h3 className="type">CO2 Separator</h3>
        <p className="memDesc">
          Less waste for earth, more energy for the future
        </p>
        <button>Learn More</button>
      </div>
      <div className="section-banner banner-3">
        <h3 className="type">CO</h3>
        <p className="memDesc"></p>
        <button>Learn More</button>
      </div>
    </div>
  );
}
