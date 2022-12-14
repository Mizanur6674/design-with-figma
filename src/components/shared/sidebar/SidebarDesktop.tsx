import clsx from "clsx";
import React, { useState } from "react";
import { sideData1, sideData2 } from "../../data/sideData";

export const SidebarDesktop = () => {
  const [color, setColor] = useState(sideData1[0]);
  return (
    <div className="  hidden md:flex justify-between md:gap-4 lg:flex-col lg:gap-0">
      <div className=" flex justify-between lg:flex-col">
        <div className="relative w-full md:w-[16rem] lg:w-auto bg-gradient-to-l from-tertiary to-secondary flex items-center justify-between rounded-none md:rounded-x md:pb-6 px-4 md:px-6 py-4 md:pt-14 ">
          <div>
            <h2 className=" text-white ">Frontend Mentor</h2>
            <p className=" p_medium text-white_deep">Feedback Board</p>
          </div>
        </div>
      </div>

      <div className=" hidden md:block lg:flex  md:w-[16rem] h-full lg:w-auto overflow-hidden flex-wrap rounded-x p-5 lg:mt-5 bg-white">
        {sideData1.map((item, id) => {
          return (
            <button
              key={id}
              className={clsx("capitalize btn_s p_small px-5 py-2 mr-3 mb-3", color == item && "bg-tertiary text-white")}
              onClick={() => setColor(item)}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      <div className=" hidden md:block p-5 bg-white lg:mt-5 rounded-x md:w-[16rem] lg:w-auto">
        <div className=" flex items-center justify-between pb-4">
          <h3>Roadmap</h3>
          <a href="#" className=" p_small text-tertiary underline underline-offset-1">
            View
          </a>
        </div>
        <div className="">
          {sideData2.map((item) => {
            return (
              <div className=" flex items-center justify-between space-y-2">
                <div className=" flex items-center gap-4">
                  <div
                    className={clsx(
                      item.title === "planned" && "rounded-full w-2 h-2 bg-[#F49F85]",
                      item.title === "in-progress" && "rounded-full w-2 h-2 bg-[#AD1FEA]",
                      item.title === "live" && "rounded-full w-2 h-2 bg-[#62BCFA]"
                    )}
                  ></div>
                  <div className="p_medium text-white_gray capitalize">{item.title}</div>
                </div>
                <h3 className=" text-white_gray ">{item.count}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
