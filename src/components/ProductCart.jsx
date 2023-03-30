import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeItem,
  updateQuantity,
} from "../features/counter/counterSlice";
import { formatMoney } from "../others/formatMoney";

export default function ProductCart({ data }) {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(data.quantity * data.priceSale);
  const update = () => {
    // setQuantity(data.quantity);
    setTotalPrice(data.quantity * data.priceSale);
    dispatch(updateQuantity({ id: data?.id, quantity: data.quantity }));
  };

  useEffect(() => {
    update();
  }, [data.priceSale, data?.color, data.quantity]);

  const removeProduct = () => {
    dispatch(removeItem({ color: data?.color }));
  };

  const handleAddNumber = (data) => {
    dispatch(
      addToCart({
        ...data,
        id: 1,
        quantity: 1,
      })
    );
  };
  const handleMinusNumber = (data) => {
    dispatch(
      addToCart({
        ...data,
        id: 2,
        quantity: -1,
      })
    );
  };
  return (
    <div className="bg-[rgba(0,0,0,.03)] rounded-[6px]">
      <div className="flex p-[15px] items-center border-b-[1px]">
        <div className="w-[40%] mr-5">
          <img
            src={data.imageMain}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border-r-[1px] border-[rgba(0,0,0,.08)]">
          <h2 className="font-semibold leading-5 mb-2">{data.name}</h2>
          <div className="text-[14px] flex items-center mb-2">
            Color:{" "}
            <div
              className={`h-5 w-5 rounded-full m-[2px] ml-2`}
              style={{ backgroundColor: data.color }}
            />
          </div>
          <p className="text-[14px]">
            Price:{" "}
            <span className="text-[#ebc989]">
              {formatMoney(data.priceSale)}
            </span>
          </p>
        </div>
        <div className="text-[#ebc989] font-bold text-[18px] ml-4">
          {formatMoney(totalPrice)}
        </div>
      </div>
      <div className="flex py-2 pl-10">
        <div className="border border-[#EBEBEB] rounded px-5 py-2 bg-[rgba(240,242,246,1)]">
          <span
            className="cursor-pointer"
            onClick={() => handleMinusNumber(data)}>
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <span className="mx-[20px] text-[18px]">{data.quantity}</span>
          <span className="cursor-pointer">
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => handleAddNumber(data)}
            />
          </span>
        </div>
        <div
          className=" cursor-pointer flex-1 m-auto text-center rounded px-5 py-2"
          onClick={removeProduct}>
          <FontAwesomeIcon icon={faTrash} style={{ marginRight: "10px" }} />{" "}
          Remove
        </div>
      </div>
    </div>
  );
}
