

export default function LocationSection() {
  return (
    <section className="w-full bg-white pt-20 pb-28 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-gray-900 mb-6">Location</h2>

        <p className="text-gray-600 max-w-3xl para-text mb-12">
          RIOD is strategically located to support innovation and collaboration. Use the map below to discover our location and connect with us for product demos, discussions, or partnerships. 
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
