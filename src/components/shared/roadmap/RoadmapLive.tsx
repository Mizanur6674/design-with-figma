import clsx from "clsx";
import React from "react";
import { roadmapLiveData } from "../../data/MainData";

function RoadmapLive() {
  return (
    <div>
      <h2>Live(1)</h2>
      <p className=" md:p_sm lg:p_medium">ideas prioritized for research</p>
      <div className=" md:mt-4 lg:mt-8 space-y-6">
        {roadmapLiveData.map((live) => {
          return (
            <div className=" md:p-5 lg:p-8 rounded-x border-t-8 border-t-bSky bg-white">
              <div className=" flex items-center gap-4">
                <div className={clsx(live.name && "w-2 h-2 rounded-full bg-bSky")}></div>
                <p className=" p_medium">{live.name} </p>
              </div>
              <div>
                <h3 className=" md:text-sm md:py-2">{live.title}</h3>
                <p className=" md:p_sm lg:p_medium">{live.subtitle} </p>
              </div>
              <button className="  my-4 bg-white_deep text-tertiary">{live.btn} </button>
              <div className=" flex items-center justify-between">
                <div className=" flex items-center gap-2 bg-white_deep rounded-x md:py-2 lg:py-3 px-3">
                  <live.numIcon />
                  <p className=" p_small text-primary font-bold ">{live.number} </p>
                </div>
                <div className=" flex items-center gap-2">
                  <img src="/images/Path (1).svg" alt="" />
                  <h4>{live.count} </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoadmapLive;
