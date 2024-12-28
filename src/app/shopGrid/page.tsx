import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { FaRegHeart } from 'react-icons/fa6';
import { FaSearchPlus } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

export default async function page() {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500'];
  const data: {
    id: string;
    name: string;
    imgUrl: string;
    price: string;
    oldPrice: string;
  }[] = await client.fetch(
    '*[_type == "shopGrid"]{id, name, "imgUrl": img.asset->url, price, oldPrice}',
    {},
    { cache: 'no-store' },
  );
  // const shopList = [
  //   {
  //     id: 1,
  //     name: 'Vel elit euismod',
  //     image: '/shop/img1.png',
  //     price: '$26.00 ',
  //     oldPrice: '$42.00',
  //     colors: ['bg-red-500', 'bg-blue-500', 'bg-green-500'],
  //   },
  //   {
  //     id: 2,
  //     name: 'Ultricies condimentum imperdiet',
  //     image: '/shop/img2.png',
  //     price: '$26.00 ',
  //     oldPrice: '$42.00',
  //     colors: ['bg-[#DE9034]', 'bg-[#EC42A2]', 'bg-[#8568FF]'],
  //   },
  //   {
  //     id: 3,
  //     name: 'Vitae suspendisse sed',
  //     image: '/shop/img3.png',
  //     price: '$26.00 ',
  //     oldPrice: '$42.00',
  //     colors: ['bg-[#DE9034]', 'bg-[#EC42A2]', 'bg-[#8568FF]'],
  //   },
  //   {
  //     id: 4,
  //     name: 'Sed at fermentum',
  //     image: '/shop/img4.png',
  //     price: '$26.00 ',
  //     oldPrice: '$42.00',
  //     colors: ['bg-[#DE9034]', 'bg-[#EC42A2]', 'bg-[#8568FF]'],
  //   },
  //   {
  //     id: 5,
  //     name: 'Fusce pellentesque at',
  //     image: '/shop/img5.png',
  //     price: '$26.00 ',
  //     oldPrice: '$42.00',
  //     colors: ['bg-[#DE9034]', 'bg-[#EC42A2]', 'bg-[#8568FF]'],
  //   },
  //   {
  //     id: 6,
  //     name: 'Vestibulum magna laoreet',
  //     image: '/shop/img6.png',
  //     price: '$26.00 ',
  //     oldPrice: '$42.00',
  //     colors: ['bg-[#DE9034]', 'bg-[#EC42A2]', 'bg-[#8568FF]'],
  //   },
  //   {
  //     id: 7,
  //     name: 'Sollicitudin amet orci',
  //     image: '/shop/img7.png',
  //     price: '$26.00 ',
  //     oldPrice: '$42.00',
  //     colors: ['bg-[#DE9034]', 'bg-[#EC42A2]', 'bg-[#8568FF]'],
  //   },
  //   {
  //     id: 8,
  //     name: 'Ultrices mauris sit',
  //     image: '/shop/img8.png',
  //     price: '$26.00 ',
  //     oldPrice: '$42.00',
  //     colors: ['bg-[#DE9034]', 'bg-[#EC42A2]', 'bg-[#8568FF]'],
  //   },
  //   {
  //     id: 9,
  //     name: 'Pellentesque condimentum ac',
  //     image: '/shop/img9.png',
  //     price: '$26.00 ',
  //     oldPrice: '$42.00',
  //     colors: ['bg-[#DE9034]', 'bg-[#EC42A2]', 'bg-[#8568FF]'],
  //   },
  //   {
  //     id: 10,
  //     name: 'Cras scelerisque velit',
  //     image: '/shop/img10.png',
  //     price: '$26.00 ',
  //     oldPrice: '$42.00',
  //     colors: ['bg-[#DE9034]', 'bg-[#EC42A2]', 'bg-[#8568FF]'],
  //   },
  //   {
  //     id: 11,
  //     name: 'Cras scelerisque velit',
  //     image: '/shop/img11.png',
  //     price: '$26.00 ',
  //     oldPrice: '$42.00',
  //     colors: ['bg-[#DE9034]', 'bg-[#EC42A2]', 'bg-[#8568FF]'],
  //   },
  //   {
  //     id: 12,
  //     name: 'Purus risus, ut',
  //     image: '/shop/img12.png',
  //     price: '$26.00 ',
  //     oldPrice: '$42.00',
  //     colors: ['bg-[#DE9034]', 'bg-[#EC42A2]', 'bg-[#8568FF]'],
  //   },
  // ];
  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div className="py-16  w-full flex items-center justify-center space-y-2 bg-[#f6f5ff]">
        <div className="w-[80%]   lg:w-[1177px]">
          <h1 className="text-4xl my-2 font-bold text-[#001F54]">
            Shop Grid Default
          </h1>{' '}
          {/* Dark blue */}
          <div className="flex items-center gap-2">
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Pages </Link>
            <span className="text-black mx-2">.</span>
            <span className="text-[#FB2E86]">Shop Grid</span>
          </div>
        </div>
      </div>
      <div className="my-10 flex flex-col w-[1177px] h-[44px] lg:flex-row justify-between ">
        <div>
          <h1 className="text-2xl font-semibold font-[Josefin Sans] mb-2">
            Ecommerce Accessories & Fashion Items
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Per Page */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="perPage"
              className="text-sm font-medium text-gray-700"
            >
              Per Page:
            </label>
            <input
              type="text"
              id="perPage"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="sortBy"
              className="text-sm font-medium text-gray-700"
            >
              Sort By:
            </label>
            <select
              id="sortBy"
              className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          {/* View */}
          <div className="flex items-center gap-2">
            <label htmlFor="view" className="text-sm font-medium text-gray-700">
              View:
            </label>
            <input
              type="text"
              id="view"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[80%] lg:w-[1177px] max-w-screen-xl mx-auto place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/shopGrid/${product.id}`}
              className="w-[270px] my-9 h-[363px] bg-white  relative group"
            >
              {/* Product Image */}
              <div className="w-[270px] h-[280px] bg-[#f7f7f7] flex flex-col justify-center items-center relative overflow-hidden transition-all duration-300 group-hover:bg-[#ebf4f3]">
                {/* Sale Tag */}

                {/* <span className="opacity-0 group-hover:opacity-100 absolute top-4 left-4 bg-[#3F509E] text-white text-sm px-3 py-1 -rotate-[30deg] rounded">
                Sale
              </span> */}
                <div className="absolute bottom-6 flex items-center justify-center flex-col left-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow ">
                    <LuShoppingCart className="w-6 h-6 text-[#3F509E]" />
                  </button>
                  <button className="bg-transparent p-2 ">
                    <FaRegHeart className="w-4 h-4 text-[#3F509E]" />
                  </button>
                  <button className="bg-transparent p-2 ">
                    <FaSearchPlus className="w-4 h-4 text-[#3F509E]" />
                  </button>
                </div>
                <Image
                  src={product.imgUrl}
                  width={160}
                  height={160}
                  alt="Comfy Handy Craft"
                  className="object-contain "
                />

                {/* Icons */}

                {/* Product Details */}
              </div>
              <div>
                <div className="flex flex-col items-center justify-between">
                  <h3 className="text-[16px] leading-[18px] my-1 mt-4 font-semibold text-[#3F509E]">
                    {product.name}
                  </h3>
                  <div className="my-1 flex gap-1">
                    {colors.map((color, index) => (
                      <span
                        key={index}
                        className={`w-3 h-3 ${color} rounded-full`}
                      ></span>
                    ))}
                  </div>
                  {/* <div className="mt-2 text-gray-600 flex justify-center items-center gap-2"> */}
                  <div className="my-1">
                    <span className="text-gray-800 mx-4">{product.price}</span>
                    <span className="text-red-600 font-medium line-through">
                      {product.oldPrice}
                    </span>
                  </div>

                  {/* </div> */}
                </div>
                {/* <div className="w-[153.73px] top-[305.04px] border-2 border-[#eeeffb] flex items-start justify-start rotate-[-0.36deg]"></div> */}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// export default page;
