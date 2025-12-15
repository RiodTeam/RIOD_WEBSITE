import Image from "next/image";

export default function LocationSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
          Location
        </h2>

        <p className="text-gray-600 max-w-3xl leading-relaxed mb-12">
          RNDSquare is your end-to-end R&D partner, transforming bold ideas into
          market-ready innovations. We combine cutting-edge engineering, IoT solutions,
          and software expertise to design, build, and scale products that drive
          real-world impact. From initial concept and prototyping to application
          development and lifecycle support, we work alongside your team to bring
          ambitious visions to life.
        </p>

        <div className="w-full overflow-hidden rounded-lg border">
          <Image
            src="/images/map.png" // replace with your image
            alt="Map"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
