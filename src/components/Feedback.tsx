import React from "react";
import { SidebarDesktop } from "./shared/sidebar/SidebarDesktop";
import SidebarMobile from "./shared/sidebar/SidebarMobile";
import TopNavbar from "./shared/navbar/TopNavbar";

function Feedback() {
  return (
    <div>
      <div className=" md:hidden mb-8">
        <SidebarMobile />
        <TopNavbar />
      </div>
      <div className="  container_box">
        <div className=" mb-12 flex flex-col lg:flex-row lg:gap-7">
          <div className="hidden md:block w-full md:mb-10 lg:w-[18rem]">
            <SidebarDesktop />
          </div>
          <div className="  flex-1">
            <div className="hidden md:block md:pb-6">
              <TopNavbar />
            </div>
            <div className="  bg-white h-full flex items-center justify-center">
              <div className=" py-20 px-6 w-[30rem] mx-auto text-center">
                <div>
                  <div className="w-full flex justify-center">
                    <img src="/images/Group 16.png" alt="" />
                  </div>
                  <h1 className=" p-4 text-primary">There is no feedback yet.</h1>
                  <p className=" text-white_gray pb-12">
                    Got a suggetion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app
                  </p>
                  <button className=" btn_pink1 text-white">+ Add Feedback</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
