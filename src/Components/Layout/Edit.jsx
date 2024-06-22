import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
const Edit = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="md:hidden block">
   
      <div
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className=" fixed bottom-5 right-5 text-2xl h-14 w-14 flex items-center justify-center text-white bg-[#FF5C5C] rounded-full"
      >
        <FaPencilAlt />
      </div>{" "}
      <dialog id="my_modal_3" className="modal mt-20">
        <div className="modal-box w-full max-w-5xl p-0">
          <button
            type="button"
            onClick={() => document.getElementById("my_modal_3").close()}
            className="z-50 text-white btn btn-sm btn-circle btn-ghost absolute right-6 bg-gray-600 top-2"
          >
            ✕
          </button>
          <div className="px-10 pb-10  flex gap-3 justify-between">
            <div className="w-full">
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
                  <div className=" flex justify-between items-center">
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      setLoggedIn(true);
                      document.getElementById("my_modal_3").close();
                    }}
                    className=" rounded-full bg-[#2F6CE5] px-4 text-white py-2 font-bold mt-3"
                  >
                    Log in
                  </button>
                  {showLogin ? (
                      <p className="text-right">
                        or,
                        <span
                          className="text-info cursor-pointer"
                          onClick={() => setShowLogin(!showLogin)}
                        >
                           Create Account
                        </span>
                      </p>
                    ) : (
                      <p className="text-right">
                        or,
                        <span
                          className="text-info cursor-pointer"
                          onClick={() => setShowLogin(!showLogin)}
                        >
                          Sign In
                        </span>
                      </p>
                    )}
                  </div>
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
                  <div>
                    {" "}
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        setLoggedIn(true);
                        document.getElementById("my_modal_2").close();
                      }}
                      className=" px-4 rounded-full bg-[#2F6CE5] text-white py-2 font-bold mt-3"
                    >
                      Create Account
                    </button>
                    {showLogin ? (
                      <p className="text-right">
                        or,
                        <span
                          className="text-info cursor-pointer"
                          onClick={() => setShowLogin(!showLogin)}
                        >
                           Create Account
                        </span>
                      </p>
                    ) : (
                      <p className="text-right">
                        or,
                        <span
                          className="text-info cursor-pointer"
                          onClick={() => setShowLogin(!showLogin)}
                        >
                          Sign In
                        </span>
                      </p>
                    )}
                  </div>
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
              {showLogin ? (
                <p className="py-3 text-center font-bold">Forget Password?</p>
              ) : (
                <p className="py-3 text-center font-bold">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              )}
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Edit;
