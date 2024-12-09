'use client';

import React from 'react';
import Link from 'next/link';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

function AccountPage() {
  return (
    <>
      {/* Header */}
      {/* <Header /> */}

      {/* Page Content */}
      <div className="bg-gray-100 py-10">
        <div className="w-full flex flex-col items-center justify-center mx-auto px-4">
          {/* Heading */}
          <div className="py-16  w-full flex items-center justify-center space-y-2 bg-[#f6f5ff]">
            <div className="w-[80%]   lg:w-[1177px]">
              <h1 className="text-4xl my-2 font-bold text-[#001F54]">
                My Account
              </h1>{' '}
              {/* Dark blue */}
              <div className="flex items-center gap-2">
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>pages</Link>
                <span className="text-black mx-2">.</span>
                <span className="text-[#FB2E86]">
                  <Link href={'/account'}>My Accounts</Link>
                </span>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="bg-white w-[544px] h-[474px]  mt-8 p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-[#151875] mb-4">Login</h2>
            <p className="text-gray-600 mb-6">
              Please login using account detail below.
            </p>

            {/* Form */}
            <form>
              {/* Email Address */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                />
              </div>

              {/* Forgot Password */}
              <div className="mb-4 text-right">
                <Link
                  href="/forgot-password"
                  className="text-[#FB2E86] hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-[#FB2E86] text-white py-2 rounded-md hover:bg-[#F94C9B] transition-colors"
              >
                Sign In
              </button>
            </form>

            {/* Create Account */}
            <div className="text-center mt-6 text-gray-600">
              Don’t have an Account?{' '}
              <Link href="/login" className="text-[#FB2E86] hover:underline">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}

export default AccountPage;
