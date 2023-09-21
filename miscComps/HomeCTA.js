import React from "react";
import COLORS from "../misc/COLORS";

export default function HomeCTA() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          marginTop: 60,
          //   color: "white",
          fontWeight: "700",
          fontSize: 16,
          textAlign: "center",
          backgroundColor: COLORS.mainGreen,
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: 8,
        }}
      >
        <p>Unlock UNIS</p>
      </div>
    </div>
  );
}
