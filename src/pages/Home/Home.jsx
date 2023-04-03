import {
  faLink,
  faMaximize,
  faHeart,
  faHeartBroken,
  faBicycle,
  faUser,
  faClock,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Canvas from "../../components/Canvas";
import { dataProduct } from "../../dataProduct";
import {
  getProduct,
  decrement,
  increment,
} from "../../features/counter/counterSlice";
import { formatMoney } from "../../others/formatMoney";
import { setProductToLS } from "../../others/localAction";
import { Carousel } from "antd";
import ProductSales from "../../components/ProductSales";
import ModalInforProduct from "../../components/Modal/ModalInforProduct";
import ImageChangeHover from "../../components/ChangeImg/ImageChangeHover";

export default function Home() {
  const [product, setProduct] = useState(dataProduct);

  const carouselRef = useRef();

  const dispatch = useDispatch();
  const handleProductDetail = (item) => {
    dispatch(getProduct(item));
    setProductToLS(item);
  };

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

  const imageRef = useRef();
  return (
    <>
      <div className="bg-white home_box">
        <div className="w-[88%] home_container m-auto">
          <div className="flex pt-10 home_carousel_header gap-6 justify-center">
            <div className="w-[60%] home_carousel_header_container">
              <Carousel
                draggable={true}
                style={{ width: "100%" }}
                dotPosition="bottom"
                className="home_carousel_header">
                <div className="relative">
                  <div className="flex justify-center relative items-center flex-col">
                    <div className="w-full relative home_carousel_header_imMain h-[700px] ">
                      <img
                        src="https://cart-bebaby.vercel.app/assets/img/feature.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-[40%] z-10">
                      <h1 className="text-center text-[50px] italic">
                        Collection
                      </h1>
                      <p className="text-center text-[55px] leading-[50px] font-semibold">
                        Autumn - Winter
                      </p>
                      <p className="text-[80px] text-[#ebc989] text-center font-bold">
                        2021
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center items-center flex-col">
                    <div className="w-full home_carousel_header_imMain h-[700px]">
                      <img
                        src="https://cart-bebaby.vercel.app/assets/img/feature.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
            <div className="w-[30%] home_header_select">
              <div className="bg-[#eef2f3]">
                <div className="py-9">
                  <p className="text-center home_select_child z-1 relative text-[25px] w-[180px] m-auto">
                    Select your child's age
                  </p>
                  <ul className="flex mt-6 gap-9 justify-center">
                    <li>0 - 2</li>
                    <li>2 - 4</li>
                    <li>4 - 6</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 relative">
                <div className="w-full">
                  <img
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-promo-bg1.webp"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute w-full top-[12%] left-[50%] translate-x-[-50%]">
                  <div className="w-[50%] m-auto">
                    <img
                      src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-promo-pic1.webp"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <h1 className="text-center text-[30px]">Duvet Cover Set</h1>
                    <p className="text-center text-[30px] font-medium">
                      -40% off
                    </p>
                    <div className="text-center home_header_btn text-[16px] mt-8 font-medium">
                      VIEW COLLECTION
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[100px]">
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="px-[100px] text-[20px] py-[20px] bed_sets relative">
                Bed Sets
              </div>
              <div className="px-[100px] text-[20px] py-[20px] Sleepwear relative">
                Sleepwear
              </div>
              <div className="px-[100px] text-[20px] py-[20px] Pyjamas relative ">
                Pyjamas
              </div>
              <div className="px-[100px] text-[20px] py-[20px] Nighties relative">
                Nighties
              </div>
              <div className="px-[100px] text-[20px] py-[20px] Bathrobes relative">
                Bathrobes
              </div>
              <div className="px-[100px] text-[20px] py-[20px] Classic relative">
                Classic
              </div>
              <div className="px-[100px] text-[20px] py-[20px] Fancy relative">
                Fancy
              </div>
              <div className="px-[100px] text-[20px] py-[20px] text-center  More_products relative">
                More products
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[100px] mb-[50px]">
            <div className="w-[10%] home_line">
              <img
                src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-sep1.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mb-[80px]">
            <p className="text-center home_desc_cart home_generations_underline relative z-10 text-[25px] w-[350px] pb-[50px] m-auto">
              Welcome in our child's world. All our products are made from
              generations with passion.
            </p>
            <h3 className="text-center home_title_cart_container m-auto leading-[65px] font-semibold w-[250px] text-[55px]">
              Product's Catalog
            </h3>
          </div>
          <div className="flex home_card_container items-center gap-6 flex-wrap m-auto justify-center">
            {product &&
              product.map((item) => (
                <div className="w-[20%] home_cart" key={item.id}>
                  <div className="card_home relative">
                    <Link
                      onClick={() => handleProductDetail(item)}
                      to={"productInfor"}>
                      <ImageChangeHover
                        primaryImg={item.imageMain}
                        secondaryImg={item.image[1]}
                        alt=""
                      />
                    </Link>

                    <div className="card_home_nav text-black px-6 flex items-center justify-between overflow-hidden">
                      <Link
                        onClick={() => handleProductDetail(item)}
                        to={"productInfor"}
                        className="hover:text-[#ebc989]">
                        <FontAwesomeIcon
                          icon={faLink}
                          style={{ fontSize: "20px" }}
                        />
                      </Link>
                      {item.like ? (
                        <div
                          className="hover:text-[#ebc989] cursor-pointer"
                          onClick={() => handleIncrementHeart(item)}
                          key={item.id}>
                          <FontAwesomeIcon
                            icon={faHeart}
                            style={{ fontSize: "20px" }}
                          />
                        </div>
                      ) : (
                        <div
                          className="hover:text-[#ebc989] cursor-pointer"
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
          <div className="flex mt-[80px] header_btn_group justify-center items-center">
            <Link
              to={"productInfor"}
              className="bg-[#171b20] header_goShop text-white font-semibold px-10 py-3 rounded mr-5 ">
              GO TO SHOP
            </Link>
            <Link
              to={"productInfor"}
              className="bg-[#ececec] text-[#626262] font-semibold px-10 py-3 rounded">
              SEE PROMOTIONS
            </Link>
          </div>
          <div className="flex mt-[200px] home_silder_container ">
            <div className="w-[50%] home_silder_img relative">
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-home-pic1.webp"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="absolute top-[35%] home_silder_text_container w-full m-auto">
                <h5 className="text-center text-[17px] font-bold">
                  LIMITED OFFER
                </h5>
                <div className="relative">
                  <h6 className="text-center text-[100px] home_silder_text_sale text-[#ebc989] font-semibold leading-[100px]">
                    -50%
                  </h6>
                  <p className="text-center absolute top-[60px] home_silder_text_holiday left-[50%] text-[60px] w-[200px] translate-x-[-50%] leading-[70px]">
                    Holiday Sale
                  </p>
                  <ul className="absolute gap-[100px] home_silder_text_time flex top-[240px] left-[50%] translate-x-[-50%]">
                    <li>
                      <div className="flex flex-col items-center w-[100px] border-b-[2px] pb-3">
                        <p className="text-[#ebc989] text-[30px]">00</p>
                        <p className="text-[30px] home_silder_text_time_day">
                          days
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-col items-center w-[100px] border-b-[2px] pb-3">
                        <p className="text-[#ebc989] text-[30px]">00</p>
                        <p className="text-[30px] home_silder_text_time_day">
                          days
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-col items-center w-[100px] border-b-[2px] pb-3">
                        <p className="text-[#ebc989] text-[30px]">00</p>
                        <p className="text-[30px] home_silder_text_time_day">
                          days
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* home slide */}
            <div className="h-auto w-[50%] home_silder_carousel bg-[#eaf0f7]">
              <div className="translate-y-[24%]">
                <div className="text-center mb-7 home_carousel_title">
                  <h6 className="font-bold text-[15px]">
                    USE DISCOUNTS AND PROMOTIONS
                  </h6>
                  <h2 className="text-[55px]">
                    <span>Special</span>
                    <span className="text-cyan-500 ml-4">Offers</span>
                  </h2>
                </div>

                <Carousel
                  draggable={true}
                  dotPosition="bottom"
                  style={{ height: "46vh", width: "100%" }}
                  ref={carouselRef}>
                  <div>
                    <div className="flex justify-center items-center flex-col">
                      <div className="w-[38%] home_carousel_img">
                        <img
                          src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-giftcart.webp"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="home_desc">
                        <p className="text-[#8d949e] leading-6 mt-4 mb-1 text-[18px] w-[80%] text-center m-auto">
                          Gift card with benefits
                        </p>
                        <div>
                          <img
                            src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-befriends.png"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center items-center flex-col">
                      <div className="w-[38%] home_carousel_img ">
                        <img
                          src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-bebear.webp"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div class="home_desc">
                        <p className="text-[#8d949e] mt-4 leading-6 mb-1 text-[18px] w-[80%] text-center m-auto">
                          Gift card with benefits
                        </p>
                        <div>
                          <img
                            src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-befriends.png"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel>
                <div
                  className="cursor-pointer carousel_home_prev absolute right-[120px] top-[50%]"
                  onClick={() => carouselRef.current.prev()}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ fontSize: "40px" }}
                  />
                </div>
                <div
                  className="cursor-pointer carousel_home_next absolute left-[120px] top-[50%]"
                  onClick={() => carouselRef.current.next()}>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    style={{ fontSize: "40px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* home chose */}
          <div className="mt-[100px] home_chose_container">
            <div className="text-center w-[50%] m-auto home_chose_title">
              <h2 className="text-[55px] leading-[60px] ">
                What are benefits of choosing us?
              </h2>
              <p className="w-[68%] m-auto pt-[30px]">
                Vestibulum dapibus, mauris nec malesuada fames ac turpis velit,
                rhoncus eu, luctus et interdum.
              </p>
            </div>
          </div>
          <div className="flex home_chose_select justify-center">
            <div className="flex flex-col">
              <div className="flex flex-col justify-end items-center home_chose_select_box m-auto w-[80%]">
                <div className="w-[23%] home_chose_select_img">
                  <img
                    src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon1.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center mt-5 home_chose_des">
                  <h1 className="font-bold">BIO 100%</h1>
                  <p>Lorem ipsum dolor sit amet enim etiam lorem lectus</p>
                </div>
              </div>
              <div className="w-[50%] m-auto my-8">
                <img
                  src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-sep1.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-end items-center m-auto home_chose_select_box w-[80%]">
                <div className="w-[23%] home_chose_select_img">
                  <img
                    src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon1.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center home_chose_des mt-5">
                  <h1 className="font-bold">BIO 100%</h1>
                  <p>Lorem ipsum dolor sit amet enim etiam lorem lectus</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div>
                <img
                  src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-pic1.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col justify-end items-center home_chose_select_box m-auto w-[80%]">
                <div className="w-[23%] home_chose_select_img">
                  <img
                    src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon1.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center home_chose_des mt-5">
                  <h1 className="font-bold">BIO 100%</h1>
                  <p>Lorem ipsum dolor sit amet enim etiam lorem lectus</p>
                </div>
              </div>
              <div className="w-[50%] m-auto my-8">
                <img
                  src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-sep1.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-end items-center home_chose_select_box m-auto w-[80%]">
                <div className="w-[23%] home_chose_select_img">
                  <img
                    src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-features-icon1.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center home_chose_des mt-5">
                  <h1 className="font-bold">BIO 100%</h1>
                  <p>Lorem ipsum dolor sit amet enim etiam lorem lectus</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center mt-8 cursor-pointer">
              <span className="px-8 py-4 rounded-md bg-black text-white font-bold">
                SEE ALL FEATURES
              </span>
            </div>
          </div>
          {/* home introduce */}
          <div className="flex justify-center cursor-pointer home_introduce mt-[100px]">
            {/* ảnh main */}
            <div className="w-[60%] home_introduce_imgMain relative">
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic1-1200x900.webp"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute home_introduce_text bottom-0 w-full pt-3 px-6 pb-6">
                <div>
                  <p className="text-white">
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ marginLeft: "6px", marginRight: "6px" }}
                    />
                    <Link to={"/"} className="cursor-pointer hover:underline">
                      Muffin Group{" "}
                    </Link>
                    on
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ marginLeft: "6px", marginRight: "6px" }}
                    />
                    October 11, 2021
                  </p>
                  <p className="text-white home_introduce_text_des text-[30px] my-1">
                    Tempor diam pede cursus vitae
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[30%] home_introduce_img h-auto">
              {/* ảnh 1 */}
              <div className="relative home_introduce_imgMain">
                <img
                  src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic2-1200x900.webp"
                  alt=""
                  className="w-full h-full object-cover img"
                />
                <div className="absolute pt-3 home_introduce_text w-full bottom-0 px-6 pb-6">
                  <div>
                    <p className="text-white">
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ marginLeft: "6px", marginRight: "6px" }}
                      />
                      <Link to={"/"} className="cursor-pointer hover:underline">
                        Muffin Group{" "}
                      </Link>
                      on
                      <FontAwesomeIcon
                        icon={faClock}
                        style={{ marginLeft: "6px", marginRight: "6px" }}
                      />
                      October 11, 2021
                    </p>
                    <p className="text-white text-[20px] home_introduce_text_des my-1">
                      Mauris nec malesuada fames ac turpis velit
                    </p>
                  </div>
                </div>
              </div>
              {/* ảnh 2 */}
              <div className="relative home_introduce_imgMain">
                <img
                  src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic3-1200x900.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute pt-3 home_introduce_text w-full bottom-0 px-6 pb-6">
                  <div>
                    <p className="text-white">
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{
                          marginLeft: "6px",
                          marginRight: "6px",
                          color: "white",
                        }}
                      />
                      <Link to={"/"} className="cursor-pointer hover:underline">
                        Muffin Group{" "}
                      </Link>
                      on
                      <FontAwesomeIcon
                        icon={faClock}
                        style={{ marginLeft: "6px", marginRight: "6px" }}
                      />
                      October 11, 2021
                    </p>
                    <p className="text-white text-[20px] home_introduce_text_des my-1">
                      Utin laoreet sapien eu amet lorem kebab
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center home_sale_title mt-[60px] mb-[55px] font-medium text-[50px]">
              Our bestsellers
            </h1>
            <ProductSales dataProduct={product} checkGPS={true} />
          </div>
          {/* homeshop */}
          <div className="w-[80%] home_nameShop m-auto py-[100px]">
            <ul className="flex home_nameShop_container justify-between">
              <li>
                <div className="bg-[#fcfcfc] px-2 py-3">
                  <img
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client5.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </li>
              <li>
                <div className="bg-[#fcfcfc] px-2 py-3">
                  <img
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client4.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </li>
              <li>
                <div className="bg-[#fcfcfc] px-2 py-3">
                  <img
                    src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client3.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </li>
              <li>
                <div className="bg-[#fcfcfc] px-2 py-3">
                  <img
                    src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client2.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </li>
              <li>
                <div className="bg-[#fcfcfc] px-2 py-3">
                  <img
                    src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-client1.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="h-[230px] w-[90%] overflow-hidden m-auto">
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-instagram.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center absolute px-8 cursor-pointer rounded-lg py-4 top-[50%] translate-y-[-50%] left-[50%]  translate-x-[-50%] bg-[#ebc989]">
              <div>
                <FontAwesomeIcon style={{ color: "white" }} icon={faBicycle} />
              </div>
              <p className="text-white font-medium ml-4">INSTAGRAM</p>
            </div>
          </div>
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
          <Canvas />
        </div>
      </div>
    </>
  );
}
