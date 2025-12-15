export default function ContactDetailsSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-16">
      <div className=" w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT TEXT */}
        <div>
          <h2 className="section-heading leading-[5.5rem]! mb-6">
            Let’s Build
            <br />
            What’s Next,
            <br />
            Together
          </h2>

          <p className="para-text max-w-md text-[#9A99A2]">
            To accelerate India’s shift towards sustainable electric mobility
            through cutting-edge EV charging infrastructure that’s intelligent,
            reliable, and accessible.
          </p>
        </div>

        {/* RIGHT DETAILS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
          <p className="para-text text-[#9A99A2] mb-10 max-w-xl ">
            To accelerate India’s shift towards sustainable electric mobility
            through cutting-edge EV charging infrastructure that's intelligent.
          </p>

          <div className="border-b pb-6 mb-6">
            <h4 className="regular-heading font-[400]! flex items-center gap-2 mb-2">
              Address
            </h4>
            <p className="normal-text text-[#9A99A2]">
              RIOD LOGIC PVT LTD 11/334-H, 2nd Floor, Kallely Tower, Vengoor,
              Kidangoor P.O, Angamaly Kochi, Kerala India - 683572
            </p>
          </div>

          <div className="border-b pb-6 mb-6">
            <h4 className="regular-heading font-[400]! flex items-center gap-2 mb-2">Phone</h4>
            <p className="normal-text text-[#9A99A2]">+91 9067090165</p>
          </div>

          <div>
            <h4 className="regular-heading font-[400]! flex items-center gap-2 mb-2">Email</h4>
            <p className="normal-text text-[#9A99A2]">info@riod.in</p>
          </div>
        </div>
      </div>
    </section>
  );
}
