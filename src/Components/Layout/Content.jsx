import Contentnavber from "./Contentnavber";
import Post from "./Post";

const Content = () => {
  return (
    <div className="md:w-9/12 w-full md:p-0 px-3 m-auto ">
      <div className="sticky top-0 z-10">
        <Contentnavber />
      </div>
      <div className=" grid md:grid-cols-6 grid-cols-1">
        <div className="w-full md:col-span-4">
          <Post />
        </div>
        <div className="col-span-2 md:block hidden "></div>
      </div>
    </div>
  );
};

export default Content;
