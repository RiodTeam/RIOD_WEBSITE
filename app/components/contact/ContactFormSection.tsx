import { ArrowRightIcon } from "lucide-react";
import CountryCodeSelect from "./CountrySelector";


export default function ContactFormSection() {
  return (
    <section className="w-full bg-[#1C1C1C] text-white py-24 px-6 md:px-16">
      <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* LEFT FORM */}
        <div>
          <label className="block mb-2 para-text2">Name <span className="text-red-600" >*</span></label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full bg-transparent border-[0.5px] border-white px-4 py-3 mb-6 placeholder:text-[13px] focus:outline-none"
          />

          <label className="block mb-2 para-text2">Primary Email <span className="text-red-600" >*</span></label>
          <input
            type="email"
            placeholder="Corporate E-mail"
            className="w-full bg-transparent border-[0.5px] border-white px-4 py-3 mb-6 placeholder:text-[13px] focus:outline-none"
          />

          <label className="block mb-2 para-text2">Primary Contact Number <span className="text-red-600" >*</span></label>
          <div className="flex gap-0 mb-6">
              <CountryCodeSelect />

            <input
              type="text"
              placeholder="Phone number"
              className="w-full bg-transparent border-[0.5px] border-white placeholder:text-[13px] px-4 py-3 focus:outline-none"
            />
          </div>

          <label className="block mb-2 para-text2">Tell Us About You</label>
          <textarea
            placeholder="Type Your Message"
            className="w-full h-40 bg-transparent border-[0.5px] border-white placeholder:text-[13px] px-4 py-3 focus:outline-none resize-none"
          />

          <button className="mt-10 w-full bg-white text-black px-10 py-3 flex justify-between font-medium hover:opacity-80 transition">
            <p className="text-md font-inter font-normal" >CONTACT US</p> <ArrowRightIcon strokeWidth={1} />
          </button>
        </div>

        {/* RIGHT TEXT BLOCK */}
        <div className="flex flex-col justify-start border-l-[0.5px] border-white pl-20">
          <h2 className="section-heading mb-6">
            What Do You Need Help With?
          </h2>

          <p className="text-gray-400 leading-9! normal-text">
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
