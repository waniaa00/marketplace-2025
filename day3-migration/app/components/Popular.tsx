import Image from "next/image";

export default function PopularProducts() {
  const products = [
    {
      name: "The Poplar suede sofa",
      price: "£980",
      image: "/p1.png",
    },
    {
      name: "The Dandy chair",
      price: "£250",
      image: "/c1.png",
    },
    {
      name: "The Dandy chair",
      price: "£250",
      image: "/p2.png",
    },
  ];

  return (
    <div className="bg-white max-w-[1440px] h-auto text-[#2A254B] py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-start text-2xl md:text-3xl mb-8">
          Our popular products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* First Product: Larger Width on Mobile */}
          <div className="sm:col-span-2 md:col-span-2">
            <Image
              src={products[0].image}
              alt={products[0].name}
              width={630}
              height={375}
              className="w-full h-[375px] object-cover mb-4"
            />
            <h3 className="text-lg font-thin text-start">{products[0].name}</h3>
            <p className="text-[#2A254B] text-start">{products[0].price}</p>
          </div>

          {/* Remaining Products */}
          {products.slice(1).map((product, index) => (
            <div key={index} className="w-full">
              <Image
                src={product.image}
                alt={product.name}
                width={305}
                height={375}
                className="w-full h-[375px] object-cover mb-4"
              />
              <h3 className="text-lg font-thin text-start">{product.name}</h3>
              <p className="text-[#2A254B] text-start">{product.price}</p>
            </div>
          ))}
        </div>

        {/* View Collection Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-gray-100 text-[#2A254B] font-semibold rounded-lg shadow-md hover:bg-gray-200">
            View collection
          </button>
        </div>
      </div>
    </div>
  );
}
