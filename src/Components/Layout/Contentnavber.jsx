import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
const Contentnavber = () => {
  const [joinGroup, setJoinGroup] = useState(false);
  return (
    <div className="w-full  bg-white s   ">
      <div className="border-b-2 flex justify-between ">
        <ul className="flex gap-4">
          <li className="text-black cursor-pointer font-bold  border-black border-b-2  duration-500 py-4 flex gap-1 ">
            <span className=" md:block hidden">All</span> Posts(32)
          </li>
          <li className="hover:text-black cursor-pointer font-bold text-gray-500 hover:border-black border-b-2 border-transparent duration-500 py-4 md:block hidden">
            Article
          </li>
          <li className="hover:text-black cursor-pointer font-bold text-gray-500 hover:border-black border-b-2 border-transparent duration-500 py-4 md:block hidden">
            Event
          </li>
          <li className="hover:text-black cursor-pointer font-bold text-gray-500 hover:border-black border-b-2 border-transparent duration-500 py-4 md:block hidden">
            Education
          </li>
          <li className="hover:text-black cursor-pointer font-bold text-gray-500 hover:border-black border-b-2 border-transparent duration-500 py-4 md:block hidden">
            Job
          </li>
        </ul>
        <div className="py-4 flex gap-2 ">
          <div className="px-3 py-2 bg-opacity-20 bg-gray-400 rounded-lg text-black font-bold flex gap-2 items-center md:hidden ">
            <p>Filter: All</p>
            <IoMdArrowDropdown className="text-2xl" />
          </div>
          <div className="px-3 py-2 bg-opacity-20 bg-gray-400 rounded-lg text-black font-bold md:flex hidden gap-2 items-center ">
            <p>Write a Post</p>
            <IoMdArrowDropdown className="text-2xl" />
          </div>
          <div
            onClick={() => setJoinGroup(!joinGroup)}
            className={`px-3 py-2 md:flex hidden rounded-lg  cursor-pointer text-white font-bold  gap-2 items-center ${joinGroup ? "bg-transparent border-2 border-black" : "bg-info"}`}
          >
            {joinGroup ? (
              <TbLogout2 className="text-black"/>
            ) : (
              <img
                src="https://i.ibb.co/xHvt8GK/Vector.png"
                className="h-3"
                alt=""
              />
            )}
            {joinGroup ? (
              <p className="text-black">Leave Group</p>
            ) : (
              <p>Join Group</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contentnavber;
