import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container max-w-[1440px] mx-auto h-auto flex items-center justify-center p-4">
      <Head>
        <title>Avelon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-[1280px] h-[584px] m-[60px] bg-white flex flex-col sm:flex-col md:flex-row ">
        {/* Text Section */}
        <div className="w-full sm:w-full md:w-3/5 bg-[#2A254B] p-6 sm:p-8 lg:p-14 flex flex-col justify-between">
          {/* Main Content Section */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-thin text-white mb-4 leading-snug sm:leading-relaxed">
              The furniture brand for the future, with timeless designs
            </h1>
            <button className="mt-4 bg-[#f9f9f9] bg-opacity-15 hover:bg-blue-700 text-white font-thin py-2 px-6  focus:outline-none focus:shadow-outline">
              View Collection
            </button>
          </div>

          {/* Description Section */}
          <div className="mt-6 sm:mt-8 lg:mt-10">
            <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
              A new era in eco-friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors, and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-full md:w-2/5 sm:h-64 md:h-auto flex justify-center items-center">
          <div className="w-full h-full relative">
            <Image
              src="/hero.png"
              alt="Chair"
              layout="fill"
              objectFit="cover"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
