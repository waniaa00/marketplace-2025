"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import { Products } from "@/types/products";
import { allProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/actions/actions";
import Swal from "sweetalert2"
// import { products } from "@/sanity/schemaTypes/product";



export default function Product() {
  const [product, setProduct] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: Products[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchproduct();
  }, []);


  //addtocart working

  const handleAddToCart = (e: React.MouseEvent, product : Products) => {
    e.preventDefault()
    Swal.fire({
      position : "center",
      icon : "success",
      title : `${product.name} added to cart`,
      showConfirmButton : false,
      timer : 1000
    })
    addToCart(product)
    
    
  }
  


  return (
    <>
      {/* extra ui */}
      <div className="flex justify-between items-center px-8 py-4 bg-white max-w-full">
        {/* Left Section: Filters */}
        <div className=" w-[1440px] h-[64] gap-4 sm:gap-6 md:gap-10">
          {/* Category Filter */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-[#2A254B] font-thin">Category</span>
            <span>
              <IoMdArrowDropdown />
            </span>
          </div>

          {/* Product Type Filter */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-[#2A254B] font-thin">Product Type</span>
            <span>
              <IoMdArrowDropdown />
            </span>
          </div>

          {/* Price Filter */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-[#2A254B] font-thin">Price</span>
            <span>
              <IoMdArrowDropdown />
            </span>
          </div>

          {/* Brand Filter */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-[#2A254B] font-thin">Brand</span>
            <span>
              <IoMdArrowDropdown />
            </span>
          </div>
        </div>

        {/* Right Section: Sort By and Date Edit */}
        <div className="flex gap-4 sm:gap-6 md:gap-8">
          {/* Sort By */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-[#2A254B] font-thin">Sort By:</span>
          </div>

          {/* Date Edit */}
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-[#2A254B] font-thin">Date Edit</span>
            <span>
              <IoMdArrowDropdown />
            </span>
          </div>
        </div>
      </div>

      {/* pasting grid here */}

      {/* product grid */}
      <div className="max-w-[1440px] bg-white text-[#2A254B]">
    <div className="container max-w-full px-6 sm:px-12 md:px-16 lg:px-32 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.map((product) => (
                <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                    <Link href={`/product/${product.slug.current}`}>
                        {product.image && (
                            <Image
                                src={urlFor(product.image).url()}
                                alt={product.name}
                                width={280}
                                height={280}
                                className="object-cover "
                            />
                        )}
                        <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
                        <p className="text-gray-500 mt-2"> 
                          {product.price ? `$${product.price}` : "Price nt available "}
                        </p>
                        <button className="bg-gradient-to-r from-teal-400 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
                        hover:scale-110 transition-transform duration-200 ease-in-out " onClick={(e) => handleAddToCart(e, product)}>
                          Add to Cart

                        </button>
                    </Link>
                </div>
            ))}
        

</div>


          {/* View Collection Button */}
          <div className="flex justify-center max-w-[170px] h-[56px] mx-auto mt-8">
            <button className="px-6 py-3 bg-gray-100 text-[#2A254B] hover:bg-gray-200 rounded-md">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
 