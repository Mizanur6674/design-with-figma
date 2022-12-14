import clsx from "clsx";
import React from "react";
import MobileRoadmap from "./shared/roadmap/MobileRoadmap";
import RoadmapLive from "./shared/roadmap/RoadmapLive";
import RoadmapNavbar from "./shared/roadmap/RoadmapNavbar";
import RoadmapPlanned from "./shared/roadmap/RoadmapPlanned";
import RoadmapProgress from "./shared/roadmap/RoadmapProgress";

function Roadmap() {
  return (
    <div>
      <div className=" md:hidden">
        <RoadmapNavbar />
        <MobileRoadmap />
      </div>
      <div className=" container_box ">
        <div className="hidden md:block">
          <div>
            <RoadmapNavbar />
          </div>
          <div className=" md:hidden"></div>
          <div className=" mt-12 md:grid grid-cols-3 gap-3 lg:gap-4">
            <RoadmapPlanned />
            <RoadmapProgress />
            <RoadmapLive />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
