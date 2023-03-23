import {
  faLink,
  faMaximize,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
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

export default function Home() {
  const [product, setProduct] = useState();
  const [productSale, setProductSale] = useState();
  useEffect(() => {
    setProduct(dataProduct);
    if (product) {
      const dataSale = product.filter((value) => value.sale === true);
      setProductSale(dataSale);
    }
  }, [product]);

  const dispatch = useDispatch();

  const handleProductDetail = (item) => {
    dispatch(getProduct(item));
    setProductToLS(item);
  };
  const handleIncrementHeart = (item) => {
    dispatch(increment());
  };
  const handleDecrementHeart = (item) => {
    dispatch(decrement());
  };
  return (
    <>
      <div className="bg-white home_box mb-[570px]">
        <div className="w-[88%] home_container m-auto">
          <div className="flex pt-10 home_carousel_header gap-6 justify-center">
            <div className="w-[60%] home_carousel_header_container">
              <Carousel
                draggable={true}
                style={{ width: "100%" }}
                dotPosition="bottom"
                className="home_carousel_header">
                <div>
                  <div className="flex justify-center items-center flex-col">
                    <div className="w-full home_carousel_header_imMain h-[700px] ">
                      <img
                        src="https://cart-bebaby.vercel.app/assets/img/feature.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
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
                  <p className="text-center text-[25px] w-[180px] m-auto">
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
              <div className="px-[100px] text-[20px] py-[20px]">Bed Sets</div>
              <div className="px-[100px] text-[20px] py-[20px]">Sleepwear</div>
              <div className="px-[100px] text-[20px] py-[20px]">Pyjamas</div>
              <div className="px-[100px] text-[20px] py-[20px]">Nighties</div>
              <div className="px-[100px] text-[20px] py-[20px]">Bathrobes</div>
              <div className="px-[100px] text-[20px] py-[20px]">Classic</div>
              <div className="px-[100px] text-[20px] py-[20px]">Fancy</div>
              <div className="px-[100px] text-[20px] py-[20px] text-center">
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
            <p className="text-center home_desc_cart text-[25px] w-[350px] pb-[50px] m-auto">
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
                      to={"/productDetail"}>
                      <img
                        src={item.imageMain}
                        alt=""
                        className="w-[100%] h-[100%] "
                      />
                    </Link>
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
                      <div className="hover:text-[#ebc989]">
                        <FontAwesomeIcon
                          icon={faMaximize}
                          style={{ fontSize: "20px" }}
                        />
                      </div>
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
              to={"/productDetail"}
              className="bg-[#171b20] header_goShop text-white font-semibold px-10 py-3 rounded mr-5 ">
              GO TO SHOP
            </Link>
            <Link
              to={"/productDetail"}
              className="bg-[#ececec] text-[#626262] font-semibold px-10 py-3 rounded">
              SEE PROMOTIONS
            </Link>
          </div>
          <div className="flex mt-[200px] home_silder_container ">
            <div className="w-[50%] home_silder_img">
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-home-pic1.webp"
                alt=""
                className="object-cover w-full h-full"
              />
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
                  style={{ height: "46vh", width: "100%" }}>
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
                          src="	https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/09/babyshop-giftcart.webp"
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
          <div className="flex justify-center home_introduce mt-[100px]">
            <div className="w-[60%] home_introduce_imgMain">
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic1-1200x900.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[30%] home_introduce_img h-auto">
              <div>
                <img
                  src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic2-1200x900.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <img
                  src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-blog-pic3-1200x900.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center home_sale_title mt-[60px] mb-[55px] font-medium text-[50px]">
              Our bestsellers
            </h1>
            <ProductSales dataProduct={productSale} />
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
          <div className="h-[230px] w-[90%] overflow-hidden m-auto">
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-instagram.webp"
              alt=""
              className="w-full h-full object-cover"
            />
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
