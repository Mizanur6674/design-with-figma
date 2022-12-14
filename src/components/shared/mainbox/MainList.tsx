import Link from "next/link";
import React from "react";
import { mainData } from "../../data/MainData";

function MainList() {
  return (
    <div>
      <div className=" space-y-5">
        {mainData.map((item) => {
          return (
            <div>
              <div className=" bg-white rounded-x flex justify-between items-center px-8 py-7">
                <div className=" flex gap-10">
                  <div className="w-10 h-[53px] bg-white_deep rounded-x space-y-1">
                    <item.numIcon className=" text-tertiary mx-auto mt-2" />
                    <p className=" text-primary_deep text-center p_small">{item.number}</p>
                  </div>
                  <div>
                    <h3 className=" text-primary">{item.title} </h3>
                    <p className=" text-primary_light pb-3 pt-1">{item.subtitle} </p>
                    <button className="bg-white_deep px-4 py-2 rounded-x text-tertiary p_small">{item.btn}</button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none">
                    <path
                      fill="#CDD2EE"
                      d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z"
                    />
                  </svg>
                  <p className=" p_small font-bold text-primary_deep">{item.count}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainList;
