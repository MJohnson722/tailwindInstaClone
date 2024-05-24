import React from "react";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";

function Homepage() {
  return (
    <div className="flex flex-row justify-stretch">
      <div className="basis-1/5">
        <Sidenav />
      </div>
      <div className="basis-4/5">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
