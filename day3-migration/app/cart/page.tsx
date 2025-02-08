import React from "react";
import Image from "next/image";


const Cart = () => {
  return (
    <>
      
      <div>
        <div className="max-w-[1440px] h-[749px] px-4 sm:px-10 lg:px-40 pt-10 pb-16 text-[#2A254B]">
          <h1 className="text-2xl sm:text-3xl text-center lg:text-left">
            Your Shopping Cart
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
            {/* Product Section */}
            <div className="p-4">
              <div className="flex justify-between items-center ">
                <h1 className="text-lg text-[#2A254B]">Product</h1>
                <span className="text-lg ml-80 ">Quantity</span>
                <span className="text-lg ml-80 ">Total</span>
              </div>

              {/* Product 1 */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center w-[309px] h-[134px] mr-22 ">
                  <Image
                    src="/sc1.png"
                    alt="Product 1"
                    width={109}
                    height={134}
                    className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                  />
                  <div className="ml-6">
                    <h1 className="text-base sm:text-lg">Graystone vase</h1>
                    <p className="text-sm mt-2">
                      A timeless ceramic vase with a tri-color grey glaze.
                    </p>
                    <p className="text-lg font-medium ">£85</p>
                  </div>
                </div>
                {/* Quantity Section */}
                <div className="flex items-center">
                  <p className="text-lg font-medium ">1 </p><span className="">£85</span>
                  
                </div>
                {/* Total Section */}
                
              </div>

              {/* Product 2 */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center w-[309px] h-[134px] mr-22">
                  <Image
                    src="/sc2.png"
                    alt="Product 2"
                    width={109}
                    height={134}
                    className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                  />
                  <div className="ml-6 ">
                    <h1 className="text-base sm:text-lg">Basic white vase</h1>
                    <p className="text-sm mt-2">
                      Beautiful and simple, this is one for the classics.
                    </p>
                    <p className="text-lg font-medium ">£85</p>
                    
                  </div>
                </div>
                {/* Quantity Section */}
                
                <div className="flex items-center ">
                  <p className=" text-lg font-medium ">1</p><span className="">£85</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* Subtotal Section */}
          <div className="mt-10 text-center lg:text-right">
            <h1 className="inline text-lg sm:text-xl font-medium mr-4">
              Subtotal
            </h1>
            <h1 className="inline text-xl sm:text-2xl font-semibold">£210</h1>
            <p className="text-sm mt-4">
              Taxes and shipping are calculated at checkout
            </p>
            <button className="bg-[#2A254B] h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
