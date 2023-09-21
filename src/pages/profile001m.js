import React from "react";
import COLORS from "../../misc/COLORS";
import HomeCopy1 from "../../miscComps/HomeCopy1";
import HomeTiles from "../../miscComps/HomeTiles";
import HomeCTA from "../../miscComps/HomeCTA";
import HomeGallery from "../../miscComps/HomeGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import HomeGalleryM from "../../miscComps/HomeGalleryM";
import logoImage from "../images/logo.png";
import LockedCards from "../../miscComps/LockedCards";

const pageStyles = {
  color: "#232129",
  padding: 24,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: COLORS.dark,
  // borderRadius: 12,
  paddingTop: 10,
  marginTop: -10,
  marginLeft: -10,
  marginRight: -10,
};

const headerCardStyles = {
  backgroundColor: COLORS.grey,
  backgroundImage: `url('https://images.pexels.com/photos/1238864/pexels-photo-1238864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2})`,
  backgroundSize: "cover",
  borderRadius: 12,
  marginTop: 20,
};

const InfoCardStyles = {
  backgroundColor: COLORS.grey,
  borderRadius: 12,
  width: "100%",
  marginBottom: 20,
  paddingTop: 15,
};

const sideCompStyles = {
  backgroundColor: COLORS.grey,
  borderRadius: 12,

  paddingTop: 30,
  paddingLeft: 20,
  color: "white",
};

const cardCardStyles = {
  backgroundColor: COLORS.grey,
  padding: 20,
  borderRadius: 12,
  marginTop: 60,
};

const workdCardStyles = {
  backgroundColor: COLORS.grey,
  padding: 20,
  borderRadius: 12,
  marginTop: 60,
};

const marketingCardStyles = {
  backgroundColor: COLORS.lightGreen,
  padding: 20,
  borderRadius: 12,
  marginTop: 40,
  paddingBottom: 60,
  border: "4px solid #48d893",
  width: 800,
  display: "flex",
};

const HeaderBottomRow = () => (
  <div
    style={{
      width: "100%",
      backgroundColor: COLORS.grey,
      marginTop: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      border: "2px solid white",
      paddingTop: 20,
      paddingBottom: 20,
    }}
  >
    {/* Column A */}

    <div
      style={{
        display: "flex",
        color: "white",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          // marginLeft: 30,
          marginRight: 6,
          fontSize: 22,
          fontWeight: "700",
        }}
      >
        2934{" "}
      </div>
      <div style={{ marginBottom: 3, color: "lightgrey", marginRight: 10 }}>
        friends
      </div>
    </div>

    <div
      style={{
        display: "flex",
        // color: "white",
        alignItems: "flex-end",
        marginLeft: 20,
      }}
    >
      <div
        style={{
          marginRight: 6,
          fontSize: 22,
          fontWeight: "700",
          color: "white",
        }}
      >
        18{" "}
      </div>
      <div style={{ marginBottom: 3, color: "lightgrey" }}>projects</div>
    </div>

    <p style={{ color: "white", marginLeft: 40 }}>
      <FontAwesomeIcon icon={faUserPlus} color={COLORS.mainGreen} size="lg" />
    </p>
  </div>
);

const HeaderComp = () => (
  <div style={headerCardStyles}>
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        paddingTop: 40,
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          src={
            "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            marginRight: 20,
            border: "2px solid white",
            marginLeft: 20,
            marginBottom: 10,
            objectFit: "cover",
          }}
        />
        <div style={{ marginTop: 10 }}>
          <h2 style={{ color: "white" }}>Joseph Walker</h2>
          <h3
            style={{
              marginTop: -20,
              color: COLORS.lightGreen,
              fontWeight: "400",
              fontSize: 16,
            }}
          >
            Structural Engineer
          </h3>
        </div>
      </div>
      <HeaderBottomRow />
    </div>
  </div>
);

const SideComp = () => (
  <div style={sideCompStyles}>
    <h4
      style={{
        color: "lightgrey",
        marginLeft: 10,
        fontSize: 18,
        marginTop: 5,
      }}
    >
      <span style={{ color: COLORS.mainGreen }}>UNIS Hub:</span> Joseph's Latest
      Status
    </h4>

    <p style={{ color: COLORS.lightGreen, marginLeft: 10, marginRight: 20 }}>
      We're in need of a class 2 HGV driver asap. Message me if interested!
    </p>

    <p style={{ color: "lightgrey", marginLeft: 10, marginRight: 20 }}>
      24 minutes ago from <span style={{ fontWeight: "600" }}>Leicester</span>
    </p>

    <div style={{ height: 20 }} />
  </div>
);

const InfoItem = ({ label, val }) => (
  <div style={{ display: "flex" }}>
    <p style={{ color: "white", fontWeight: "700" }}>
      {label} {}{" "}
    </p>
    <p style={{ color: "white", marginLeft: 4 }}>{val}</p>
  </div>
);

const InfoCard = () => (
  <div style={InfoCardStyles}>
    <h4 style={{ color: "lightgrey", marginLeft: 15, fontSize: 18 }}>
      <span style={{ color: COLORS.mainGreen }}>UNIS</span> Profile Info
    </h4>

    {/* Info */}
    <div style={{ paddingLeft: 15, paddingBottom: 15 }}>
      <InfoItem label="Location:" val="Liverpool" />
      <InfoItem label="Level:" val="Expert" />
      <InfoItem label="Skills:" val="Engineering, Structural, Planning" />
      <InfoItem label="Age:" val="36" />
      <InfoItem label="Gender:" val="Male" />
      <InfoItem label="Work Status:" val="Employed Full Time" />
    </div>
  </div>
);

const MarketingCard = () => (
  <div style={marketingCardStyles}>
    <div style={{ justifyContent: "flex-start" }}>
      <h2 style={{ color: COLORS.mainGreen, fontSize: 28 }}>
        A Fast, Simple & Secure Way to Manage Your Construction Company
      </h2>
      <div style={{ fontWeight: "600" }}>
        Using UNIS in your company gives you immediate access to everything you
        need to manage your team, projects and paperwork
      </div>

      <div style={{ alignSelf: "flex-start", display: "flex" }}>
        <div
          style={{
            backgroundColor: COLORS.mainGreen,
            alignSelf: "flex-start",
            display: "flex",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 12,
            paddingBottom: 12,
            marginTop: 12,
            borderRadius: 7,
            cursor: "pointer",
            fontSize: 14,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Get More Info
        </div>
      </div>
    </div>
  </div>
);

const Logo = () => (
  <div style={{}}>
    <img src={logoImage} style={{ height: 80, width: 80 }} />
  </div>
);

const TopBar = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 20,
    }}
  >
    <Logo />
    <div
      style={{
        backgroundColor: COLORS.mainGreen,
        borderRadius: 12,
        paddingRight: 24,
        paddingLeft: 24,
        cursor: "pointer",
        display: "flex",

        // paddingBottom: "2px",
        // paddingTop: 4,
        // paddingBottom: 4,
      }}
    >
      <p style={{ fontWeight: "700" }}>Get UNIS</p>
    </div>
  </div>
);

export default function Profile001m() {
  return (
    <div style={pageStyles}>
      {/* Top Bar */}
      <TopBar />

      {/* Header */}
      <HeaderComp />

      {/* Info Card */}
      <div style={{ justifyContent: "center", marginTop: 40 }}>
        <InfoCard />
        <SideComp />
      </div>

      {/* Gallery */}
      <HomeGalleryM />

      <HomeCopy1 />

      {/* Marketing Area */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MarketingCard />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <h4 style={{ color: "white", fontSize: 24, marginBottom: -40 }}>
          View Joseph's Cards
        </h4>
      </div>
      <LockedCards />
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <h4 style={{ color: "white", fontSize: 24 }}>Get UNIS to view cards</h4>
      </div>

      <p style={{ color: "white", textAlign: "center", marginTop: -10 }}>
        Real-Time Compliance
      </p>
      <p style={{ color: "white", textAlign: "center", marginTop: -10 }}>
        View All Cards & Credentials
      </p>
      <p style={{ color: "white", textAlign: "center", marginTop: -10 }}>
        Instant Access to Your Team's Information
      </p>
      <HomeCTA />

      <div style={{ height: 60 }} />
    </div>
  );
}
