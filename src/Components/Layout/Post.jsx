import { BsThreeDots } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
const Post = () => {
  const data = [{}];
  return (
    <div className="pt-4 px-3 space-y-4">
      {/* post -1  */}
      <div className="card card-compact  bg-base-100 shadow-xl ">
        <figure className="h-[220px]">
          <img src="/Rectangle 5.png" alt="Shoes" className="h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">✍️ Article</h2>
          <div className="flex justify-between gap-4">
            <p className="text-2xl font-bold w-7/12">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </p>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                <BsThreeDots className="text-2xl" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Edit</a>
                </li>
                <li>
                  <a>Report</a>
                </li>
                <li>
                  <a>Option 3</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <div className="card-actions mt-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/D4vCbYX/f42d73f4b2b7835b4c918c4edcf10f64.jpg"
                alt=""
                className="h-12 w-12 object-cover rounded-full"
              />
              <p>Sarthak Kamra</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex items-center gap-2">
                <BsEye />
                <p>1.4k views</p>
              </div>
              <CiShare2 className="p-2 box-content rounded-lg text-2xl bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
      {/* post-2 */}
      <div className="card card-compact  bg-base-100 shadow-xl ">
        <figure className="h-[220px]">
          <img
            src="https://i.ibb.co/rps23m0/c8e32137d06a7bb3fd57b6dfb4e07bfe.jpg"
            alt="Shoes"
            className="h-full w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">🔬️ Education</h2>
          <div className="flex justify-between gap-4">
            <p className="text-2xl font-bold w-7/12">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </p>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                <BsThreeDots className="text-2xl" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Edit</a>
                </li>
                <li>
                  <a>Report</a>
                </li>
                <li>
                  <a>Option 3</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <div className="card-actions mt-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/8BF8V7m/15d7211204149d93adda6dfafb5d81f2.jpg"
                alt=""
                className="h-12 w-12 object-cover rounded-full"
              />
              <p>Sarah West</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex items-center gap-2">
                <BsEye />
                <p>1.4k views</p>
              </div>
              <CiShare2 className="p-2 box-content rounded-lg text-2xl bg-gray-100" />
            </div>
          </div>
        </div>
      </div>

      {/* POST - 3  */}
      <div className="card card-compact  bg-base-100 shadow-xl ">
        <figure className="h-[220px]">
          <img
            src="https://i.ibb.co/rps23m0/c8e32137d06a7bb3fd57b6dfb4e07bfe.jpg"
            alt="Shoes"
            className="h-full w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">🔬️ Education</h2>
          <div className="flex justify-between gap-4">
            <p className="text-2xl font-bold w-7/12">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </p>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                <BsThreeDots className="text-2xl" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Edit</a>
                </li>
                <li>
                  <a>Report</a>
                </li>
                <li>
                  <a>Option 3</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
          <div className="card-actions mt-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/8BF8V7m/15d7211204149d93adda6dfafb5d81f2.jpg"
                alt=""
                className="h-12 w-12 object-cover rounded-full"
              />
              <p>Sarah West</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex items-center gap-2">
                <BsEye />
                <p>1.4k views</p>
              </div>
              <CiShare2 className="p-2 box-content rounded-lg text-2xl bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Post;
