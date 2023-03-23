import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useSelector } from "react-redux";
import { formatMoney } from "../others/formatMoney";

import ProductCart from "./ProductCart";
export default function Canvas({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleClose = () => {
    setIsOpen(false);
  };
  const productCart = useSelector((state) => state.counter.listCart);
  const total = useSelector((state) => state.counter.total);

  return (
    <>
      <button onClick={toggleDrawer}>{children}</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        duration={300}
        size={410}
        lockBackgroundScroll={true}
        className="canvas">
        <div>
          <div className="h-[70px] relative flex items-center border-b-[1px] border-[rgba(0,0,0,.08)] px-8">
            <span onClick={toggleClose} className="cursor-pointer">
              <FontAwesomeIcon icon={faXmark} style={{ fontSize: "25px" }} />
            </span>
            <div className="absolute left-[50%] translate-x-[-50%]">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ fontSize: "18px", marginRight: "10px" }}
              />
              <span className="text-[28px]">Cart</span>
            </div>
          </div>
          <div className="h-[400px] canvas_product overflow-y-auto pb-4">
            {productCart &&
              productCart.map((item) => (
                <div className="px-4 pt-4" key={item.id}>
                  <ProductCart
                    data={item}
                    id={item.id}
                    image={item.imageMain}
                    name={item.name}
                    quantity={item.quantity}
                    priceSale={item.priceSale}
                  />
                </div>
              ))}
          </div>
          <div className="bg-[#f7f7f7]">
            <div className="w-[90%] m-auto canvas_checkCart">
              <div className="flex py-6 border-b-[1px] border-[rgba(0,0,0,.08)] justify-between">
                <div>Subtotal:</div>
                <div>{formatMoney(total)}</div>
              </div>
              <div className="flex py-6 justify-between">
                <div>Total:</div>
                <div className="font-bold text-[20px]">
                  {formatMoney(total)}
                </div>
              </div>
              <div className="bg-black text-white font-medium text-center py-4 rounded-md ">
                Procced to checkout
              </div>
              <div className="text-center py-6">View cart</div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
