'use client';

import Image from 'next/image';
// import { HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { LuShoppingCart } from 'react-icons/lu';
import { FaRegHeart } from 'react-icons/fa6';
import { FaSearchPlus } from 'react-icons/fa';

function LatestProducts() {
  const products = [
    { id: 1, img: '/images/product1.png' },
    { id: 2, img: '/images/product2.png', sale: true },
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
        <div className="  flex justify-center space-x-8 mb-16">
          {['New Arrival', 'Best Seller', 'Featured', 'Special Offers'].map(
            (tab) => (
              <button
                key={tab}
                className="text-[#3F509E] text-lg font-medium relative group hover:text-red-600"
              >
                {tab}
                {/* Underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ),
          )}
        </div>

        {/* Product Grid */}
        <div className="w-[80%] lg:w-[1177px] max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="relative group">
              {/* Product Image */}
              <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[300px] transition-all duration-300 group-hover:bg-white">
                {/* Sale Tag */}
                {product.sale && (
                  <span className="absolute top-2 left-2 bg-[#3F509E] text-white text-sm px-3 py-1 rounded">
                    Sale
                  </span>
                )}
                <Image
                  src={product.img}
                  width={200}
                  height={200}
                  alt="Comfy Handy Craft"
                  className="object-contain"
                />

                {/* Icons */}
                <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow">
                    <FaRegHeart className="w-6 h-6 text-[#3F509E]" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow">
                    <FaSearchPlus className="w-6 h-6 text-[#3F509E]" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow">
                    <LuShoppingCart className="w-6 h-6 text-[#3F509E]" />
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-[#3F509E]">
                  Comfy Handy Craft
                </h3>
                <div className="mt-2 text-gray-600 flex justify-center items-center gap-2">
                  <span className="text-red-600 font-medium line-through">
                    $65.00
                  </span>
                  <span className="text-gray-800">$42.00</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestProducts;
