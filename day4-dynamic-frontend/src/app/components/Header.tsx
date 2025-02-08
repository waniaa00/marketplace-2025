"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the menu when the component mounts (for example, on Cart page load)
  useEffect(() => {
    setIsMenuOpen(false); // Ensure menu is closed on page load
  }, []);

  return (
    <>
      <header className="max-w-[1440px] h-[132px] flex flex-col items-center bg-white px-5 lg:px-10 mx-auto z-50">
        {/* Top Section */}
        <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full flex justify-between items-center">
          {/* Logo Section */}
          <h1 className="text-[#22202E] text-2xl font-semibold">Avion</h1>

          {/* Desktop Links Section */}
          <ul className="hidden lg:flex gap-4 ml-auto">
            <Link href="/">Home</Link>
            <Link href="/product">Products</Link>
            <Link href="/productlist">Listings</Link>
            <Link href="/cart">Shopping</Link>
          </ul>

          {/* Icons Section */}
          <div className="flex text-xl gap-3 ml-3">
            <IoSearch className="text-xl" />
            <MdOutlineShoppingCart />
            <CgProfile />
            {/* Hamburger Menu Button for Mobile */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="hidden lg:flex w-[675px] justify-between items-center h-1/2 text-[#726E8D]">
          {["Plant pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map((item, index) => (
            <Link
              key={index}
              href="/"
              className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-[75%] max-w-[300px] shadow-lg z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-5 right-5 text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          <HiX />
        </button>
        <ul className="mt-16 flex flex-col gap-6 px-6 text-[#22202E]">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/product" onClick={() => setIsMenuOpen(false)}>
            Products
          </Link>
          <Link href="/productlist" onClick={() => setIsMenuOpen(false)}>
            Listings
          </Link>
          <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
            Shopping
          </Link>
          {["Plant pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map((item, index) => (
            <Link
              key={index}
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>

      {/* Overlay for Background */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
