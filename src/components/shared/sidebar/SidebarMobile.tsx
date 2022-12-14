import React, { useState } from "react";
import { sideData1, sideData2 } from "../../data/sideData";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

// start bg layar
const Drawer = () => {
  return (
    <div className="absolute top-[83px] z-20 right-0 w-full h-screen bg-black bg-opacity-50">
      <div className="  pt-6 ml-auto w-[20rem] bg-white_light h-full">
        <div className=" w-[16rem] space-y-5 mx-auto">
          <div className=" flex flex-wrap rounded-x py-6 pl-4 bg-white">
            {sideData1.map((item) => {
              return <button className=" capitalize btn_s p_small px-5 py-2 mr-3 mb-3">{item.title}</button>;
            })}
          </div>

          <div className=" mt-5 rounded-x bg-white p-6">
            <div className=" flex items-center justify-between pb-4">
              <h3>Roadmap</h3>
              <a href="#" className=" p_small text-tertiary underline underline-offset-1">
                View
              </a>
            </div>
            <div className=" ">
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
      </div>
    </div>
  );
};
// end bg layar

const SidebarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative ">
      <div className=" w-full md:w-[16rem] lg:w-auto bg-gradient-to-l from-tertiary to-secondary flex items-center justify-between rounded-none md:rounded-x md:pb-6 px-4 md:px-6 py-4 md:pt-14 ">
        <div>
          <h2 className=" text-white ">Frontend Mentor</h2>
          <p className=" p_medium text-white_deep">Feedback Board</p>
        </div>

        <div
          className=" md:hidden text-white cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <RxCross1 className=" w-8 h-6" /> : <FiMenu className=" w-8 h-6" />}
        </div>
      </div>

      {isOpen ? <Drawer /> : null}
    </div>
  );
};

export default SidebarMobile;
