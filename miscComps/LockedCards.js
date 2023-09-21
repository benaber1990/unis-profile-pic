import React from "react";
import cscs from "../src/images/cscs.png";
import bluecard from "../src/images/bluecard.png";
import yellowcard from "../src/images/yellowcard.png";
import redcard from "../src/images/redcard.png";
import greencard from "../src/images/greencard.png";

const CardItem = ({ imgLink }) => (
  <div style={{ opacity: 0.8 }}>
    <img
      src={imgLink}
      style={{ height: 200, width: 300, marginTop: -60, borderRadius: 24 }}
    />
  </div>
);

export default function LockedCards() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 120 }}>
      <div>
        <CardItem imgLink={greencard} />
        <CardItem imgLink={redcard} />
        <CardItem imgLink={bluecard} />
      </div>
    </div>
  );
}
