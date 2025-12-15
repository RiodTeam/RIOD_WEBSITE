import { ArrowRightIcon } from "lucide-react";
import CountryCodeSelect from "./CountrySelector";


export default function ContactFormSection() {
  return (
    <section className="w-full bg-[#1C1C1C] text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
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
        <div className="flex flex-col justify-start border-l-[0.5px] border-white pl-10">
          <h2 className="section-heading mb-6">
            What Do You Need Help With?
          </h2>

          <p className="text-gray-400 para-text">
           Connect with RIOD for all inquiries related to our EV charging stations and IoT solutions. Share your details through the form below, and our experts will reach out with tailored information and next steps. 
          </p>
        </div>

      </div>
    </section>
  );
}
