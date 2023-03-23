import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/counter/counterSlice";
import { formatMoney } from "../others/formatMoney";

export default function ProductCart({
  image,
  name,
  priceSale,
  color,
  quantity,
  data,
}) {
  const dispatch = useDispatch();
  const [quantity1, setQuantity] = useState(quantity);
  const [totalPrice, setTotalPrice] = useState(quantity * priceSale);
  useEffect(() => {
    setTotalPrice(quantity1 * priceSale);
    dispatch(updateQuantity({ id: data?.id, quantity1 }));
  }, [quantity1, priceSale, data?.id]);

  const removeProduct = () => {
    dispatch(removeItem({ id: data?.id }));
  };

  return (
    <div className="bg-[rgba(0,0,0,.03)] rounded-[6px]">
      <div className="flex p-[15px] items-center border-b-[1px]">
        <div className="w-[40%] mr-5">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="border-r-[1px] border-[rgba(0,0,0,.08)]">
          <h2 className="font-semibold leading-5 mb-2">{name}</h2>
          <div className="text-[14px] flex items-center mb-2">
            Color:{" "}
            <div
              className={`h-5 w-5 rounded-full m-[2px] ml-2`}
              style={{ backgroundColor: data.color }}
            />
          </div>
          <p className="text-[14px]">
            Price:{" "}
            <span className="text-[#ebc989]">{formatMoney(priceSale)}</span>
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
            onClick={() => {
              if (quantity1 > 1) {
                setQuantity((pre) => pre - 1);
              }
            }}>
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <span className="mx-[20px] text-[18px]">{quantity1}</span>
          <span className="cursor-pointer">
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => setQuantity((pre) => pre + 1)}
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
