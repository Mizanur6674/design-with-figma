import React from "react";
import { mainData } from "../../data/MainData";

function MainListMobileCard() {
  return (
    <div>
      <div className="mt-8 mb-12 space-y-5">
        {mainData.map((item) => {
          return (
            <div className=" bg-white mt-8 mb-4 p-6">
              <div>
                <h3 className=" text-primary">{item.title} </h3>
                <p className=" text-primary_light pb-3 pt-1">{item.subtitle} </p>
                <button className="bg-white_deep px-4 py-2 rounded-x text-tertiary p_small">{item.btn}</button>
              </div>
              <div className=" mt-4 flex items-center justify-between ">
                <div className="  w-16 h-8 bg-white_deep flex items-center rounded-x justify-center gap-2">
                  <div>
                    <item.numIcon className=" text-tertiary text-bold" />
                  </div>
                  <p className="  text-primary_deep p_small">{item.number}</p>
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

export default MainListMobileCard;
