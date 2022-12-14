import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { roadmapData } from "../../data/MobileRoadmapData";

function MobileRoadmap() {
  const roadmapBtnSet = new Set(roadmapData.map((item) => item.categoris));
  const roadmapBtnArr = Array.from(roadmapBtnSet);
  const [active, setActive] = useState(roadmapBtnArr[0]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (active === "Planned(2)") {
      setDescription("ideas prioritized for research");
    } else if (active === "In-Progress(3)") {
      setDescription("Features currently being developed");
    } else {
      setDescription("Released Features");
    }
  }, [active]);

  return (
    <div>
      <div className=" flex items-center justify-between">
        {roadmapBtnArr.map((item) => {
          return (
            <div>
              <div className=" text-white_gray px-6">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setActive(item);
                  }}
                >
                  {item}
                </div>
              </div>
              <div
                className={clsx(
                  "  pb-5",
                  item === active && item === "Planned(2)" && " border-b-4 border-bOrrange",
                  item === active && item === "In-Progress(3)" && " border-b-4 border-secondary",
                  item === active && item === "Live(1)" && " border-b-4 border-bSky"
                )}
              ></div>
            </div>
          );
        })}
      </div>
      <div className=" border-b border-gray-300"></div>
      <div className="py-6 mx-6">
        <h2>{active}</h2>
        <p className="p_small ">{description}</p>
      </div>
      <div className=" container_box mb-4 space-y-5">
        {roadmapData
          .filter((e) => e.categoris == active)
          .map((item, index) => {
            return (
              <>
                <div>
                  <div
                    className={clsx(
                      "p-8 rounded-x border-t-8  bg-white",
                      item.categoris === "Planned(2)" && "border-bOrrange",
                      item.categoris === "In-Progress(3)" && "border-secondary",
                      item.categoris === "Live(1)" && "border-bSky"
                    )}
                  >
                    <div className=" flex items-center gap-4">
                      <div
                        className={clsx(
                          item.categoris === "Planned(2)" && "w-2 h-2 rounded-full bg-bOrrange",
                          item.categoris === "In-Progress(3)" && "w-2 h-2 rounded-full bg-secondary",
                          item.categoris === "Live(1)" && "w-2 h-2 rounded-full bg-bSky"
                        )}
                      ></div>
                      <p className=" p_medium">{item.name} </p>
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p className=" p_medium">{item.subtitle} </p>
                    </div>
                    <button className=" my-4 bg-white_deep text-tertiary">{item.btn} </button>
                    <div className=" flex items-center justify-between">
                      <div className=" flex items-center gap-2 bg-white_deep rounded-x py-3 px-3">
                        <item.numIcon />
                        <p className=" p_small text-primary font-bold ">{item.number} </p>
                      </div>
                      <div className=" flex items-center gap-2">
                        <img src="/images/Path (1).svg" alt="" />
                        <h4>{item.count} </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default MobileRoadmap;
