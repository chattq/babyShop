import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Canvas from "../components/Canvas";
import { formatMoney } from "./formatMoney";

export default function CanvasNav({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleClose = () => {
    setIsOpen(false);
  };
  const total = useSelector((state) => state.counter.total);
  const countHeart = useSelector((state) => state.counter.value);
  const numberProductCart = useSelector((state) => state.counter.listCart);
  return (
    <>
      <button onClick={toggleDrawer}>{children}</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        duration={300}
        size={210}
        lockBackgroundScroll={true}
        style={{ background: "#000000" }}>
        <div className="bg-[#000000]">
          <div className="h-[70px] relative  flex items-center  px-5">
            <span onClick={toggleClose} className="cursor-pointer">
              <FontAwesomeIcon
                icon={faXmark}
                style={{ fontSize: "25px", color: "white" }}
              />
            </span>
          </div>
          <div>
            <div className=" canvasNav_container_body">
              <div className=" canvasNav_box_body h-[60px] w-[90%] m-auto">
                <div className="ml-[4%]">
                  <ul className="flex justify-center flex-wrap">
                    <li className="mr-6 ">
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ color: "white" }}
                      />
                    </li>
                    <li className="mr-4 relative">
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ color: "white" }}
                      />
                      <span className="absolute top-[-8px] right-[-8px] text-white text-[12px] pl-[7px] pr-[6px] rounded-full bg-[#ebc989]">
                        {countHeart}
                      </span>
                    </li>
                    <li className=" mr-6 relative">
                      <Canvas>
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          style={{ color: "white" }}
                        />
                        <span className="absolute top-[-8px] right-[-8px] text-white text-[12px] pl-[7px] pr-[6px] rounded-full bg-[#ebc989]">
                          {numberProductCart?.length}
                        </span>
                      </Canvas>
                    </li>
                    <li className="mr-6 text-white">{formatMoney(total)}</li>
                    <li className="mt-4">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ color: "white" }}
                      />
                    </li>
                  </ul>
                </div>
                <div className="flex canvasNav_body_nav text-sm font-semibold">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ebc989] nav_active relative leading-[60px] px-4"
                        : "text-white leading-[60px]"
                    }>
                    HOME
                  </NavLink>
                  <NavLink
                    to={"/productInfor"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ebc989] nav_active relative leading-[60px] px-4"
                        : "text-white leading-[60px]"
                    }>
                    OUR PRODUCT
                  </NavLink>
                  <NavLink
                    to={"/aboutUs"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ebc989] nav_active relative leading-[60px] px-4"
                        : "text-white leading-[60px]"
                    }>
                    ABOUT US
                  </NavLink>
                  <NavLink
                    to={"/blog"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ebc989] nav_active relative leading-[60px] px-4"
                        : "text-white leading-[60px]"
                    }>
                    BLOG
                  </NavLink>
                  <NavLink
                    to={"/clienCenter"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ebc989] nav_active relative leading-[60px] px-4"
                        : "text-white leading-[60px]"
                    }>
                    CLIENT CENTER
                  </NavLink>
                  <NavLink
                    to={"/faq"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ebc989] nav_active relative leading-[60px] px-4"
                        : "text-white leading-[60px]"
                    }>
                    FAQ
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
