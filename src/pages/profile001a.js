import React from "react";
import COLORS from "../../misc/COLORS";
import HomeCopy1 from "../../miscComps/HomeCopy1";
import HomeTiles from "../../miscComps/HomeTiles";
import HomeCTA from "../../miscComps/HomeCTA";
import HomeGallery from "../../miscComps/HomeGallery";

const pageStyles = {
  color: "#232129",
  padding: 24,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: COLORS.dark,
  borderRadius: 12,
  paddingTop: 10,
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
  padding: 20,
  borderRadius: 12,
  paddingRight: 160,
  paddingLeft: 160,
  marginLeft: 30,
  width: "100%",
};

const sideCompStyles = {
  backgroundColor: COLORS.grey,
  borderRadius: 12,
  width: "30%",
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
};

const HeaderBottomRow = () => (
  <div
    style={{
      width: "100%",
      backgroundColor: COLORS.mainGreen,
      marginTop: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: 12,
      border: "2px solid white",
    }}
  >
    {/* Column A */}
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          // color: "white",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            marginLeft: 30,
            marginRight: 4,
            fontSize: 22,
            fontWeight: "700",
          }}
        >
          2934{" "}
        </div>
        <div style={{ marginBottom: 3 }}>friends</div>
      </div>

      <div
        style={{
          display: "flex",
          // color: "white",
          alignItems: "flex-end",
          marginLeft: 30,
        }}
      >
        <div style={{ marginRight: 4, fontSize: 22, fontWeight: "700" }}>
          18{" "}
        </div>
        <div style={{ marginBottom: 3 }}>projects</div>
      </div>
      <div
        style={{
          display: "flex",
          // color: "white",
          alignItems: "flex-end",
          marginLeft: 30,
        }}
      >
        <div style={{ marginRight: 4, fontSize: 22, fontWeight: "700" }}>
          8{" "}
        </div>
        <div style={{ marginBottom: 3 }}>years exp</div>
      </div>
    </div>

    {/* Column B */}
    <div
      style={{
        marginRight: 30,
      }}
    >
      <p style={{ fontWeight: "700" }}>UNIS Verified</p>
    </div>
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
            height: 120,
            width: 120,
            borderRadius: 60,
            marginRight: 30,
            border: "2px solid white",
            marginLeft: 60,
            marginBottom: 10,
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
    <text>Side Comp</text>
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
    <h4 style={{ color: "lightgrey" }}>
      <span style={{ color: COLORS.mainGreen }}>UNIS</span> Profile Info
    </h4>

    {/* Info */}
    <div>
      <InfoItem label="Location:" val="Liverpool" />
      <InfoItem label="Level:" val="Expert" />
      <InfoItem
        label="Primary Skills:"
        val="Engineering, Structural, Planning"
      />
      <InfoItem label="Age:" val="36" />
      <InfoItem label="Gender:" val="Male" />
      <InfoItem label="Location:" val="Liverpool" />
    </div>
  </div>
);

const MarketingCard = () => (
  <div style={marketingCardStyles}>
    <h2 style={{ color: COLORS.mainGreen }}>Marketing Card</h2>

    <div>Get the UNIS app</div>
  </div>
);

export default function Profile001a() {
  return (
    <div style={pageStyles}>
      {/* Header */}
      <HeaderComp />

      {/* Info Card */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
        <SideComp />
        <InfoCard />
      </div>

      {/* Gallery */}
      <HomeGallery />

      <HomeCopy1 />

      {/* Marketing Area */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MarketingCard />
      </div>

      <HomeTiles />

      <HomeCTA />
    </div>
  );
}
