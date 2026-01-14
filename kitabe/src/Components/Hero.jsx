function Hero() {
  return (
    <section className="flex justify-center mt-20 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl">

        <div className="max-w-xl">
          <p className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
            “A reader lives a thousand lives before he dies.”
          </p>

          <p className="text-lg text-gray-600 mb-2">
            — George R. R. Martin
          </p>

          <p className="text-gray-900 mt-6 font-jakarta">
            Discover stories that stay with you long after the last page.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="https://i.pinimg.com/736x/9f/b9/05/9fb90594f8f89ca986305e0bb05cf6cf.jpg"
            alt="Hero Image"
            className="
              max-w-sm
              rounded-xl
              shadow-xl
              opacity-85
              mix-blend-multiply
            "
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
