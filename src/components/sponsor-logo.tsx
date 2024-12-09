import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div>
      <div className="w-full py-12">
        <div className="max-w-screen-xl mx-auto flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Logos"
            width={800} // Adjust as per your design
            height={100} // Adjust as per your design
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;
