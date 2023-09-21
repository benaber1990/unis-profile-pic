import React from "react";
import COLORS from "../misc/COLORS";

const Tile = () => (
  <div
    style={{
      color: "white",
      marginRight: 10,
      marginLeft: 10,
      borderRadius: 12,
      marginTop: 30,
      backgroundColor: COLORS.grey,
      paddingLeft: 60,
      paddingRight: 60,
      paddingTop: 20,
      paddingBottom: 20,
    }}
  >
    <p style={{ fontWeight: "700" }}>Tile</p>
  </div>
);

export default function HomeTiles() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginRight: 60,
        marginLeft: 60,
      }}
    >
      <Tile />
      <Tile />
      <Tile />
    </div>
  );
}
