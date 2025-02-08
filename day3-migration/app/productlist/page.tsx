import Image from "next/image";
import Ceramics from "../components/Ceramics";
import Features from "../components/Features";
import Email from "../components/Email";



export default function ProductList() {
  return (
    <>
      
      <main className="max-w-[1440px] h-auto bg-white flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-[50%]">
          <Image
            src="/pr1.png"
            alt="pr"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Product Info Section */}
        <div className="container w-full md:w-[50%] px-4 md:px-8 py-4 md:py-0">
          <div>
            <h1 className="text-3xl text-[#2A254B] mb-4">The Dandy Chair</h1>
            <p className="text-lg text-[#2A254B] mb-4">£250</p>
          </div>

          <div className="text-[#2A254B]">
            <div className="mt-8">
              <h2 className="text-xl">Description</h2>
              <p>
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The Dandy chair is perfect for
                any stylish living space with beech legs and lambskin leather
                upholstery.
              </p>
              <ul className="list-disc text-[#2A254B] pl-6 mt-2">
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl text-[#2A254B] font-custom">Dimensions</h2>
            <table className="w-full md:w-80 mt-4">
              <thead>
                <tr>
                  <th className="text-left px-1 font-thin text-[#2A254B]">
                    Height
                  </th>
                  <th className="text-left px-1 font-thin text-[#2A254B]">
                    Width
                  </th>
                  <th className="text-left px-1 font-thin text-[#2A254B]">
                    Depth
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-1 text-[#2A254B]">110cm</td>
                  <td className="px-1 text-[#2A254B]">75cm</td>
                  <td className="px-1 text-[#2A254B]">50cm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-8">
            {/* Amount Section */}
            <div className="flex items-center">
              <h1 className="text-[#2A254B]">Amount:</h1>
              <button className="bg-gray-100 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 inline-flex items-center ml-4">
                -
              </button>
              <input
                type="number"
                className="w-10 text-center text-[#2A254B] bg-gray-100 py-2"
                value="1"
                min="1"
              />
              <button className="bg-gray-100 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded inline-flex items-center">
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="bg-[#2A254B] text-white font-bold py-2 px-4">
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      <Ceramics />
      <Features />
      <Email />
    </>
  );
}
