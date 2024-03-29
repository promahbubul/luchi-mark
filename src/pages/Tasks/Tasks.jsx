import React, { useState } from "react";
import { CgSearch } from "../../assets/Icons/Icons";
import TaskCard from "./TaskCard";
import MainHeader from "../../components/MainHeader/MainHeader";

const Tasks = () => {
  const [todos, setTodos] = useState([1, 2]);
  const [progresses, setprogresses] = useState([]);
  const [reviews, setreviews] = useState([1, 2, 3, 4]);
  const [dones, setdones] = useState([1]);
  return (
    <div>
      <MainHeader />
      <div className="relative mt-4 ">
        <input
          type="text"
          name=""
          className="bg-secondary text-primary placeholder:text-primary  text-sm font-medium leading-normal py-2 px-5 pl-8 outline-none rounded-md"
          id=""
          placeholder="Search"
        />
        <CgSearch className="absolute top-2 left-1.5 text-xl font-medium text-primary" />
      </div>

      <div className="flex flex-row w-100%  overflow-hidden overflow-x-scroll scrollbar-hide w-full     gap-3 mt-6">
        {/* Todo */}
        <div className=" w-full  ">
          <h3 className="text-black-1 font-medium text-xl">To do</h3>
          <div className="bg-secondary w-full box-border overflow-y-auto scrollbar-hide gap-2 flex flex-col scroll-auto	  p-2 mt-3 rounded-md h-[calc(100vh-240.66px)]">
            {todos.map((todo, index) => (
              <TaskCard key={index} />
            ))}
          </div>
        </div>
        {/* In progress */}
        <div className=" w-full border-purple-400 ">
          <h3 className="text-black-1 font-medium text-xl">In progress</h3>
          <div className=" w-full bg-secondary  w-full overflow-y-auto scrollbar-hide gap-2 flex flex-col scroll-auto p-2 mt-3 rounded-md h-[calc(100vh-240.66px)]">
            {progresses.map((progress, index) => (
              <TaskCard key={index} />
            ))}
          </div>
        </div>
        {/* In review */}
        <div className="  w-full border-purple-400 ">
          <h3 className="text-black-1 font-medium text-xl">In review</h3>
          <div className="bg-secondary overflow-y-auto scrollbar-hide gap-2 flex flex-col scroll-auto p-2 mt-3 rounded-md h-[calc(100vh-240.66px)]">
            {reviews.map((review, index) => (
              <TaskCard key={index} />
            ))}
          </div>
        </div>
        {/* Done */}
        <div className="  w-full border-purple-400 ">
          <h3 className="text-black-1 font-medium text-xl">Done</h3>
          <div className="bg-secondary overflow-y-auto scrollbar-hide gap-2 flex flex-col scroll-auto p-2 mt-3 rounded-md h-[calc(100vh-240.66px)]">
            {dones.map((done, index) => (
              <TaskCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
