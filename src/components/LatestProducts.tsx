'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LuShoppingCart } from 'react-icons/lu';
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

// Define the product type
interface Products {
  name: string;
  imgUrl: string;
  price: string;
  oldPrice: string;
  id: string;
}

export default function ProductsLatest() {
  const [products, setProducts] = useState<Products[]>([]); // Specify state type as an array of Product

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data: Products[] = await client.fetch(
          '*[_type == "latestProduct"]{id, name, "imgUrl": img.asset->url, price, oldPrice}',
          {},
          { cache: 'no-store' },
        );
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="w-full bg-white py-20">
      {/* Heading */}
      <div>
        <h2 className="text-[#3F509E] text-4xl text-center font-bold mb-8">
          Latest Products
        </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-2 md:space-x-8 mb-16">
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
          {products.map((product) => {
            return (
              <Link
                key={product.id}
                href={`/LatestProduct/${product.id}`}
                className="w-[360px] h-[306px] bg-white relative group"
              >
                {/* Product Image */}
                <div className="w-[360px] h-[270px] bg-[#f7f7f7] flex flex-col justify-center items-center relative overflow-hidden transition-all duration-300 group-hover:bg-white">
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
                    src={product.imgUrl}
                    width={235}
                    height={235}
                    alt={product.name}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#3F509E]">
                      {product.name}
                    </h3>
                    <div>
                      <span className="text-gray-800 mx-4">
                        {product.price}
                      </span>
                      <span className="text-red-600 font-medium line-through">
                        {product.oldPrice}
                      </span>
                    </div>
                  </div>
                  <div className="w-[153.73px] top-[305.04px] border-2 border-[#eeeffb] flex items-start justify-start rotate-[-0.36deg]"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
