import React from "react";
import { MdChevronLeft } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi";
import Link from "next/link";

function CreateFeedback() {
  return (
    <div className=" h-full bg-white_light flex justify-center">
      <div className="  relative wrapper_cf">
        <Link href="/mainbox">
          <div className=" flex gap-2 cursor-pointer">
            <MdChevronLeft className=" text-tertiary text-lg" />
            <h4 className=" pb-10">Go Back</h4>
          </div>
        </Link>
        <div className=" bg-white mt-9 pt-7 pb-10 md:pb-0 mx-6 md:mx-0 px-6 md:px-10">
          <div className=" absolute top-16   w-max rounded-full px-5 py-5 bg-gradient-to-tr from-blue-600 via-purple-700 to-pink-600">
            <BiPlusMedical className=" text-white text-lg" />
          </div>
          <h1 className=" mt-12">Create New Feedback</h1>
          <div className="mt-10">
            <h4>Feedback Title</h4>
            <p className=" p_sm">Add a short,descriptive headline</p>
            <input type="text" className="w-full py-3 bg-white_light" />
          </div>
          <div className=" py-6">
            <h4>Category</h4>
            <p className=" p_sm pb-4">Choose a category for your feedback</p>
            <div className=" text-primary py-3 px-6 bg-white_light w-full ">
              <div className=" flex items-center justify-between">
                <a href="#" className=" text-primary">
                  Feature
                </a>
                <HiOutlineChevronDown className=" text-tertiary" />
              </div>
            </div>
          </div>
          <div className=" mb-8">
            <h4>Feedback Detail</h4>
            <p className=" p_sm pb-4"> include any specific comments on what should be improve, added, etc.</p>
            <textarea
              name="text"
              className=" py-10 px-6 w-full bg-white_light placeholder:p_sm placeholder: text-primary placeholder:"
              placeholder=" It would help people with light sensitivities and who prefer dark mode"
            ></textarea>
          </div>
          <div className="  md:flex items-center justify-end gap-4 md:pb-5 space-y-4 md:space-y-0 ">
            <button className=" block w-full md:w-24 bg-primary"> Cancel</button>
            <button className=" w-full md:w-48 bg-secondary"> Add Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateFeedback;
