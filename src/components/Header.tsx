import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Shorts from './Shorts';

const Header: React.FC = () => {
  return (
    <>
      <div className="bg-red-500 w-full flex justify-center items-center flex-col">
        <Head>
          <title>Home</title>
          <meta name="description" content="Welcome to my website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h5 className="text-white mb-4">Limited to March! Enter MALOVE and get 80% off for orders over 1,200🥰</h5>
      </div>

      <nav className="bg-white p-4 shadow-lg">
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/">
              <div className="text-black cursor-pointer">
                <Image src="/logo.svg" alt='logo' width={200} height={200} style={{ marginLeft:150 }} priority  />
              </div>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/">
              <p className="text-black">Hot news</p>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/">
              <p className="text-black">Limited time sales</p>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/">
              <p className="text-black">Theme specials</p>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/">
              <p className="text-black">Wishing fountain</p>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/">
              <p className="text-black">March membership discount</p>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/">
              <div className="cursor-pointer">
                <Image src="/search.svg" alt='logo' width={22} height={22} />
              </div>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/">
              <div className="cursor-pointer">
                <Image src="/cart.svg" alt='logo' width={22} height={22} />
              </div>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/">
              <div className="flex items-center justify-center border border-gray-300 rounded-md px-4 h-9 ml-4 text-base font-medium text-gray-900 bg-white">
                <span>Login/Register</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
     <Shorts/>
    </>
  );
};

export default Header;
