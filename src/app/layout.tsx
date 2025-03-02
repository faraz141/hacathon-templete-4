import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Logo from '@/components/sponsor-logo';
import { CartProvider } from '@/components/cartContext';
import { GlobalProvider } from './globalProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {/* <CartProvider> */}
        <GlobalProvider>
          <Header />
          <Navbar />
          {children}
          <Logo />
          <Footer />
        </GlobalProvider>
        {/* </CartProvider> */}
      </body>
    </html>
  );
}
