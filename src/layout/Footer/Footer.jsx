import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#f6f7f9] footer_container fixed bottom-0 w-full z-[-1]">
      <div className="w-[80%] footer_box flex justify-between m-auto py-[90px] ">
        <div className="w-[22%] footer_join">
          <div className="w-[200px]">
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-6">
            In the BeFriends Club you can take advantage of attractive offers
          </p>
          <div className="mt-12">
            <span className="px-9 mt-6 py-4 bg-black font-bold text-white text-center rounded">
              JOIN NOW
            </span>
          </div>
          <div className="w-[240px] mt-[50px]">
            <img
              src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-pic1-300x22.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="footer_service_box">
          <div className="footer_service">
            <h5 className="text-[20px]">Useful links</h5>
            <ul className="mt-7">
              <li className="mb-1 cursor-pointer">Contact us</li>
              <li className="mb-1 cursor-pointer">Help & About us</li>
              <li className="mb-1 cursor-pointer">Shipping & Returns</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div className="mt-6 footer_service">
            <h5 className="text-[20px]">Delivery</h5>
            <ul className="mt-7">
              <li className="mb-1 cursor-pointer">How it Works</li>
              <li className="mb-1 cursor-pointer">Free Delivery</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div className="footer_service footer_service_box">
          <h5 className="text-[20px]">Customer service</h5>
          <ul className="mt-7">
            <li className="mb-1 cursor-pointer">Orders</li>
            <li className="mb-1 cursor-pointer">Downloads</li>
            <li className="mb-1 cursor-pointer">Addresses</li>
            <li className="mb-1 cursor-pointer">Account details</li>
            <li>Lost passwords</li>
          </ul>
        </div>
        <div className="footer_service_box">
          <div className="footer_service">
            <h5 className="text-[20px] cursor-pointer">Need help?</h5>
            <ul className="mt-7">
              <li className="mb-1 text-[18px] cursor-pointer">
                +61 (0) 383 766 284
              </li>
              <li className="mb-1 text-[18px] cursor-pointer">
                +61 (0) 383 766 284
              </li>
            </ul>
          </div>
          <div className="mt-[40px] footer_service">
            <h5 className="text-[17px]">Openings hours</h5>
            <ul className="mt-7">
              <li className="mb-1">Monday - Friday: 8am - 5pm</li>
              <li className="mb-1">Monday - Friday: 9am - 4pm</li>
            </ul>
          </div>
        </div>
      </div>
      {/* copy */}
      <div className="border-t-[1px] border-[rgba(0,0,0,.08)]">
        <div className="w-[80%] footer_last_box m-auto ">
          <div className="flex justify-between footer_last items-center h-[70px]">
            <div className="footer_last_text ">
              © 2023 Betheme by Muffin group | All Rights Reserved | Powered by
              WordPress
            </div>
            <ul className="flex">
              <li className="cursor-pointer">Terms and conditions</li>
              <li className="footer_copy_center ml-1 cursor-pointer">
                Privacy policy
              </li>
              <li className="cursor-pointer ml-2">Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
