

export default function LocationSection() {
  return (
    <section className="w-full bg-white pt-20 md:pt-[7.7rem] pb-32 md:pb-52 ">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <h2 className="section-heading text-gray-900 mb-6">Location</h2>

        <p className="text-[#9a99a2]  para-text ">
          RIOD is strategically located to support innovation and collaboration. Use the map below to discover our location and connect with us for product demos, discussions, or partnerships.
        </p>

        {/* Map */}
        <div className="w-full overflow-hidden mt-20 lg:mt-32">
          <iframe
            src="https://www.google.com/maps?q=Indeevaram+Building,+Infopark+Thrissur,+Koratty,+Kerala+680308&output=embed"
            className="w-full h-[400px] lg:h-[560px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
