import React from "react";
import TopNavbar from "./shared/navbar/TopNavbar";
import MainList from "./shared/mainbox/MainList";
import MainListMobileCard from "./shared/mainbox/MainListMobileCard";
import { SidebarDesktop } from "./shared/sidebar/SidebarDesktop";
import SidebarMobile from "./shared/sidebar/SidebarMobile";

function MainBox() {
  return (
    <div>
      <div className=" relative md:hidden mb-8">
        <SidebarMobile />
        <TopNavbar />
      </div>
      <div className="  container_box">
        <div className=" lg:flex lg:gap-7">
          <aside className=" hidden md:block w-full md:mb-10 lg:mb-0 lg:w-[18rem]">
            <SidebarDesktop />
          </aside>
          <main className=" flex-1 flex-col">
            <div className=" hidden md:block">
              <TopNavbar />
            </div>
            <div className=" hidden md:block">
              <MainList />
            </div>
            <div className=" block md:hidden">
              <MainListMobileCard />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default MainBox;
