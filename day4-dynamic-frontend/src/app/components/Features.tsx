import { FaShippingFast, FaCheckCircle, FaTags, FaLeaf } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <div className="bg-white text-[#2A254B] py-12 max-w-[1440px] mx-auto">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl mb-8">
          What makes our brand different
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Feature 1 */}
          <div className="text-center w-full sm:w-[235px] mx-auto">
            <FaShippingFast className="text-4xl text-[#2A254B] mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Next day as standard</h3>
            <p className="text-sm text-[#2A254B]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center w-full sm:w-[235px] mx-auto">
            <FaCheckCircle className="text-4xl text-[#2A254B] mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Made by true artisans</h3>
            <p className="text-sm text-[#2A254B]">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center w-full sm:w-[235px] mx-auto">
            <FaTags className="text-4xl text-[#2A254B] mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Unbeatable prices</h3>
            <p className="text-sm text-[#2A254B]">
              For our materials and quality you {`won’t`} find better prices anywhere
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center w-full sm:w-[235px] mx-auto">
            <FaLeaf className="text-4xl text-[#2A254B] mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Recycled packaging</h3>
            <p className="text-sm text-[#2A254B]">
              We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
