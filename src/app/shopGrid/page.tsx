// pages/_app.tsx
import { CartProvider } from '@/components/cartContext';
// import '../styles/globals.css';
// import { CartProvider } from '../context/CartContext';
import { AppProps } from 'next/app';
import ShopGrid from '@/components/shopGrid';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ShopGrid {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
