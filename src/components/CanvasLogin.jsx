import { faLock, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export default function CanvasLogin({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={toggleDrawer}>{children}</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        duration={300}
        lockBackgroundScroll={true}
        className="canvas">
        <div>
          <div className="h-[70px] relative flex items-center border-b-[1px] border-[rgba(0,0,0,.08)] px-8">
            <div
              onClick={toggleClose}
              className="cursor-pointer absolute top-4 ">
              <FontAwesomeIcon icon={faXmark} style={{ fontSize: "30px" }} />
            </div>
            <div className="absolute left-[50%] top-3 translate-x-[-50%]">
              <span className="text-[25px] font-medium">Login</span>
            </div>
          </div>
          <div>
            <div className="py-4 px-4">
              <div className="">
                <form>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Email address
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="password"
                      name="floating_password"
                      id="floating_password"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_password"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Password
                    </label>
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
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
