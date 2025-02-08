import Image from "next/image";

export default function ProductShowcase() {
  const products = [
    {
      name: "The Dandy chair",
      price: "£250",
      image: "/c1.png",
    },
    {
      name: "Rustic Vase Set",
      price: "£155",
      image: "/c2.png",
    },
    {
      name: "The Silky Vase",
      price: "£125",
      image: "/c3.png",
    },
    {
      name: "The Lucy Lamp",
      price: "£399",
      image: "/c4.png",
    },
  ];

  return (
    <div className="bg-white max-w-[1440px] h-[761px] text-[#2A254B] py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-start text-2xl md:text-3xl mb-8">New ceramics</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-auto mb-4"
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
