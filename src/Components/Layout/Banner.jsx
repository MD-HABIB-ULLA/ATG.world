import { FaArrowLeft } from "react-icons/fa";
const Banner = () => {
  return (
    <div
      className=" md:h-[440px] h-[236px] bg-center bg-cover "
      style={{
        backgroundImage: "url(https://i.ibb.co/StN2M7j/Rectangle-2.png)",
      }}
    >
      <div className="  h-full  bg-black/50 text-white">
        <div className="flex h-full flex-col md:justify-end justify-between  w-10/12 m-auto ">
          {" "}
          <div className="w-full md:hidden block pt-5 ">
            <div className="w-full flex justify-between">
              {" "}
              <FaArrowLeft className="text-2xl" />
              <button className="btn  bg-transparent text-white border-white border-2 rounded-lg">
                Join Group
              </button>
            </div>
          </div>
          <div className=" md:pb-10 pb-5 space-y-2">
            <h1 className="md:text-4xl text-3xl font-bold">
              Computer Engineering
            </h1>
            <h1 className="text-base">
              142,765 Computer Engineers follow this
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
