import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
interface FooterProps {
  // Add any custom props if needed
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className=" ">
      <div className="w-full flex items-center justify-center bg-[#eeeffb] gap-8 lg:h-[479px]">
        <div className=" w-[80%] lg:w-[1177px] flex flex-row flex-wrap items-start mt-[95px] justify-between">
          <div className="col-span-1">
            <h1 className="text-[38px] font-sans leading-10 text-[#000000] font-bold ">
              Hekto
            </h1>
            <div className="w-full md:w-[377px] h-[44px] my-[30px] bg-white flex flex-row items-center justify-center">
              <input
                className="w-full bg-white text-[#8a8fb9] text-[16px] leading-5 font-normal rounded-[3px] opacity-45"
                type="email"
                placeholder="   Enter Email Address"
              />
              <button className="bg-pink-500 hover:bg-pink-800  text-white w-[135px] h-[39px] rounded-[3px]">
                Sign Up
              </button>
            </div>
            <p className="font-lato font-normal text-base leading-[1.2] text-[#8A8FB9]">
              Contact Info
            </p>
            <p className="font-lato font-normal text-base leading-[1.2] my-4 text-[#8A8FB9]">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-josefin-sans text-[22px] leading-[25.78px] mb-10 font-bold text-[#000000]">
              Categories
            </h3>
            <ul className="font-lato font-normal text-base leading-[1.2] text-[#8A8FB9]">
              <li className="my-[20px] h-[20px]">
                <a href="#">Laptops & Computers</a>
              </li>
              <li className="my-[20px] h-[20px]">
                <a href="#">Cameras & Photography</a>
              </li>
              <li className="my-[20px] h-[20px]">
                <a href="#">Smart Phones & Tablets</a>
              </li>
              <li className="my-[20px] h-[20px]">
                <a href="#">Video Games & Consoles</a>
              </li>
              <li className="my-[20px] h-[20px]">
                <a href="#">Waterproof Headphones</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-josefin-sans text-[22px] leading-[25.78px] mb-10 font-bold text-[#000000]">
              Customer Care
            </h3>
            <ul className="font-lato font-normal text-base leading-[1.2] text-[#8A8FB9]">
              <li className="my-[20px] h-[20px]">
                <a href="#">My Account</a>
              </li>
              <li className="my-[20px] h-[20px]">
                <a href="#">Returns</a>
              </li>
              <li className="my-[20px] h-[20px]">
                <a href="#">Orders History</a>
              </li>
              <li className="my-[20px] h-[20px]">
                <a href="#">Order Tracking</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-josefin-sans text-[22px] leading-[25.78px] mb-10 font-bold text-[#000000]">
              Pages
            </h3>
            <ul className="font-lato font-normal text-base leading-[1.2] text-[#8A8FB9] ">
              <li className="my-[20px] h-[20px]">
                <a href="#">Blog</a>
              </li>
              <li className="my-[20px] h-[20px]">
                <a href="#">Browse the Shop</a>
              </li>
              <li className="my-[20px] h-[20px]">
                <a href="#">Category</a>
              </li>
              <li className="my-[20px] h-[20px]">
                <a href="#">Pre-Built Pages</a>
              </li>
              <li className="my-[20px] h-[20px]">
                <a href="#">Visual Composer Elements</a>
              </li>
              <li className="my-[20px] h-[20px]">
                <a href="#">WooCommerce Pages</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center h-[53px] w-full bg-[#e7e4f8] flex items-center justify-center ">
        <div className="flex flex-row justify-between items-center w-[1177px]">
          <p className="text-gray-600">&copy; Wobeky. All Rights Reserved</p>
          <div className="flex justify-between items-center w-20 h-5 ">
            <a
              href="#"
              className="bg-[#151875] w-5 h-5 rounded-[50%] text-white flex items-center justify-center"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-[#151875] w-5 h-5 rounded-[50%] text-white flex items-center justify-center"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-[#151875] w-5 h-5 rounded-[50%] text-white flex items-center justify-center"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
