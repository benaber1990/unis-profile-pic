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
      height: 220,
      width: 220,
      borderRadius: 12,
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
      <p
        style={{
          color: "white",
          marginTop: 80,
          paddingLeft: 10,
          fontSize: 12,
          fontWeight: "700",
        }}
      >
        Only viewable by UNIS members
      </p>
    </div>
  </div>
);

export default function HomeGallery() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginRight: 160,
        marginLeft: 160,
        marginTop: 40,
        cursor: "pointer",
      }}
    >
      <ImgItem imageUrl={imgLink1} />
      <ImgItem imageUrl={imgLink2} />
      <ImgItem imageUrl={imgLink3} />
      <ImgItem imageUrl={imgLink4} />
    </div>
  );
}
