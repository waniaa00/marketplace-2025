export default function Email() {
  return (
    <section className="bg-gray-100 py-10 max-w-[1440px]">
      <div className="bg-white mx-6 sm:mx-12 md:mx-24">
        <h1 className="text-3xl text-center text-[#2A254B] mb-4 pt-10 pb-2">
          Join the club and get the benefits
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Sign up for our newsletter and receive exclusive offers on new <br />
          ranges, sales, pop up stores, and more
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 pb-10">
          {/* Email Input and Sign Up Button */}
          <button className="bg-gray-100 px-6 py-2 w-full sm:w-auto mb-4 sm:mb-0">
            your@email.com
          </button>
          <span className="bg-[#2A254B] text-white px-6 py-2 w-full sm:w-auto flex justify-center items-center hover:bg-blue-600 focus:outline-none">
            Sign up
          </span>
        </div>
      </div>
    </section>
  );
}
