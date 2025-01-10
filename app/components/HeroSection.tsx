export default function HeroSection() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center py-16 px-6 gap-10 pb-24">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-6xl font-bold mb-6 text-gray-900">
          Welcome to <span className="text-6xl">Startify-AI</span>
        </h1>
        <h1 className="text-4xl font-semibold mb-6  ">
          Your <span className="text-343CFF">AI Co-Pilot</span> for{" "}
          <span className="text-43B660">Startup Success 🚀</span>
        </h1>
        <p className="text-lg text-gray-600 mb-20">
          Plan, Build, and Grow Your Startup with Real-time Insights, Smart
          Recommendations, and Powerful Tools.
        </p>

        <div className="mb-1">
          <h3 className="text-xl font-semibold mb-4">
            So what are you waiting for? Start your{" "}
            <span className="underline">startup journey</span> with{" "}
            <span className="text-343CFF">Startify-AI</span> now
          </h3>
        </div>
      </div>

      {/* Vector Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/vector.svg"
          alt="Hero Vector"
          className="w-[80%] md:w-[90%] lg:w-[100%] max-w-2xl mx-auto"
        />
      </div>
    </section>
  );
}
