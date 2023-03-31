import {
  faBars,
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Canvas from "../../components/Canvas";
import DropDownLoginMenu from "../../components/DropDownLogin/DropDownLoginMenu/DropDownLoginMenu";
import CanvasNav from "../../others/CanvasNav";
import { formatMoney } from "../../others/formatMoney";

export default function Header() {
  const countHeart = useSelector((state) => state.counter.value);
  const total = useSelector((state) => state.counter.total);
  const numberProductCart = useSelector((state) => state.counter.totalQuantity);
  const [navbar, setNavbar] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeHeader);
  return (
    <div className="bg-[#fff]">
      <div className=" bg-black header_top ">
        <div className="flex justify-between items-center h-[45px] w-[76%] m-auto">
          <div className="text-[#bbbbbb] font-medium">
            Autumn Sales starts on November:{" "}
            <Link className="text-[#cfb481]">Sneak a peek now</Link>
          </div>
          <div className="text-[#bbbbbb] font-medium">
            <span className="mr-4">Our stores</span>
            <span className="mr-4">Userful info</span>
            <span>Help</span>
          </div>
        </div>
      </div>
      {/* logo */}
      <div
        className={
          navbar
            ? "header_logo_container_fix header_logo_container"
            : "h-[100px] w-[80%] m-auto header_logo_container flex items-center border-b-[1px] border-[rgba(0,0,0,.08)]"
        }>
        <div className="w-[220px] m-auto header_logo_img">
          <Link to={"/"}>
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/retina-babyshop.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </Link>
        </div>
        <CanvasNav>
          <div className="header_bar hidden">
            <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faBars} />
          </div>
        </CanvasNav>
      </div>
      {/* header nav */}
      <div
        className={
          navbar
            ? "fixed w-full z-10 bg-white top-0 header_nav"
            : "bg-white header_nav"
        }>
        <div className="flex items-center  h-[60px] w-[80%] m-auto justify-end">
          {navbar ? (
            <div className="w-[150px] m-auto ">
              <Link to={"/"}>
                <img
                  src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/retina-babyshop.png"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </Link>
            </div>
          ) : (
            ""
          )}
          <div className="flex text-sm font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#ebc989] nav_active relative leading-[60px] px-4 mr-[25px]"
                  : "text-[#2a2b39] leading-[60px] relative px-4 mr-[25px] header_hover"
              }>
              HOME
            </NavLink>
            <NavLink
              to={"/productInfor"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#ebc989] nav_active relative mr-[25px] leading-[60px] px-4"
                  : "text-[#2a2b39] leading-[60px] mr-[25px] relative px-4 header_hover"
              }>
              OUR PRODUCT
            </NavLink>
            <NavLink
              to={"/aboutUs"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#ebc989] nav_active relative mr-[25px] leading-[60px] px-4"
                  : "text-[#2a2b39] leading-[60px] mr-[25px] relative px-4 header_hover"
              }>
              ABOUT US
            </NavLink>
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#ebc989] nav_active relative mr-[25px] leading-[60px] px-4"
                  : "text-[#2a2b39] leading-[60px] mr-[25px] relative px-4 header_hover"
              }>
              BLOG
            </NavLink>
            <NavLink
              to={"/clienCenter"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#ebc989] nav_active relative mr-[25px] leading-[60px] px-4"
                  : "text-[#2a2b39] leading-[60px] px-4 mr-[25px] relative header_hover"
              }>
              CLIENT CENTER
            </NavLink>
            <NavLink
              to={"/faq"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#ebc989] nav_active relative mr-[25px] leading-[60px] px-4"
                  : "text-[#2a2b39] leading-[60px] px-4 mr-[25px] relative header_hover"
              }>
              FAQ
            </NavLink>
          </div>
          <div className="ml-[4%]">
            <ul className="flex relative items-center">
              <DropDownLoginMenu
                chidren={
                  <li className="mr-7 cursor-pointer">
                    <FontAwesomeIcon icon={faUser} />
                  </li>
                }
                hideDrop={navbar}
              />
              <li className="mr-7 relative">
                <FontAwesomeIcon icon={faHeart} />
                <span className="absolute top-[-8px] right-[-8px] text-white text-[12px] pl-[7px] pr-[6px] rounded-full bg-[#ebc989]">
                  {countHeart}
                </span>
              </li>
              <li className="mr-7 relative">
                <Canvas>
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="absolute top-[-8px] right-[-8px] text-white text-[12px] pl-[7px] pr-[6px] rounded-full bg-[#ebc989]">
                    {numberProductCart}
                  </span>
                </Canvas>
              </li>
              <li className="mr-7">{formatMoney(total)}</li>
              <li>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
