import {
  faHeart,
  faHeartBroken,
  faLink,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  decrement,
  getProduct,
  increment,
} from "../features/counter/counterSlice";
import { formatMoney } from "../others/formatMoney";
import { setProductToLS } from "../others/localAction";
import ModalInforProduct from "./Modal/ModalInforProduct";

export default function ProductSales({ dataProduct, checkGPS }) {
  const [product, setProduct] = useState(dataProduct);
  const dispatch = useDispatch();
  const nav = useNavigate();
  // like
  const handleIncrementHeart = (item) => {
    let index = product.findIndex((index) => index.id === item.id);
    dispatch(increment());
    let copyData = [...product];
    copyData[index] = {
      ...item,
      like: false,
    };
    dispatch(
      getProduct(
        (copyData[index] = {
          ...item,
          like: false,
        })
      )
    );
    setProduct(copyData);
  };
  // unlike
  const handleDecrementHeart = (item) => {
    dispatch(decrement());
    let index = product.findIndex((index) => index.id === item.id);
    let copyData = [...product];
    copyData[index] = {
      ...item,
      like: true,
    };
    setProduct(copyData);
  };
  // thay đổi ảnh
  const handleProductDetail = (item) => {
    dispatch(getProduct(item));
    setProductToLS(item);
  };
  const handleProductDetailA = (item) => {
    dispatch(getProduct(item));
    setProductToLS(item);
    window.location.href = "/productDetail";
  };
  return (
    <div className="mt-[50px] home_sale_container">
      <div className="flex items-center home_card_container gap-6 justify-center flex-wrap m-auto">
        {product &&
          product
            .filter((value) => value.sale === true)
            .map((item) => (
              <div className="w-[20%] home_cart" key={item.id}>
                <div className="card_home relative">
                  {checkGPS ? (
                    <Link
                      onClick={() => handleProductDetail(item)}
                      to={"/productDetail"}>
                      <img
                        src={item.imageMain}
                        alt=""
                        className="w-[100%] h-[100%] "
                      />
                    </Link>
                  ) : (
                    <div onClick={() => handleProductDetailA(item)} href="">
                      <img
                        src={item.imageMain}
                        alt=""
                        className="w-[100%] h-[100%] "
                      />
                    </div>
                  )}

                  <div className="card_home_nav text-black px-6 flex items-center justify-between overflow-hidden">
                    <Link
                      onClick={() => handleProductDetail(item)}
                      to={"/productDetail"}
                      className="hover:text-[#ebc989]">
                      <FontAwesomeIcon
                        icon={faLink}
                        style={{ fontSize: "20px" }}
                      />
                    </Link>
                    {item.like ? (
                      <div
                        className="hover:text-[#ebc989]"
                        onClick={() => handleIncrementHeart(item)}
                        key={item.id}>
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{ fontSize: "20px" }}
                        />
                      </div>
                    ) : (
                      <div
                        className="hover:text-[#ebc989]"
                        onClick={() => handleDecrementHeart(item)}
                        key={item.id}>
                        <FontAwesomeIcon
                          icon={faHeartBroken}
                          style={{ fontSize: "20px" }}
                        />
                      </div>
                    )}
                    <ModalInforProduct
                      children={
                        <div className="hover:text-[#ebc989] cursor-pointer">
                          <FontAwesomeIcon
                            icon={faMaximize}
                            style={{ fontSize: "20px" }}
                          />
                        </div>
                      }
                      data={item}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-center">{item.name}</p>
                  <p></p>
                  <div className="flex justify-center gap-1 ">
                    {item.color.map((value, index) => (
                      <div
                        className="border border-[rgba(0,0,0,.1] rounded-full"
                        key={index}>
                        <div
                          className={`h-4 w-4 rounded-full m-[2px]`}
                          style={{ backgroundColor: value }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-end">
                    <span className="line-through text-[#ebc989] opacity-70">
                      {formatMoney(item.price)}
                    </span>
                    <span className="text-[#ebc989] text-xl ml-3">
                      {formatMoney(item.priceSale)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
