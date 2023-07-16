import React from "react";
import TopBarCTA from "./header/TopBarCTA";
import TopBar from "./header/TopBar";
import Nav from "./header/Nav";

const Header = () => {
  return (
    <div className="md:pb-4">
      <TopBarCTA
        btnText="REGISTER NOW"
        message="Happy birthday, App Framework! How to build integrations with Contentful"
      />
      <TopBar
        profileImage={{ url: "/img/Profile.png", alt: "" }}
        firstName="Alen"
      />
      <Nav />
    </div>
  );
};

export default Header;
