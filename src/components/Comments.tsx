import clsx from "clsx";
import { HiChevronUp } from "react-icons/hi";
import { MdChevronLeft } from "react-icons/md";
import { commentData } from "./data/comments";
import AddComments from "./shared/comments/AddComments";

function Comments() {
  return (
    <div className=" container_box mt-6 mb-20">
      <div className=" flex items-center justify-between">
        <div className=" flex gap-3">
          <MdChevronLeft className=" text-primary_deep" />
          <h4 className=" p_small">Go Back</h4>
        </div>
        <button className=" btn_blue1">Edit Feedback</button>
      </div>
      <div className=" bg-white mt-8 mb-4 p-6">
        <div>
          <h3 className=" text-primary">Add a dark theme option</h3>
          <p className=" text-primary_light pb-3 pt-1">It would help people with light sensitivities and who prefer dark mode.</p>
          <button className="bg-white_deep px-4 py-2 rounded-x text-tertiary p_small">Feature</button>
        </div>
        <div className=" mt-4 flex items-center justify-between ">
          <div className="  w-16 h-8 bg-white_deep flex items-center rounded-x justify-center gap-2">
            <div>
              <HiChevronUp className=" text-tertiary text-bold" />
            </div>
            <p className="  text-primary_deep p_small">99</p>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none">
              <path
                fill="#CDD2EE"
                d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z"
              />
            </svg>
            <p className=" p_small font-bold text-primary_deep">4</p>
          </div>
        </div>
      </div>
      <div className=" mt-5 bg-white">
        <h1 className=" pt-6 pl-6 md:pl-8">4 Comments</h1>
        <div className=" px-6 md:px-8 pt-7 pb-8">
          {commentData.map((item) => {
            return (
              <div className="">
                <div className={clsx(item.id == 1 && "border-b-2 pb-8", item.id === 2 && "mt-8")}>
                  <div className="  flex items-center justify-between">
                    <div className=" flex items-center gap-4 md:gap-8">
                      <div>
                        <img src={item.img} alt="" />
                      </div>
                      <div className=" block">
                        <h3>{item.name}</h3>
                        <p className=" p_small">{item.title} </p>
                      </div>
                    </div>
                    <p className=" p_small text-tertiary">Replay</p>
                  </div>
                  <div className="pt-4 md:pl-[72px]">
                    <p className=" p_medium">{item.detail} </p>
                  </div>
                </div>
                {item.comment && (
                  <div className="  mt-8 relative space-y-5">
                    {item.comment?.map((comment) => {
                      return (
                        <div className="  pl-6 md:pl-11 before:border-l-2 before:absolute before:top-0 before:left-0 md:before:-top-20 md:before:left-5 before:h-[60%] md:before:h-[92%]">
                          <div className=" flex items-center justify-between">
                            <div className=" flex items-center">
                              <img src={comment.img} alt="" />

                              <div className=" block pl-4 md:pl-8">
                                <h3>{comment.name} </h3>
                                <p className=" p_small"> {comment.title}</p>
                              </div>
                            </div>
                            <p className=" p_small text-tertiary">{comment.replay} </p>
                          </div>
                          <div className=" flex items-center gap-1 pt-4 md:pl-[72px]">
                            <p className=" p_medium">
                              <span className=" p_medium text-secondary font-bold">{comment.mention} </span> {comment.detail}{" "}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        <AddComments />
      </div>
    </div>
  );
}

export default Comments;
