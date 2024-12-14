// pages/index.js
import Image from 'next/image';
import Link from 'next/link';

export default function List() {
  const products = [
    {
      id: 1,
      title: 'Accumsan tincidunt',
      price: 26.0,
      oldPrice: 52.0,
      rating: 4,
      image: '/shoplist/img0.jpeg',
      colors: ['bg-[#de9034]', 'bg-[#e60584]', 'bg-[#5e37ff]'],
    },
    {
      id: 2,
      title: 'In nulla',
      price: 26.0,
      oldPrice: 52.0,
      rating: 4,
      image: '/shoplist/img1.jpeg',
      colors: ['bg-[#de9034]', 'bg-[#e60584]', 'bg-[#5e37ff]'],
    },
    {
      id: 3,
      title: 'Vel sem',
      price: 26.0,
      oldPrice: 52.0,
      rating: 4,
      image: '/shoplist/img2.jpeg',
      colors: ['bg-[#de9034]', 'bg-[#e60584]', 'bg-[#5e37ff]'],
    },
    {
      id: 4,
      title: 'Porttitor cum',
      price: 26.0,
      oldPrice: 52.0,
      rating: 4,
      image: '/shoplist/img3.jpeg',
      colors: ['bg-[#de9034]', 'bg-[#e60584]', 'bg-[#5e37ff]'],
    },
    {
      id: 5,
      title: 'Nunc in',
      price: 26.0,
      oldPrice: 52.0,
      rating: 4,
      image: '/shoplist/img4.jpeg',
      colors: ['bg-[#de9034]', 'bg-[#e60584]', 'bg-[#5e37ff]'],
    },
    {
      id: 6,
      title: 'Vitae facilisis',
      price: 26.0,
      oldPrice: 52.0,
      rating: 4,
      image: '/shoplist/img5.jpeg',
      colors: ['bg-[#de9034]', 'bg-[#e60584]', 'bg-[#5e37ff]'],
    },
    {
      id: 7,
      title: 'Curabitur lectus',
      price: 26.0,
      oldPrice: 52.0,
      rating: 4,
      image: '/shoplist/img6.jpeg',
      colors: ['bg-[#de9034]', 'bg-[#e60584]', 'bg-[#5e37ff]'],
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col justify-center items-center">
      <div className="py-16  w-full flex items-center justify-center space-y-2 bg-[#f6f5ff]">
        <div className="w-[80%]   lg:w-[1177px]">
          <h1 className="text-4xl my-2 font-bold text-[#001F54]">Shop List</h1>{' '}
          {/* Dark blue */}
          <div className="flex items-center gap-2">
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Pages </Link>
            <span className="text-black mx-2">.</span>
            <span className="text-[#FB2E86]">Shop List</span>
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
      <div className="grid grid-cols-1   gap-6 p-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-custom flex items-center justify-center w-[1141px] h-[254px] overflow-hidden"
          >
            <div className="w-[313.63px] h-[217.56px] m-4 relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill" // Makes the image fill the container
                objectFit="cover" // Ensures the image covers the container
                className=""
              />
            </div>
            <div className="p-4 w-full">
              <div className="flex flex-row items-center justify-start gap-4">
                <h2 className="font-bold w-[180px] font-sans text-lg text-[#111c85] ">
                  {product.title}
                </h2>
                <div className=" flex gap-1 ">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className={`w-3 h-3 ${color} rounded-full`}
                    ></span>
                  ))}
                </div>
              </div>
              <div className="flex items-center  mb-2">
                <p className="text-green-600 font-bold text-lg">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-gray-400 line-through ml-3">
                  ${product.oldPrice.toFixed(2)}
                </p>
                <div className="flex items-center justify-center mx-8">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`${
                        index < product.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      } text-lg`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[#9295aa] text-lg font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est <br />
                adipiscing in phasellus non in justo.
              </p>
            </div>
            <div className="flex justify-between p-4 border-t border-gray-200">
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-heart"></i>
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-search"></i>
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Tailwind CSS classes are used to style the layout.
// Make sure to add FontAwesome for icons or replace with a library of your choice.

// You can replace '/example-image.jpg' with the actual image path or URL.
