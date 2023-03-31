import { faLock, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

export default function DropDownLoginMenu({ chidren, hideDrop }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <span
        onClick={() => {
          setOpen(!open);
        }}>
        {chidren}
      </span>
      {open ? (
        <div
          ref={menuRef}
          className="absolute top-[60px] z-50 right-0 w-[320px] py-4 bg-white rounded-md shadow-md px-4">
          <div className="flex justify-between">
            <h1 className="text-[20px] font-semibold mb-4">Login</h1>
            <span
              className="cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}>
              <FontAwesomeIcon icon={faXmark} style={{ fontSize: "20px" }} />
            </span>
          </div>

          <form>
            <div className="relative z-5 mb-6 h-[55px] group bg-[#f0f2f6] px-4 py-1 rounded-md">
              <div className="flex items-center absolute top-[50%] translate-y-[-50%]">
                <div>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="mb-1 ml-3">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0  appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-[15px]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Username or email
                  </label>
                </div>
              </div>
            </div>
            <div className="relative z-5 mb-4 h-[55px] group bg-[#f0f2f6] px-4 py-1 rounded-md">
              <div className="flex items-center absolute top-[50%] translate-y-[-50%]">
                <div>
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="mb-1 ml-3">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0  appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-[15px]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Password
                  </label>
                </div>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 bg-gray-100 border-gray-300 rounded "
              />
              <label
                for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              class="text-white bg-black hover:bg-[rgba(0,0,0,0.8)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-3.5 text-center ">
              Login
            </button>
          </form>
          <p className="text-gray-500 hover:underline text-center mt-3 text-[15px] cursor-pointer mb-5">
            Lost your password?
          </p>
        </div>
      ) : null}
    </>
  );
}
