import Link from "next/link";
import React from "react";
import { MdChevronLeft } from "react-icons/md";

function RoadmapNavbar() {
  return (
    <div className=" bg-primary rounded-none md:rounded-x py-6 pl-6 px-4 flex items-center justify-between">
      <div>
        <Link href="/mainbox" className=" flex gap-2 cursor-pointer">
          <MdChevronLeft className=" text-white text-lg" />
          <h4 className=" text-white">Go Back</h4>
        </Link>
        <div className=" block pt-1">
          <h2 className="  text-white">Roadmap</h2>
        </div>
      </div>

      <div className=" lg:pl-4">
        <Link href="/createFeedback">
          <button className=" btn bg-secondary text-white"> + Add Feedback</button>
        </Link>
      </div>
    </div>
  );
}

export default RoadmapNavbar;
