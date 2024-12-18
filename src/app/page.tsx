import BlogSection from '@/components/BlogSection';
import Discount from '@/components/Discount';
import FeaturedProducts from '@/components/Feautreprod';
import Hero from '@/components/Hero';
import ProductsLatest from '@/components/LatestProducts';

import Newslater from '@/components/Newslater';
import Offer from '@/components/Offers';
import ShopList from '@/components/shopList';
import TopCategories from '@/components/TopCategories';
import TrendingProducts from '@/components/TrendingProducts';
import Unique from '@/components/Unique';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* <ShopList /> */}
      <Hero />
      <FeaturedProducts />
      <ProductsLatest />
      <Offer />
      <Unique />
      <TrendingProducts />
      <Discount />
      <TopCategories />
      <Newslater />
      <BlogSection />
    </div>
  );
}
