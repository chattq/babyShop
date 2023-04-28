import React, { useEffect, useRef, useState } from "react";

export default function FormHelpDesk({ chidren, hideDrop }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <span
        onClick={() => {
          setOpen(!open);
        }}>
        {chidren}
      </span>
      {open ? (
        <div
          ref={menuRef}
          className="bg-[#fbfbfb] rounded-md fixed top-[60px] right-[20px] shadow w-[300px] px-6">
          <div>
            <h1 className="text-center text-[28px] mt-2 mb-2">Helpdesk</h1>
            <p className="text-center leading-7">
              If you checked our FAQ and didn't find your answer, pick the
              correct subject below and try to describe your problem
            </p>
          </div>
          <form>
            <div className="py-6">
              <select
                id="countries"
                className="border bg-[#f0f2f6] border-gray-300 text-gray-500 text-sm rounded-md focus:border-transparent focus:border-none block w-full p-2.5">
                <option selected>Incomplete order</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                className="bg-[#ffff] border-none text-gray-900 text-sm rounded-md  focus:border-transparent w-full p-2.5 "
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="bg-[#ffff] border-none text-gray-900 text-sm rounded-md  focus:border-transparent w-full p-2.5 "
                required
              />
            </div>
            <div>
              <textarea
                className="bg-[#ffff] border-none text-gray-900 text-sm rounded-md  focus:border-transparent w-full p-2.5"
                rows="5"></textarea>
            </div>
            <button
              type="submit"
              class="text-white my-4 bg-black hover:bg-[rgba(0,0,0,0.8)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-3.5 text-center ">
              Get help
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
