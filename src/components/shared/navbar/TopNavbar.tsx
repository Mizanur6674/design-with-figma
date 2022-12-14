import Link from "next/link";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

function TopNavbar() {
  return (
    <div>
      <div className=" bg-primary rounded-none md:rounded-x py-6 pl-6 px-4 flex items-center justify-between">
        {/* start suggetions */}
        <div className=" flex items-center gap-9">
          <div className=" hidden md:flex items-center gap-4">
            <img src="/images/bulb 2.png" alt=" navLogo" />
            <h3 className=" text-white">6 Suggetions</h3>
          </div>
          <div className=" flex items-end gap-2 justify-center ">
            <h4 className=" text-white_light">
              <span className=" font-[400]">Sort by:</span> Most Upvotes
            </h4>
            <HiOutlineChevronDown className=" text-white" />
          </div>
        </div>

        <div className=" lg:pl-4">
          <Link href="/createFeedback">
            <button className=" btn bg-secondary text-white"> + Add Feedback</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
