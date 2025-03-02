'use client';

import Image from 'next/image';
// import { HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { LuShoppingCart } from 'react-icons/lu';
import { FaRegHeart } from 'react-icons/fa6';
import { FaSearchPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { ClipLoader } from 'react-spinners';
interface Products {
  name: string;
  imgUrl: string;
  price: number;
  oldPrice: number;
  id: string;
  code: string;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  // Specify state type as an array of Product

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/product/featured'); // Call the API route
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Products[] = await response.json();
        setProducts(data); // Update state with fetched products
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);
  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <ClipLoader size={50} color="#FB2E86" />
      </div>
    );
  }

  return (
    <div className="w-full md:w-[80%] lg:w-[1177px] mx-auto bg-white py-20">
      {/* Heading */}
      <h2 className="text-[#1a0b5b] text-[32px] md:text-[42px] leading-[49.22px] text-center mb-12 font-bold">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-4 gap-8">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/featuredProduct/${product.id}`}
              className="relative group"
            >
              {/* Product Image with Icons */}
              <div className="w-[270px] h-[361px]  hover:bg-[#2f1ac4] hover:text-white  shadow-custom   bg-[#ffffff] flex flex-col justify-center items-center  overflow-hidden ">
                {/* Product Image */}
                <div className="w-[270px] flex flex-col items-center justify-between h-[236px] bg-[#f6f7fb]">
                  {/* Icons (Wishlist, View Details, and Zoom) */}
                  <div className="w-full   opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Wishlist Icon */}
                    <button className="my-4 mx-2">
                      <FaRegHeart className="w-[17px] h-[17px]  hover:w-[30px] hover:h-[30px] text-[#1389ff] hover:text-[#2f1ac4] hover:bg-[#eeeffb]" />
                    </button>
                    {/* Magnifying Glass Icon */}
                    <button className="my-4 mx-2">
                      <FaSearchPlus className="w-[17px] h-[17px]  hover:w-[30px] hover:h-[30px] text-[#1389ff] hover:text-[#2f1ac4] hover:bg-[#eeeffb]" />
                    </button>
                    {/* Cart Icon */}
                    <button className="my-4 mx-2">
                      <LuShoppingCart className="w-[17px] h-[17px]  hover:w-[30px] hover:h-[30px] text-[#1389ff] hover:text-[#2f1ac4] hover:bg-[#eeeffb]" />
                    </button>
                  </div>
                  <Image
                    src={product.imgUrl}
                    width={150}
                    height={150}
                    alt={product.name}
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />

                  {/* Add to Cart Button */}
                  <div className=" bottom-0 w-full text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-[94px] h-6 rounded-[2px] mb-2 text-sm bg-[#08D15F]  hover:bg-green-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
                {/* Product Details */}
                <div className="text-center text-[14px] leading-4 my-4">
                  <h3
                    className="text-[18px] leading-5 font-semibold text-red-500 group-hover:text-white
                "
                  >
                    {product.name}
                  </h3>
                  <div className="flex justify-center items-center">
                    <span className="text-[#05E6B7] text-4xl">-</span>
                    <span className="text-[#F701A8] text-4xl">-</span>
                    <span className="text-[#00009D] text-4xl">-</span>
                  </div>
                  <p className=" text-sm  hover:text-white">
                    Code - {product.code}
                  </p>
                  <p className=" ">{product.price}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// export default FeaturedProducts;
