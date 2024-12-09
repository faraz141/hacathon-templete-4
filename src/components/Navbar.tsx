'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggle = () => {
    setOpen(!open);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setIsPagesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsPagesDropdownOpen(false);
    }, 2000); // Close after 5 seconds
  };

  return (
    <div className="2xl:w-[1920px] h-[60px] w-[100%] bg-[#ffffff] text-[#f1f1f1] flex justify-center items-center">
      {/* all content */}
      <div className="w-full md:w-[80%] lg:w-[1177px] flex items-center justify-between h-[40px] bg-[#ffffff]">
        <div>
          {/* logo */}
          <h2 className="h-[34px] font-sans font-bold leading-[34px] text-[34px] text-[#0d0e43]">
            Hekto
          </h2>
        </div>

        {/* links - animated sliding nav */}
        <div
          className={`${
            open ? 'translate-x-0' : '-translate-x-full'
          } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-[#eee] md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center text-[#0d0e43]  font-sanf font-normal text-[16px] leading-5">
            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link href="/" className="flex items-center justify-center group">
                Home{' '}
                <FaChevronDown className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 ease-in-out" />
              </Link>
            </li>
            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2 relative">
              <Link href="/" className="flex items-center justify-center group">
                Pages{' '}
                <FaChevronDown
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 ease-in-out"
                />
              </Link>
              {isPagesDropdownOpen && (
                <ul className="absolute top-full w-[150px] text-start mx-auto mt-2 bg-white shadow-md rounded-md text-black text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/cart">Cart</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link
                href="/product"
                className="flex items-center justify-center group"
              >
                Products{' '}
                <FaChevronDown className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 ease-in-out" />
              </Link>
            </li>
            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link
                href="/blog"
                className="flex items-center justify-center group"
              >
                Blog
                <FaChevronDown className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 ease-in-out" />
              </Link>
            </li>
            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link
                href="/shoplist"
                className="flex items-center justify-center group"
              >
                Shop
                <FaChevronDown className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 ease-in-out" />
              </Link>
            </li>
            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link
                href="/contact-us"
                className="flex items-center justify-center group"
              >
                Contact
                <FaChevronDown className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 ease-in-out" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-x-4 items-center">
          {/* Search bar - hidden on small screens */}
          <div className="hidden lg:flex w-[317px] h-10">
            <input type="search" className="w-full border-2 border-[#e7e6ef]" />
            <div className="w-[51px] h-10 bg-[#fb2e86] flex items-center justify-center">
              <IoSearch className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Toggle Button for mobile */}
          <button
            className="text-black block md:hidden text-3xl z-50"
            onClick={toggle}
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
