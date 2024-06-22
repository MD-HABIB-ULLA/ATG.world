import { CiLocationOn } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { BiLike } from "react-icons/bi";
const Sideber = () => {
  return (
    <div className="pt-5 px-4">
      <div className="flex justify-between items-center border-b-2 border-gray-400 ">
        <div className="flex items-center gap-2">
          <CiLocationOn />{" "}
          <input
            type="text"
            placeholder="Enter your location"
            className=" outline-none border-none px-2 py-3"
          />
        </div>
        <FaPencilAlt className="text-black " />
      </div>
      <div className="flex gap-2 text-center text-sm mt-4">
        <MdErrorOutline className="text-4xl box-content" /> Your location will
        help us serve better and extend a personalised experience.
      </div>
      <div
        className="mt-4
      "
      >
        <ul className="space-y-4">
          <li className="flex items-center gap-1 mb-3 text-xl font-bold">
            <BiLike />
            REcommended Groups
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/bb0d/5f13/7ffa8afe7647578af2381ac9090c32e2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oZXe5VGb3a75kJfwPhyPTAnE6zN6e-0tO7XU3Qu1vvW5bg6EDhnl1jsamSEjhYsFkRTLQR-VFthvX-XhOQ9fhoXzjEGdnOYXdQ4kreL5wy1sN~oRu~Mgcln7ZvRR4YOw1qD5EkZuU6fi2Q4nsJVf4G6mcHywQNbH0RZV2yddFLRv2ZUQoJ3HcUtd9VeOESj-zV~zBV1zkg99TbfOPCqW1hJhsKxi4udbIfarrsi9AXxkzsGEAofmxh~SBKCfo7eDb2CGmIeU5mJ-AnxiFyuiZuXtu~eXmbYyWGXH6qqTqEuiB922WZ8YgzLfgNX1cCsXYRurouRVtf~G2pDCHvVtSQ__"
                alt=""
                className="h-12 w-12 object-cover rounded-full"
              />{" "}
              <p>Leisure</p>
            </div>
            <button className="px-3 py-1 rounded-full bg-gray-400/25"> Follow</button>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/bcef/452c/f2f96211f57819f3ef6b3922e0cd72cf?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kLUSAdd-~IwRNVaztr0k7RdyGTUBNdUJdiP61CvGzTpqYNeY1WGjOCH5JUwet2WVhtcV8VHUxtazRTPiugEpFlU7oK6DXwHeiUM6eTBDJYpWP6~6WOBA9J2ikLiv78kkQ~1-7hLCcphiWKFyPPC9ydkYfJ~o8GbL6K5nekmJpY5HDW3HUNohOgK55mOC2fsTBBeXQZE09ESpkjs1GA0j9xq5Ls3bWch~hk86hL1NPqVwzcT-GuZZiYo4KroXS5P3fdVLUITUAJD3hkuQWK1pKu3Vx5BEOH4eXn49mGXDNjubFzIlHU0dqvprlfRfG8NRQONScf5fbrYJ3pUb5E8cxw__"
                alt=""
                className="h-12 w-12 object-cover rounded-full"
              />{" "}
              <p>Activism</p>
            </div>
            <button className="px-3 py-1 rounded-full bg-gray-400/25"> Follow</button>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/8f0b/0ff9/829dac10d09fc377df6ec78c4098bc9a?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kZEbI0wrZVw01csJyD5NJmkp8H-2hP7br1kGN41cFmNQeAonQDAsn5csCEhPOwHC0VscNDuhePZUo3npNMOZQVpjazBCbVk~zbxwG2TsPBxQmWBGoUtbC2dnFnObvm-etqk7tjMQA6KdjAtoqoREDUxuihd61B39AsVDWSUWoZTICCj5RFzTNLMOKiaavl6aBSD-fPF3-am9XfWutYox9t1P1H7i4Bs67sVVi6MBN6F0Hk7SBMU03tvwRT79wkQZHrsuHUtqNYQ-xN9oCF2Cpczo-Wya59ZUDLkXKaME5CD07EZt2V2030rsBuZpjm0EhKfpIA3f-glJpNFDpsRV3w__"
                alt=""
                className="h-12 w-12 object-cover rounded-full"
              />{" "}
              <p>MBA</p>
            </div>
            <button className="px-3 py-1 rounded-full bg-gray-400/25"> Follow</button>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/0533/15a9/cf46af0ebdaae2ffbbb5718726788a19?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kT3UCifYZxw56VoxGNq0pQEC4atGaQy-QHnHeEZ5PiZOuxqNkIEzgn7ICyFa0tVR~g7xeMlzF8vK69yQ56yA3PNMIdWOupjp2w8U87lhDAM22ieL5vQ2gvs5l8ajULFmtAEA0RB335nk2LeRhhX1MSv20S9IlQOM5qzrdAKsRO6qCY7tanjrSoCE9BAOUCYPu8gzIn1OekTSaNiVTdsUUDbA3WfUPjp~B~TCVljkNWy9MZZZunQ-BkhQmDzWa3iBCKbP909Hx1IeRjkjCuD273CK61gX-RU5MpIHOB2CND1kk2TflzgqR9lXEd-Y2sge5CEPz6EGcdXojOrDDKwSew__"
                alt=""
                className="h-12 w-12 object-cover rounded-full"
              />{" "}
              <p>Philosophy</p>
            </div>
            <button className="px-3 py-1 rounded-full bg-gray-400/25"> Follow</button>
          </li>
          <li className="mt-4 text-right text-info">See More ...</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sideber;
