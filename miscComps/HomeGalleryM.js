import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const imgLink1 =
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const imgLink2 =
  "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const imgLink3 =
  "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const imgLink4 =
  "https://images.pexels.com/photos/448828/pexels-photo-448828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const ImgItem = ({ imageUrl }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      height: 150,
      width: 150,
      borderRadius: 12,
      margin: 12,
    }}
  >
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: 12,
      }}
    >
      <div style={{ padding: 20 }}>
        <FontAwesomeIcon icon={faLock} style={{ color: "white" }} size="lg" />
      </div>
    </div>
  </div>
);

export default function HomeGalleryM() {
  return (
    <div
      style={{
        marginTop: 40,
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        Explore Joseph's Work...
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImgItem imageUrl={imgLink1} />
        <ImgItem imageUrl={imgLink2} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImgItem imageUrl={imgLink3} />
        <ImgItem imageUrl={imgLink4} />
      </div>

      <p style={{ color: "white", textAlign: "center" }}>
        Work Galleries viewable by UNIS members only
      </p>
    </div>
  );
}
