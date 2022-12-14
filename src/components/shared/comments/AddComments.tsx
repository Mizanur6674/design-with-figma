import React from "react";

function AddComments() {
  return (
    <div className=" mt-6 bg-white pt-6 px-6 md:px-8 pb-11">
      <div className=" py-6 md:pl-8">
        <h1 className=" py-6"> Add Comment</h1>
        <textarea name="text" id="text" className=" bg-white_light w-full pt-4 pb-11 pl-6">
          Type your comment here
        </textarea>
        <div className=" flex items-center justify-between mt-4">
          <p className=" p-medium"> 250 Characters left</p>
          <button className=" btn_pink1">Post Comment</button>
        </div>
      </div>
    </div>
  );
}

export default AddComments;
