import Image from "next/image";

export default function LocationSection() {
  return (
    <section className="w-full bg-white pt-20 pb-28 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-gray-900 mb-6">Location</h2>

        <p className="text-gray-600 max-w-3xl para-text mb-12">
          RNDSquare is your end-to-end R&D partner, transforming bold ideas into
          market-ready innovations. We combine cutting-edge engineering, IoT
          solutions, and software expertise to design, build, and scale products
          that drive real-world impact. From initial concept and prototyping to
          application development and lifecycle support, we work alongside your
          team to bring ambitious visions to life.
        </p>

        {/* Map */}
        <div className="w-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Thrissur,Kerala&output=embed"
            className="w-full h-[480px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
