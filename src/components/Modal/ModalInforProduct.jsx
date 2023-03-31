import {
  faMinus,
  faPlus,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Carousel, Modal, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../features/counter/counterSlice";
import { formatMoney } from "../../others/formatMoney";
import ModalSize from "./ModalSize";

export default function ModalInforProduct({ children, data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(data);
  }, [product]);
  const [image, setImage] = useState(data.imageMain);
  const [checkColor, setCheckColor] = useState();
  const [checkHeight, setCheckHeight] = useState();
  const [checkSelect, setCheckSelect] = useState();
  const dispatch = useDispatch();
  const [quantity1, setQuantity] = useState(0);
  const sentDataCart = (item) => {
    dispatch(
      addToCart({
        ...item,
        quantity: quantity1,
        color: checkColor,
      })
    );
    setQuantity(0);
    toast.success("Mua hàng thành công");
    // setTimeout(() => {
    //   nav("/");
    // }, 2000);
  };
  const handleChangeImg = (img) => {
    setImage(img);
  };
  const handleColor = (value) => {
    setCheckColor(value);
  };
  const handleHeight = (value) => {
    setCheckHeight(value);
  };
  const handleSelect = (value) => {
    setCheckSelect(value);
  };
  return (
    <>
      <span onClick={showModal}>{children}</span>
      <Modal
        style={{ position: "relative" }}
        className="modal_InforProduct"
        open={isModalOpen}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}>
        <div className="flex modal_inforProduct">
          <div className="w-[50%] modal_inforProduct_carousel ">
            <Carousel draggable={true}>
              {data.image.map((value, index) => (
                <div key={index}>
                  <img src={value} alt="" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="pl-[30px] modal_inforProduct_infor_box overflow-y-scroll overflow-x-hidden">
            <div className="max-h-[570px]">
              <h5 className="text-[30px] w-[450px] modal_inforProduct_infor_name">
                {data.name}
              </h5>
              <div className="my-[5px]">
                <span className="line-through text-[#ebc989] text-[25px] opacity-70">
                  {formatMoney(data.price)}
                </span>
                <span className="text-[#ebc989] text-[20px] text-xl ml-3">
                  {formatMoney(data.priceSale)}
                </span>
              </div>
              <p className="text-[18px] mt-5 mb-4 w-full">{data.des}</p>
              <ul className="">
                {data.comment.map((value, index) => (
                  <li className="text-[#6a717c] text-[16px] mb-3" key={index}>
                    {value}
                  </li>
                ))}
              </ul>
              <p className="text-[16px] text-[#6a717c]">{data.material}</p>
              <div className="text-[#ebc989] mt-5 text-[20px]">
                <ModalSize>
                  <span>
                    <FontAwesomeIcon icon={faRulerCombined} />
                  </span>
                  <span className="text-[18px] ml-3">Sizes chart</span>
                </ModalSize>
              </div>
              {/* height */}
              <div className="flex items-center border-b-[rgba(0,0,0,.04)] flex-wrap border-b-[1px] pb-3 pt-2">
                <div className="font-semibold mr-[60px] mb-2">Height</div>
                <ul className="flex items-center gap-2 productInfor_height">
                  {data?.height.map((value, index) => (
                    <li
                      key={index}
                      className={
                        checkHeight === value
                          ? "border border-black h-[35px] w-[40px] text-center flex items-center justify-center rounded-md"
                          : "border border-[rgba(0,0,0,.1] h-[35px] w-[40px] flex items-center justify-center rounded-md"
                      }
                      onClick={() => handleHeight(value)}>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* age */}
              <div className="flex items-center border-b-[rgba(0,0,0,.04)] flex-wrap border-b-[1px] py-3">
                <div className="font-semibold mr-[60px]">Age</div>
                <select
                  className="w-[220px] bg-[aliceblue] rounded-md"
                  onChange={handleSelect}>
                  <option> Choose an option</option>
                  {data?.age.map((value, index) => (
                    <option value={index}>{value}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center mt-6">
                <div className="font-semibold mr-[70px]">Color</div>
                {data.color.map((value, index) => (
                  <div
                    key={index}
                    className={
                      checkColor === value
                        ? "border border-black rounded-full"
                        : "border border-[rgba(0,0,0,.1] rounded-full"
                    }
                    onClick={() => handleColor(value)}>
                    <div
                      className={`h-6 w-6 rounded-full m-[2px]`}
                      style={{ backgroundColor: value }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex mt-8">
                <div className="border flex items-center border-[#EBEBEB] rounded px-5 py-3 mr-3 bg-[rgba(240,242,246,1)]">
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      if (quantity1 > 0) {
                        setQuantity((pre) => pre - 1);
                      }
                    }}>
                    <FontAwesomeIcon icon={faMinus} />
                  </span>
                  <span className="mx-[20px] text-[18px]">{quantity1}</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => setQuantity((pre) => pre + 1)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </div>
                {checkColor && checkHeight && checkSelect !== undefined ? (
                  <button
                    className="bg-[#8a8c8e] w-full cursor-pointer text-center rounded font-bold text-white  py-3"
                    onClick={() => sentDataCart(data)}>
                    Add to cart
                  </button>
                ) : (
                  <Tooltip title="Vui lòng chọn option">
                    <button
                      disabled
                      className="bg-[#8a8c8e] w-full cursor-pointer text-center rounded font-bold text-white  py-3">
                      Add to cart
                    </button>
                  </Tooltip>
                )}
              </div>
              <div className="mt-5">
                <div className="">
                  <div className="flex">
                    <h1 className="text-center">Tags:</h1>
                    <ul className="flex ml-1 gap-1 ">
                      {data.tag.map((value, index) => (
                        <li
                          className="text-[12px] font-semibold bg-[rgba(0,0,0,.04)] px-3 py-1 rounded-md"
                          key={index}>
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center mt-4">
                    <h1 className="text-center mr-3">Category:</h1>
                    <ul>
                      {data.category.map((value, index) => (
                        <li
                          className="text-[15px] font-semibold text-[#cfb481]"
                          key={index}>
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className=" flex items-center mt-4">
                    <h1 className="text-center mr-3">SKU:</h1>
                    <ul>
                      <li className="text-[12px] font-semibold bg-[rgba(0,0,0,.04)] px-3 py-1 rounded-md">
                        {data.sku}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
