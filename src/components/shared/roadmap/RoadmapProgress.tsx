import clsx from "clsx";
import React from "react";
import { roadmapProgressData } from "../../data/MainData";

function RoadmapProgress() {
  return (
    <div>
      <h2>Progress(3)</h2>
      <p className=" md:p_sm lg:p_medium">ideas prioritized for research</p>
      <div className=" md:mt-4 lg:mt-8 space-y-6">
        {roadmapProgressData.map((progress) => {
          return (
            <div className=" md:p-4 lg:p-8 rounded-x border-t-8 border-t-secondary bg-white">
              <div className=" flex items-center gap-4">
                <div className={clsx(progress.name && "w-2 h-2 rounded-full bg-secondary")}></div>
                <p className=" p_medium">{progress.name} </p>
              </div>
              <div>
                <h3 className=" md:text-sm md:py-2">{progress.title}</h3>
                <p className=" md:p_sm lg:p_medium">{progress.subtitle} </p>
              </div>
              <button className=" my-4 bg-white_deep text-tertiary">{progress.btn} </button>
              <div className=" flex items-center justify-between">
                <div className=" flex items-center gap-2 bg-white_deep rounded-x py-3 px-3">
                  <progress.numIcon />
                  <p className=" p_small text-primary font-bold ">{progress.number} </p>
                </div>
                <div className=" flex items-center gap-2">
                  <img src="/images/Path (1).svg" alt="" />
                  <h4>{progress.count} </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoadmapProgress;
