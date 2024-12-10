import Image from 'next/image';

function TrendingProducts() {
  const products = [
    { id: 1, img: '/images/chair5.png' },
    { id: 2, img: '/images/chair6.png' },
    { id: 3, img: '/images/chair7.png' },
    { id: 4, img: '/images/product5.png' },
  ];

  const exclusiveProducts = [
    { id: 1, img: '/images/chair8.png' },
    { id: 2, img: '/images/chair9.png' },
    { id: 3, img: '/images/chair10.png' },
  ];

  return (
    <div className="flex items-center justify-center bg-white py-20">
      {/* Section Heading */}
      <div className="w-[80%] lg:w-[1177px] ">
        <h2 className="text-[#3F509E] text-3xl font-bold text-center mb-16">
          Trending Products
        </h2>

        {/* Product Grid */}
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-12 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative shadow-custom w-[270px] h-[350px] flex items-center justify-center flex-col"
            >
              {/* Image with Gray Background */}
              <div className="bg-gray-200 flex justify-center items-center p-6 h-[244px] w-[247px] relative">
                <Image
                  src={product.img}
                  alt="Trending Product"
                  width={200}
                  height={200}
                  className="object-contain transition-all duration-300 group-hover:opacity-90"
                />
              </div>

              {/* Product Details */}
              <div className="mt-4 text-center">
                <h3 className="text-[#3F509E] font-semibold text-lg mb-2">
                  Cantilever Chair
                </h3>
                <p className="text-[#3F509E] font-bold inline-block">$26.00</p>
                <span className="text-gray-500 line-through ml-2">$42.00</span>
              </div>
            </div>
          ))}
        </div>

        {/* Vouchers and Product List Section */}
        <div className="w-full max-w-screen-xl lg:w-[1177px] mx-auto grid grid-cols-1 place-items-center md:flex md:items-center md:justify-between md:flex-wrap gap-6">
          {/* Voucher 1 */}
          <div className="bg-[#fff6fb] p-8 flex flex-col justify-between relative w-full md:w-[420px] h-[270px] shadow-custom">
            <div className="top-[34px] left-6 w-[269px] h-[56px]">
              <h3 className="text-[#151857] text-2xl font-semibold font-sans text-center mb-4">
                23% Off in all products
              </h3>
              <button className="text-pink-600 underline text-sm font-semibold text-center font-sans">
                Shop Now
              </button>
            </div>
            <Image
              src="/images/voucher1.png"
              alt="Voucher Image"
              width={200}
              height={200}
              className="absolute top-20 left-[200px] object-contain"
            />
          </div>

          {/* Voucher 2 */}
          <div className="bg-[#eeeffb] p-8 flex flex-col justify-between relative w-full md:w-[420px] h-[270px] shadow-custom">
            <div className="top-[34px] left-6 w-[269px] h-[56px]">
              <h3 className="text-[#151857] text-2xl font-semibold font-sans text-center mb-4">
                23% Off in all products
              </h3>
              <button className="text-pink-600 underline text-sm font-semibold text-center font-sans">
                Shop Now
              </button>
            </div>
            <Image
              src="/images/voucher2.png"
              alt="Voucher Image"
              width={200}
              height={200}
              className="absolute bottom-6  right-2 object-contain"
            />
          </div>

          {/* Exclusive Product List */}
          <div className="flex flex-col items-center justify-between h-[270px]  w-[267px]">
            {exclusiveProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white flex items-center justify-between w-[267px]  h-[74px] rounded"
              >
                <div className="w-[107px] h-[74px] bg-[#f6f5f8] flex items-center justify-center">
                  <Image
                    src={product.img}
                    alt="Exclusive Product"
                    width={64}
                    height={71}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[#3F509E] font-semibold text-sm ">
                    Exclusive Seat Chair
                  </h3>
                  <p className="text-[#3F509E] font-semibold text-sm inline-block">
                    $32.00
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
