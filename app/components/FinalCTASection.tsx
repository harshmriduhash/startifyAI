export default function FinalCTASection() {
  return (
    <section className="container mx-auto text-center py-16 px-6 bg-gray-100 rounded-lg mt-16 mb-30">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6">So, What Are You Waiting For?</h2>
      <p className="text-gray-600 mb-8">
        Start your startup journey today with StartifyAI.
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4 ">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Sign Up Now
        </button>
        <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
          Schedule Demo
        </button>
      </div>
    </section>
  );
}
