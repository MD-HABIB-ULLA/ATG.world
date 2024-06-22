import Contentnavber from "./Contentnavber";
import Post from "./Post";
import Sideber from "./Sideber";

const Content = () => {
  return (
    <div className="lg:w-9/12 w-full lg:p-0 px-3 m-auto ">
      <div className="sticky top-0 z-10">
        <Contentnavber />
      </div>
      <div className=" grid lg:grid-cols-6 grid-cols-1">
        <div className="w-full lg:col-span-4">
          <Post />
        </div>
        <div className="col-span-2 lg:block hidden "><Sideber/></div>
      </div>
    </div>
  );
};

export default Content;
