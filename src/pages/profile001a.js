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
  paddingLeft: 40,
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
          color: "white",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            marginLeft: 30,
            marginRight: 6,
            fontSize: 22,
            fontWeight: "700",
          }}
        >
          2934{" "}
        </div>
        <div style={{ marginBottom: 3, color: "lightgrey" }}>friends</div>
      </div>

      <div
        style={{
          display: "flex",
          // color: "white",
          alignItems: "flex-end",
          marginLeft: 30,
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
      <div
        style={{
          display: "flex",
          // color: "white",
          alignItems: "flex-end",
          marginLeft: 30,
        }}
      >
        <div
          style={{
            marginRight: 6,
            fontSize: 22,
            color: "white",
            fontWeight: "700",
          }}
        >
          8{" "}
        </div>
        <div style={{ marginBottom: 3, color: "lightgrey" }}>years exp</div>
      </div>
    </div>

    {/* Column B */}
    <div
      style={{
        marginRight: 30,
      }}
    >
      <p style={{ fontWeight: "700", color: COLORS.mainGreen }}>
        UNIS Verified
      </p>
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
    <div style={{ justifyContent: "flex-start" }}>
      <h2 style={{ color: COLORS.mainGreen, fontSize: 36 }}>
        A Fast, Simple & Secure Way to Manage Your Construction Company
      </h2>
      <div style={{ fontWeight: "600" }}>
        Using UNIS in your company gives you immediate access to everything you
        need to manage your team, projects and paperwork
      </div>

      <div
        style={{
          backgroundColor: COLORS.mainGreen,
          alignSelf: "flex-start",
          display: "flex",
          paddingLeft: 10,
          paddingRight: 10,
          width: 100,
          paddingTop: 8,
          paddingBottom: 8,
          marginTop: 12,
          borderRadius: 7,
          cursor: "pointer",
          fontSize: 14,
          fontWeight: "700",
        }}
      >
        Get More Info
      </div>
    </div>
  </div>
);

const Logo = () => (
  <div style={{ marginLeft: 40 }}>
    <img
      src="https://lh3.googleusercontent.com/pw/AIL4fc_uzbWK1Nc6cBRVolP7LuqlBbCZ0acViPsGoHcXaOtwcszpEgC6wGkc25yokZgc3a5o3W1fbkgADKVByx_JK4ryUkofxkOAi7FkS8ejkIbsPdsLNzuiXc7_6Bd-DB4Qg-Fk6ohn8rwTtBepRb72RTMWOMcxAE3cdMJq7GjWZTeDZ78jNkvmJZ0H09Y6t8egZDJ_3_BYl00QYsCXsZdop-G60ob0YdYDoMD3NNaYDpWYy14OA_1Us3S26bd4bzfR5EYlaTqENW0HZNpzkVHJSMfeQbzh_NBXsYJi-q3xeDQgRivbeCKzBL1Ppxx-BJ5abzsTN0IYYcI0yeICi0EoqIrw5Meh1UYeVWCNP171SswDjnweuMesXaxPY-tyqUmDMC9oQ5bVlui0Z34U28a3tV1EjD4magHJ41kTv7vXfBc8_xCrg9iwujAz5q9fmLPcQsPujNSMqfiQc30MrC5XR5IvB4SvLSX-a9bjJdme2pSlJw0SgvAJ7vV0yrnWmkjxrq9vSJBtqtX_Ko72gK7ykddTXjBxXlXRjEXRmVdCEP62aunuEdxTZdWs9k82AVUP8edQMAbtrUIAZl9PeeEfhdk8yO6GsCVNi5GjI5ootJE_SkdBQh7Aw07QWdHxk189FEMVSkvjJCnqZ1SyxHO8GZg8jYmOJDLCUMS4hpjm3py98FqCCo1_H50KPHkgd2p1t9ESa0BJkr5jSoyO25TN3x1qhVDqM7Pr0Qn9LRtHrWewaE0OP5XkslkU6AvuAwmTaKXDZ42Ot-fW4T2UZRLu94ky0sm9vKicsZ8xp5J1pv0VdLvrUrHgWf0vX5bi4rOH3CzBC9GCd0Z0ZFqPBy3FIUbaj9xXE74t7vbBGS6fBh20z7rcnVx4y69jRss0klP5zsIxkLkjbTvsL71_RZb6Hk60q0zH6K0wf-lj5yYtLSuSQim2zKoKgt5QPGWx=s328-no?authuser=0"
      style={{ height: 80, width: 80, marginTop: 20 }}
    />
  </div>
);

const TopBar = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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
        paddingTop: "2px",
        paddingBottom: "2px",
        // paddingTop: 4,
        // paddingBottom: 4,
      }}
    >
      <p style={{ fontWeight: "700" }}>Get UNIS</p>
    </div>
  </div>
);

export default function Profile001a() {
  return (
    <div style={pageStyles}>
      {/* Top Bar */}
      <TopBar />

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
