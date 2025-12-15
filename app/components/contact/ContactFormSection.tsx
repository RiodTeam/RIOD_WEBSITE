export default function ContactFormSection() {
  return (
    <section className="w-full bg-[#1C1C1C] text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* LEFT FORM */}
        <div>
          <label className="block mb-2 font-medium">Name *</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 mb-6 focus:outline-none"
          />

          <label className="block mb-2 font-medium">Primary Email *</label>
          <input
            type="email"
            placeholder="Corporate E-mail"
            className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 mb-6 focus:outline-none"
          />

          <label className="block mb-2 font-medium">Primary Contact Number *</label>
          <div className="flex gap-2 mb-6">
            <div className="flex items-center border border-gray-600 px-4 py-3 rounded-md">
              🇮🇳 +91
            </div>
            <input
              type="text"
              placeholder="Phone number"
              className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 focus:outline-none"
            />
          </div>

          <label className="block mb-2 font-medium">Tell Us About You</label>
          <textarea
            placeholder="Type Your Message"
            className="w-full h-40 bg-transparent border border-gray-600 rounded-md px-4 py-3 focus:outline-none resize-none"
          />

          <button className="mt-10 bg-white text-black px-10 py-3 rounded-md font-medium hover:opacity-80 transition">
            CONTACT US →
          </button>
        </div>

        {/* RIGHT TEXT BLOCK */}
        <div className="flex flex-col justify-center border-l border-gray-700 pl-10">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-snug">
            What Do You Need Help With?
          </h2>

          <p className="text-gray-400 leading-relaxed">
            RNDSquare is your end-to-end R&D partner, transforming bold ideas into
            market-ready innovations. We combine cutting-edge engineering, IoT solutions,
            and software expertise to design, build, and scale products that drive
            real-world impact.
          </p>
        </div>

      </div>
    </section>
  );
}
