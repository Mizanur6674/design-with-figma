import clsx from "clsx";
import React from "react";
import { roadmapPlannedData } from "../../data/MainData";

function RoadmapPlanned() {
  return (
    <div>
      <h2>Planned(2)</h2>
      <p className=" md:p_sm lg:p_medium">ideas prioritized for research</p>
      <div className=" md:mt-4 lg:mt-8 space-y-6">
        {roadmapPlannedData.map((planned) => {
          return (
            <div className=" md:p-4 lg:p-8 rounded-x border-t-8 border-bOrrange bg-white">
              <div className=" flex items-center gap-4">
                <div className={clsx(planned.name && "w-2 h-2 rounded-full bg-bOrrange")}></div>
                <p className=" p_medium ">{planned.name} </p>
              </div>
              <div>
                <h3 className=" md:text-sm md:py-2">{planned.title}</h3>
                <p className=" md:p_sm lg:p_medium">{planned.subtitle} </p>
              </div>
              <button className=" my-4 bg-white_deep text-tertiary">{planned.btn} </button>
              <div className=" flex items-center justify-between">
                <div className=" flex items-center gap-2 bg-white_deep rounded-x py-3 px-3">
                  <planned.numIcon />
                  <p className=" p_small text-primary font-bold ">{planned.number} </p>
                </div>
                <div className=" flex items-center gap-2">
                  <img src="/images/Path (1).svg" alt="" />
                  <h4>{planned.count} </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoadmapPlanned;
