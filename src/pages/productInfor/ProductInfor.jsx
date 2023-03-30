import React, { useEffect, useMemo, useState } from "react";
import { formatMoney } from "../../others/formatMoney";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faMinus,
  faPlus,
  faRulerCombined,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/counter/counterSlice";
import ProductSales from "../../components/ProductSales";
import { dataProduct } from "../../dataProduct";
import ModalSize from "../../components/Modal/ModalSize";
import { Tooltip } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Import Swiper styles

export default function ProductInfor() {
  const dataLocal = JSON.parse(localStorage.getItem("product"));
  const [product, setProduct] = useState();
  const [productSale, setProductSale] = useState();
  const nav = useNavigate();
  useEffect(() => {
    setProduct(dataProduct);
    if (product) {
      const dataSale = product.filter((value) => value.sale === true);
      setProductSale(dataSale);
    }
  }, [product]);
  const [image, setImage] = useState(dataLocal.imageMain);
  const [checkColor, setCheckColor] = useState(dataLocal?.color[0]);
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
  return (
    <>
      <div className="bg-[#fcfcfc] pb-[50px] productInfor_box">
        <div className="flex w-[80%] productInfor_container justify-between pt-[140px] m-auto">
          <div className="w-[45%] productInfor_infor">
            <h5 className="text-[55px] leading-[65px] w-[450px]">
              {dataLocal.name}
            </h5>
            <p className="text-xl mt-5 mb-4">{dataLocal.des}</p>
            <ul className="productInfo_list-disc pl-[20px]">
              {dataLocal.comment.map((value, index) => (
                <li className="text-[#6a717c] text-[17px] mb-3" key={index}>
                  {value}
                </li>
              ))}
            </ul>
            <p className="text-[16px] text-[#6a717c]">{dataLocal.material}</p>
            <div className="text-[#ebc989] mt-5 text-[25px]">
              <ModalSize>
                <span>
                  <FontAwesomeIcon icon={faRulerCombined} />
                </span>
                <span className="text-[20px] ml-3">Sizes chart</span>
              </ModalSize>
            </div>
            <div className="my-[25px]">
              <span className="line-through text-[#ebc989] text-[30px] opacity-70">
                {formatMoney(dataLocal.price)}
              </span>
              <span className="text-[#ebc989] text-[40px] text-xl ml-3">
                {formatMoney(dataLocal.priceSale)}
              </span>
            </div>
            <div className="flex items-center">
              <div className="font-semibold mr-[70px]">Color</div>
              {dataLocal.color.map((value, index) => (
                <div
                  key={index}
                  className={
                    checkColor === value
                      ? "border border-black rounded-full"
                      : "border border-[rgba(0,0,0,.1] rounded-full"
                  }
                  onClick={() => handleColor(value)}>
                  <div
                    className={`h-7 w-7 rounded-full m-[2px]`}
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
              {quantity1 !== 0 ? (
                <button
                  className="bg-[#8a8c8e] w-full cursor-pointer text-center rounded font-bold text-white  py-3"
                  onClick={() => sentDataCart(dataLocal)}>
                  Add to cart
                </button>
              ) : (
                <Tooltip title="Vui lòng nhập số lượng">
                  <button
                    disabled
                    className="bg-[#8a8c8e] w-full cursor-pointer text-center rounded font-bold text-white  py-3">
                    Add to cart
                  </button>
                </Tooltip>
              )}
            </div>
            <div className="mt-5">
              <div className="flex justify-between">
                <div className="w-[33.33%]">
                  <h1 className="text-center">Tags:</h1>
                  <ul className="flex flex-wrap w-[200px] productInfor_tags pr-5 pt-4 justify-center gap-1 ">
                    {dataLocal.tag.map((value, index) => (
                      <li
                        className="text-[12px] font-semibold bg-[rgba(0,0,0,.04)] px-3 py-1 rounded-md"
                        key={index}>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-l-[1px] w-[33.33%] productInfor_category border-r-[1px] px-12">
                  <h1 className="text-center">Category:</h1>
                  <ul className="flex justify-center gap-1 pt-4">
                    {dataLocal.category.map((value, index) => (
                      <li
                        className="text-[15px] font-semibold text-[#cfb481]"
                        key={index}>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-[33.33%]">
                  <h1 className="text-center">SKU:</h1>
                  <ul className="flex justify-center pt-4">
                    <li className="text-[12px] font-semibold bg-[rgba(0,0,0,.04)] px-3 py-1 rounded-md">
                      {dataLocal.sku}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[50%] productInfor_img h-[40%]">
            <div className="flex flex-col justify-center mr-3">
              {dataLocal.image.map((img, index) => (
                <div
                  key={index}
                  onClick={() => handleChangeImg(img)}
                  className="h-[100px] productInfor_imgSelect w-[100px] overflow-hidden">
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="h-[600px] productInfor_imgMain overflow-hidden">
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffff]">
        <div className="m-auto w-[80%]">
          <div className="w-[50%] productInfor_box_des_container m-auto">
            <div className="flex productInfor_box_des  pt-14 justify-between ">
              <div className="text-[22px]">Description</div>
              <div className="text-[22px]">Additional information</div>
              <div className="text-[22px]">Reviews</div>
            </div>
            <p className="text-center text-[18px] mt-[60px]">
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse
              pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
              malesuada ultricies. Curabitur et.
            </p>
          </div>
          {/*  */}
          <div className="flex justify-between productInfor_friendly w-[40%] m-auto mt-[180px]">
            <div>
              <div className="mb-8">
                <p className="text-[14px] text-center font-medium mb-6">
                  ENVIRONMENTALLY FRIENDLY
                </p>
                <ul className="flex gap-2 justify-center">
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[14px] text-center font-medium mb-6">
                  WASHING
                </p>
                <ul className="flex gap-2 justify-center">
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <p className="text-[14px] text-center font-medium mb-6">
                  WARMNESS
                </p>
                <ul className="flex gap-2 justify-center">
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[14px] text-center font-medium mb-6">
                  DURABILITY
                </p>
                <ul className="flex gap-2 justify-center">
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                  <li>
                    <span className="pt-[5px] px-[9px] pb-[6px] bg-[#ebc989] rounded-full">
                      <FontAwesomeIcon
                        icon={faGear}
                        style={{ color: "white" }}
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-[90%] productInfor_img_container m-auto pt-[120px]">
            <div className="flex items-center productInfor_box_img justify-between">
              {/* cart 1 */}
              <div className="flex productInfor_img bg-[#fafafa] w-[48%]">
                <div className="w-[90%] productInfor_img_cart">
                  <img
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic2.webp"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[85%] productInfor_img_cart_des pl-6 py-6 pr-3">
                  <h1 className="text-[20px]">Pellentesque sed eu</h1>
                  <p className="mt-4">
                    Aenean quis lectus nec magna. In mauris sed molestie
                    tincidunt. Nullam a nunc. Nulla facilisi. Morbi pede.
                  </p>
                </div>
              </div>
              {/* cart 2 */}
              <div className="flex productInfor_img bg-[#fafafa] w-[48%]">
                <div className="w-[90%] productInfor_img_cart">
                  <img
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic1.webp"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[85%] productInfor_img_cart_des pl-6 py-6 pr-3">
                  <h1 className="text-[20px]">Pellentesque sed eu</h1>
                  <p className="mt-4">
                    Aenean quis lectus nec magna. In mauris sed molestie
                    tincidunt. Nullam a nunc. Nulla facilisi. Morbi pede.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-[50%] productInfor_ultricies m-auto pt-[100px]">
            <p className="text-center">
              Ultricies porta urna. Vestibulum commodo volutpat a, convallis ac,
              laoreet enim. Phasellus lorem ipsum fermentum in, dolor.
            </p>
            <p className="text-center pt-8">
              Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
              rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac
              ipsum. Integer aliquam purus. Quisque lorem tortor
            </p>
          </div>
        </div>
        {/*  */}
        <div className="bg-[#fcfcfc] pt-[100px] mt-[150px]">
          <div className="w-[80%] m-auto">
            {/* item 1 */}
            <div className="flex productInfo_vesti">
              <div className="w-[45%] productInfo_vesti_img">
                <img
                  src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-productdetails-pic1.webp"
                  alt=""
                  className="w-100 h-100 object-cover"
                />
              </div>
              <div className="ml-[100px] productInfo_vesti_infor mt-[130px]">
                <h4 className="text-[14px] mb-3 font-bold text-[#ebc989]">
                  PHASELLUS TORTOR
                </h4>
                <h1 className="text-[50px] leading-[70px] w-[300px]">
                  Ultriciies porta urna laoreet enim
                </h1>
                <p className="w-[350px] mt-[25px]">
                  Inceptos aliquam lectus nullam eget mi sapien luctus praesent
                  habitant porttitor tempor proin tempor gravida massa at lectus
                  nam praesent sociosqu aenean quis.
                </p>
                <ul>
                  <li className="flex pt-8">
                    <span className=" mr-3">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#ebc989" }}
                      />
                    </span>
                    <p>Suspendisse a pellentesque.</p>
                  </li>
                  <li className="flex py-5">
                    <span className=" mr-3">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#ebc989" }}
                      />
                    </span>
                    <p>Suspendisse a pellentesque.</p>
                  </li>
                  <li className="flex">
                    <span className=" mr-3">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#ebc989" }}
                      />
                    </span>
                    <p>Suspendisse a pellentesque.</p>
                  </li>
                  <li className="flex py-5">
                    <span className=" mr-3">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#ebc989" }}
                      />
                    </span>
                    <p>Suspendisse a pellentesque.</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* item 2 */}
            <div className="flex pb-[80px] productInfo_vesti justify-between mt-[150px]">
              <div className="productInfo_vesti_infor">
                <h4 className="text-[14px] mb-3 font-bold text-[#ebc989]">
                  PHASELLUS TORTOR
                </h4>
                <h1 className="text-[50px] leading-[70px] w-[300px]">
                  Vestibulum bibendum nulla torquent semper
                </h1>
                <p className="w-[350px] mt-[25px]">
                  Tristique nisi rutrum porta magna pharetra aenean proin rutrum
                  nostra eu curabitur consequat dolor molestie auctor porta et
                  lacus porta fusce vulputate non dui quis.
                </p>
              </div>
              <div className="w-[45%] productInfo_vesti_img cart2">
                <img
                  src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-productdetails-pic2.webp"
                  alt=""
                  className="w-100 h-100 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center">
          <div className="pt-[100px] productInfor_compare_container m-auto w-[70%]">
            <div className="productInfor_compare">
              <h1 className="text-center text-[50px] w-[300px] m-auto">
                Compare our products
              </h1>
              <p className="text-[18px] text-center mt-5">
                Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
                rhoncus eu, luctus et interdum.
              </p>
            </div>
            <div className="flex justify-between productInfor_compare_card mt-[100px] gap-[20px]">
              <div>
                <div className="w-[60px] m-auto">
                  <img
                    src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-num1.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <h1 className="text-center text-[25px] mt-4 mb-5">Variant 1</h1>
                <p className="text-center">
                  Vitae adipiscing turpis. Aenean ligulamolestie id vivide.
                </p>
                <ul>
                  <li className="py-3 text-center">10</li>
                  <li className="py-3 text-center border-t-[1px] border-b-[1px]">
                    Lorem lipsum
                  </li>
                  <li className=" text-center py-3 border-b-[1px]">○</li>
                  <li className="text-center py-3 border-b-[1px]">
                    Morbi accumsan
                  </li>
                  <li className=" text-center py-3">○</li>
                </ul>
              </div>
              <div>
                <div className="w-[60px] m-auto">
                  <img
                    src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-num1.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <h1 className="text-center text-[25px] mt-4 mb-5">Variant 1</h1>
                <p className="text-center">
                  Vitae adipiscing turpis. Aenean ligulamolestie id vivide.
                </p>
                <ul>
                  <li className="py-3 text-center">10</li>
                  <li className="py-3 text-center border-t-[1px] border-b-[1px]">
                    Lorem lipsum
                  </li>
                  <li className=" text-center py-3 border-b-[1px]">○</li>
                  <li className="text-center py-3 border-b-[1px]">
                    Morbi accumsan
                  </li>
                  <li className=" text-center py-3">○</li>
                </ul>
              </div>
              <div>
                <div className="w-[60px] m-auto">
                  <img
                    src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-num1.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <h1 className="text-center text-[25px] mt-4 mb-5">Variant 1</h1>
                <p className="text-center">
                  Vitae adipiscing turpis. Aenean ligulamolestie id vivide.
                </p>
                <ul>
                  <li className="py-3 text-center">10</li>
                  <li className="py-3 text-center border-t-[1px] border-b-[1px]">
                    Lorem lipsum
                  </li>
                  <li className=" text-center py-3 border-b-[1px]">○</li>
                  <li className="text-center py-3 border-b-[1px]">
                    Morbi accumsan
                  </li>
                  <li className=" text-center py-3">●</li>
                </ul>
              </div>
              <div>
                <div className="w-[60px] m-auto">
                  <img
                    src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-num1.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <h1 className="text-center text-[25px] mt-4 mb-5">Variant 1</h1>
                <p className="text-center">
                  Vitae adipiscing turpis. Aenean ligulamolestie id vivide.
                </p>
                <ul>
                  <li className="py-3 text-center">10</li>
                  <li className="py-3 text-center border-t-[1px] border-b-[1px]">
                    Lorem lipsum
                  </li>
                  <li className=" text-center py-3 border-b-[1px]">●</li>
                  <li className="text-center py-3 border-b-[1px]">
                    Morbi accumsan
                  </li>
                  <li className=" text-center py-3">●</li>
                </ul>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-center my-[100px]">
              <img
                src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-sep1.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-[25px] productInfor_weight">
                Additional information
              </h1>
              <div className="w-[80%] m-auto">
                <div className="flex mt-7 justify-between">
                  <ul>
                    <li className="font-medium">Weight</li>
                    <li className="font-medium">Demensions</li>
                    <li className="font-medium">Height</li>
                    <li className="font-medium">Age</li>
                    <li className="font-medium">Color</li>
                  </ul>
                  <ul>
                    <li className="italic">0.75kg</li>
                    <li className="italic">25 × 40 × 80 cm</li>
                    <li className="italic">50, 54, 58, 62, 68, 74, 82</li>
                    <li className="italic">0 – 2 years</li>
                    <li className="italic">Red, Violet, Yellow</li>
                  </ul>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-center my-[100px]">
              <img
                src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-sep1.png"
                alt=""
              />
            </div>
            {/*  */}
            <div className>
              <div>
                <h1 className="text-[25px]">Reviews</h1>
                <p className="my-2">There are no reviews yet.</p>
              </div>
              <div>
                <h2 className="text-[25px]">
                  Be the first to review “Baby Set Little Family”
                </h2>
                <p className="my-2">You must be logged in to post a review.</p>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-center my-[100px]">
              <img
                src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-sep1.png"
                alt=""
              />
            </div>
            {/*  */}
            <div>
              <h1 className="text-[30px] font-medium">Related Products</h1>
              <div>
                <ProductSales dataProduct={productSale} />
              </div>
            </div>
            {/*  */}
            <div className="bg-black py-10 mt-[80px] rounded-md m-auto">
              <span className="flex text-white justify-center font-semibold">
                Not for you?- <p className="underline">Back to product list</p>
              </span>
            </div>
            {/*  */}
            <div className="mt-[80px] mb-[50px]">
              <div className="flex w-[88%] m-auto home_sevice items-center justify-between">
                <div className="flex items-center">
                  <div className="w-[55px]">
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-icon1.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-bold text-[15px] home_sevice_name ml-10">
                    FREE SHIPPING
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[55px]">
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-icon2.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-bold text-[15px] home_sevice_name ml-10">
                    RETURN POLICY
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[55px]">
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-icon3.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-bold home_sevice_name text-[15px] ml-10">
                    PAYMENT SECURE
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[55px]">
                    <img
                      src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-icon4.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-bold text-[15px] home_sevice_name ml-10">
                    FREE SUPPORT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
