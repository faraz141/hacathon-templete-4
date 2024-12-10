'use client';

import Image from 'next/image';
// import { HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { LuShoppingCart } from 'react-icons/lu';
import { FaRegHeart } from 'react-icons/fa6';
import { FaSearchPlus } from 'react-icons/fa';

function LatestProducts() {
  const products = [
    { id: 1, img: '/images/product1.png' },
    { id: 2, img: '/images/product-2.png' },
    { id: 3, img: '/images/product3.png' },
    { id: 4, img: '/images/product4.png' },
    { id: 5, img: '/images/product5.png' },
    { id: 6, img: '/images/product6.png' },
  ];

  return (
    <div className="w-full bg-white py-20">
      {/* Heading */}
      <div className="w-">
        <h2 className="text-[#3F509E] text-4xl text-center font-bold mb-8">
          Latest Products
        </h2>

        {/* Tabs */}
        <div className="  flex justify-center space-x-2  md:space-x-8  mb-16">
          {['New Arrival', 'Best Seller', 'Featured', 'Special Offers'].map(
            (tab) => (
              <button
                key={tab}
                className="text-[#3F509E] text-sm md:text-lg font-medium relative group hover:text-red-600"
              >
                {tab}
                {/* Underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ),
          )}
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-[80%] lg:w-[1177px] max-w-screen-xl mx-auto place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="w-[360px] h-[306px] bg-white  relative group"
            >
              {/* Product Image */}
              <div className="w-[360px]  h-[270px] bg-[#f7f7f7] flex flex-col justify-center items-center relative overflow-hidden transition-all duration-300 group-hover:bg-white">
                {/* Sale Tag */}

                <span className="opacity-0 group-hover:opacity-100 absolute top-4 left-4 bg-[#3F509E] text-white text-sm px-3 py-1 -rotate-[30deg] rounded">
                  Sale
                </span>
                <div className="absolute bottom-6 flex items-center justify-center flex-col left-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow group-hover:bg-[#eeeffb]">
                    <LuShoppingCart className="w-6 h-6 text-[#3F509E]" />
                  </button>
                  <button className="bg-white p-2 ">
                    <FaRegHeart className="w-4 h-4 text-[#3F509E]" />
                  </button>
                  <button className="bg-white p-2 ">
                    <FaSearchPlus className="w-4 h-4 text-[#3F509E]" />
                  </button>
                </div>
                <Image
                  src={product.img}
                  width={235}
                  height={235}
                  alt="Comfy Handy Craft"
                  className="object-contain "
                />

                {/* Icons */}

                {/* Product Details */}
              </div>
              <div>
                <div className="flex flex-row items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#3F509E]">
                    Comfy Handy Craft
                  </h3>
                  {/* <div className="mt-2 text-gray-600 flex justify-center items-center gap-2"> */}
                  <div>
                    <span className="text-gray-800 mx-4">$42.00</span>
                    <span className="text-red-600 font-medium line-through">
                      $65.00
                    </span>
                  </div>

                  {/* </div> */}
                </div>
                <div className="w-[153.73px] top-[305.04px] border-2 border-[#eeeffb] flex items-start justify-start rotate-[-0.36deg]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestProducts;
