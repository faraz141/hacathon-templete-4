'use client';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import {
  FaFacebookF,
  FaInstagram,
  FaRegHeart,
  FaSearchPlus,
  FaTwitter,
} from 'react-icons/fa';
import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';
import TabbedContent from '@/components/productDetailText';
import { useCart } from '@/components/cartContext';
import { useEffect, useState } from 'react';

interface Product {
  name: string;
  imgUrl: string;
  price: string;
  oldPrice: string;
  id: string;
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct: Product = await client.fetch(
          `*[_type == "shopGrid" && id == $id]{id, name, "imgUrl": img.asset->url, price, oldPrice}[0]`,
          { id },
        );

        if (!fetchedProduct) {
          setError('Product not found');
        } else {
          setProduct(fetchedProduct);
        }
      } catch (err) {
        setError('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };
    const fetchRelatedProducts = async () => {
      try {
        const fetchedRelatedProducts: Product[] = await client.fetch(
          '*[_type == "shopGrid"]{id, name, "imgUrl": img.asset->url, price, oldPrice}',
          {},
          { cache: 'no-store' },
        );

        setRelatedProducts(fetchedRelatedProducts);
      } catch (err) {
        setError('Failed to fetch related products');
      }
    };
    fetchRelatedProducts();

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500'];
  // const { addToCart } = useCart();

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="py-16  w-full flex items-center justify-center space-y-2 bg-[#f6f5ff]">
        <div className="w-[80%]   lg:w-[1177px]">
          <h1 className="text-4xl my-2 font-bold text-[#001F54]">
            Product Details
          </h1>{' '}
          {/* Dark blue */}
          <div className="flex items-center gap-2">
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Pages </Link>
            <span className="text-black mx-2">.</span>
            <span className="text-[#FB2E86]">Product Details</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center w-80% mt-20 h-auto lg:w-[1177px] lg:h-[509px] shadow-custom">
        <div className="w-full h-auto lg:w-[50%] lg:h-full">
          <div className="grid grid-cols-3 grid-rows-3 place-items-center my-2 mr-6  bg-[#ffffff] ">
            <div className="bg-[#c4c4c4] w-[100px] h-[100px] sm:w-[151px] sm:h-[155px] rounded-sm">
              <Image
                src={product.imgUrl}
                width={151}
                height={155}
                alt={product.name}
                className="object-contain"
              />
              {/* {product.name} */}
            </div>
            <div className="col-span-2 row-span-3 bg-[#c4c4c4] w-full  h-[321px] sm:w-[375px] sm:h-[487px] rounded-sm">
              <Image
                src={product.imgUrl}
                width={375}
                height={487}
                alt={product.name}
                className="object-contain"
              />
            </div>
            <div className="bg-[#c4c4c4]  w-[100px] h-[100px] sm:w-[151px] sm:h-[155px] rounded-sm">
              <Image
                src={product.imgUrl}
                width={151}
                height={155}
                alt={product.name}
                className="object-contain"
              />
            </div>
            <div className="bg-[#c4c4c4]  w-[100px] h-[100px] sm:w-[151px] sm:h-[155px] rounded-sm">
              <Image
                src={product.imgUrl}
                width={151}
                height={155}
                alt={product.name}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-auto lg:w-[50%] lg:h-full flex flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-start gap-4">
            <h2 className="font-bold  font-sans text-4xl pl-4 my-2 text-[#0d134e] ">
              {product.name}
            </h2>
          </div>
          <div className="flex items-center justify-center my-2 pl-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`${
                  index < 4 ? 'text-yellow-400' : 'text-gray-300'
                } text-lg`}
              >
                ★
              </span>
            ))}
            <h4 className="text-[#151875] text-lg font-sans">(22)</h4>
          </div>
          <div className="flex items-center my-2 pl-4">
            <p className="text-[#151875] font-bold text-lg">${product.price}</p>
            <p className="text-[#fb2e86] line-through ml-3">
              ${product.oldPrice}
            </p>
          </div>
          <div className=" flex pl-4 my-2 ">
            <h4 className="text-[#0d134e] font-bold text-lg">Color</h4>
            <div className="flex justify-center items-center pl-4 ">
              <span className="bg-[#05E6B7] w-3 h-3 rounded-full ml-2"></span>
              <span className="bg-[#F701A8] w-3 h-3 rounded-full ml-2"></span>
              <span className="bg-[#00009D] w-3 h-3 rounded-full ml-2"></span>
            </div>
          </div>
          <p className="text-[#a9acc6] text-lg font-normal font-sans pl-4 my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est <br />
            adipiscing in phasellus non in justo.
          </p>
          <div className="flex items-center my-2 pl-20">
            <h4 className="text-[#151875] font-bold text-lg">Add To Cart</h4>

            <button
              className="bg-white pl-6 "
              onClick={() => addToCart(product)}
            >
              <FaRegHeart className="w-4 h-4 text-[#151875]" />
            </button>
          </div>
          <h4 className="text-[#0d134e] font-bold text-lg pl-4 my-2">
            Categogies:
          </h4>
          <h4 className="text-[#0d134e] font-bold text-lg pl-4 my-2">Tags:</h4>
          <div className="flex items-center my-2 pl-4">
            <h4 className="text-[#0d134e] font-bold text-lg">Share</h4>
            <div className="flex justify-between items-center gap-4 ml-4">
              <Link
                href="#"
                className="bg-[#0d134e] w-4 h-4 rounded-[50%] text-white flex items-center justify-center"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="bg-[#fb2e86] w-4 h-4 rounded-[50%] text-white flex items-center justify-center"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="bg-[#0d134e] w-4 h-4 rounded-[50%] text-white flex items-center justify-center"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f8fe] w-full h-[649px] flex items-center justify-center mt-20">
        <TabbedContent />
      </div>
      <h2 className="text-3xl font-sans font-bold text-[#0d134e] w-[80%] lg:w-[1177px] mt-20 ">
        Related Product
      </h2>
      <div className="w-full md:w-[80%] lg:w-[1177px] place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 overflow-hidden">
        {relatedProducts.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/shopGrid/${product.id}`}
              className="w-[270px] my-9 h-[363px] bg-white  relative group"
            >
              {/* Product Image */}
              <div className="w-[270px] h-[280px] bg-[#f7f7f7] flex flex-col justify-center items-center relative  transition-all duration-300 group-hover:bg-[#ebf4f3]">
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

// export default Page;

//   return (
//     <div className="w-full flex items-center justify-center border-2">
//       <div className="flex flex-row justify-center items-center w-[1177px] h-[509px] border-2">
//         <div className="grid grid-cols-3 border-2 grid-rows-3 ">
//           {/* Displaying the name */}
//           <div>{product.name}</div>
//           {/* Rendering the image */}
//           <div>
//             <Image
//               src={product.imgUrl}
//               width={235}
//               height={235}
//               alt={product.name}
//               className="object-contain"
//             />
//           </div>
//         </div>
//         <div></div>
//       </div>
//     </div>
//   );
// }
