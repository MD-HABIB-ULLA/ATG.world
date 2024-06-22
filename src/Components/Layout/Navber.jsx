import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn);

  return (
    <div className="container m-auto md:block hidden ">
      <div className="navbar py-4 bg-white">
        <div className="navbar-start">
          <img src="https://i.ibb.co/qnQw0NK/whole.png" alt="" />
        </div>
        <div className="navbar-center w-1/3 hidden md:flex">
          <label className="input rounded-full bg-[#F2F2F2] w-full flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="grow outline-none focus:outline-none focus:border-none"
              placeholder="Search for your favorite groups in ATG"
            />
          </label>
        </div>
        <div className="navbar-end">
          {loggedIn ? (
            <div className="flex items-center gap-3">
              <img
                src="https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kjKCnjPcFg1HH~hdRR11kTiMj~Kjl6MTH3a2ErcsPp5tYPnlGWTTg251zbytSxPVYTC9SintIDgXfp8R4dmYoj5-bgsUjWUbSBrZg73DbJcV21ja5yZf5KIvDdeMgzhmAJrW4JhZydkUisP71LXPqux7JaSWCKkL-8Dl3PO6wcWloi5q8JPLP7B58P1zMBLXDG6YPsI9DKNqt3wvX~u~TBQSZohBijFJEbf8WTz~cA-aN1voGw~Bu6CTCGzmRe~btlT8xxAII-9BLDxf1Is7zthfUplTj26r4XfmMeAINFd-PybfNQybCBJ69WuPZ3Oeop7lRSc9L5kfcM8Txp-9ww__"
                alt=""
                className="h-12 w-12 object-cover rounded-full"
              />
              <p>Siddharth Goyal</p>
            </div>
          ) : (
            <p
              className="cursor-pointer font-bold"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Create account. <span className="text-info"> It’s free!</span>
            </p>
          )}
          <IoMdArrowDropdown className="ml-2 text-2xl" />
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box w-7/12 max-w-5xl p-0">
              <div>
                <p className="p-4 text-center bg-[#EFFFF4] text-[#008A45]">
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign up now 🤘🏼
                </p>
              </div>
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_2").close()}
                className="z-50 bg-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <div className="px-10 pb-10 flex gap-3 justify-between">
                <div className="w-1/2">
                  {showLogin ? (
                    <form className="w-full">
                      <p className="text-3xl font-bold my-5">Welcome back</p>
                      <input
                        type="email"
                        placeholder="Email"
                        className="border-x-2 border-gray-200 text-sm py-2 px-2 w-full outline-none rounded-t-sm bg-[#d9d9db3d]"
                      />
                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Password"
                          className="border-2 border-gray-200 text-sm py-2 px-2 w-full outline-none rounded-t-sm bg-[#d9d9db3d]"
                        />
                        <IoEyeOutline className="absolute right-3 top-3" />
                      </div>
                      <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          setLoggedIn(true);
                          document.getElementById("my_modal_2").close();
                        }}
                        className="w-full rounded-full bg-[#2F6CE5] text-white py-2 font-bold mt-3"
                      >
                        Log in
                      </button>
                    </form>
                  ) : (
                    <form className="w-full">
                      <p className="text-3xl font-bold my-5">Create Account</p>
                      <div className="flex w-full">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="border border-gray-200 bg-[#d9d9db3d] text-sm py-2 px-2 w-1/2 outline-none rounded-tl-sm"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="border border-l-0 border-gray-200 bg-[#d9d9db3d] text-sm py-2 px-2 w-1/2 outline-none rounded-tr-sm"
                        />
                      </div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="border-x-2 border-gray-200 text-sm py-2 px-2 w-full outline-none rounded-t-sm bg-[#d9d9db3d]"
                      />
                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Password"
                          className="border-2 border-gray-200 text-sm py-2 px-2 w-full outline-none rounded-t-sm bg-[#d9d9db3d]"
                        />
                        <IoEyeOutline className="absolute right-3 top-3" />
                      </div>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="border-2 border-t-0 border-gray-200 text-sm py-2 px-2 w-full outline-none rounded-t-sm bg-[#d9d9db3d]"
                      />
                      <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          setLoggedIn(true);
                          document.getElementById("my_modal_2").close();
                        }}
                        className="w-full rounded-full bg-[#2F6CE5] text-white py-2 font-bold mt-3"
                      >
                        Create Account
                      </button>
                    </form>
                  )}
                  <div className="w-full border border-gray-400 rounded-md flex items-center justify-center mt-3 gap-4 py-2">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F~8Tw-ATcsI2pGAxhPhupUwt3L7GNfW3yobHXm4vZUEhNGwIoS2ALlexWwzTOuBKHC4o3gtZ6RDMCESXNeleK2Nz~m7L6A-pOgYpi9PgH0Gwh~lyPD-LlKn4yCpoTu9bcw6O7IOCALT8pNGeqBKt5hujWvuzJZgsAb6pZj7T9zxGTtnFKNemXwcWicEX2MAm~cA~8nR8qCbW2f1fTlbj9LASHcvvWLtcQbqH-VgmPonmk1j1Xh8BaRtU472c~IZRd5xah4U0wU-T3fydhPPrLobPCPOnhkriX-eEv2rXHn0SH3c2rCwscNT-2FVfd5KTdGBYOAYVm1hVBTQ~HpeQwA__"
                      className="w-5 h-5"
                      alt=""
                    />
                    <p>Sign up with Facebook</p>
                  </div>
                  <div className="w-full border border-gray-400 rounded-md flex items-center justify-center mt-3 gap-4 py-2">
                    <img
                      src="https://i.ibb.co/c6CJRJ7/search.jpg"
                      className="w-5 h-5"
                      alt=""
                    />
                    <p>Sign up with Google</p>
                  </div>
                  {showLogin && (
                    <p className="py-3 text-center font-bold">
                      Forget Password?
                    </p>
                  )}
                </div>
                <div className="w-1/2 py-5">
                  {showLogin ? (
                    <p className="text-right">
                      New to this website?{" "}
                      <span
                        className="text-info cursor-pointer"
                        onClick={() => setShowLogin(!showLogin)}
                      >
                        Sign up
                      </span>
                    </p>
                  ) : (
                    <p className="text-right">
                      Already have an account?{" "}
                      <span
                        className="text-info cursor-pointer"
                        onClick={() => setShowLogin(!showLogin)}
                      >
                        Sign In
                      </span>
                    </p>
                  )}
                  <img src="/LoginImage.svg" alt="" />
                  <p className="text-[12px] text-gray-400 text-left">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                </div>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>Close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
