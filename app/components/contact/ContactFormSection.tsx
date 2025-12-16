
import CountryCodeSelect from "./CountrySelector";
import Image from "next/image";

export default function ContactFormSection() {
  return (
    <section className="w-full bg-[#1C1C1C] text-white pt-26 pb-[6.2rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT FORM */}
        <div className="mt-6">
          <label className="block mb-3 para-text2">Name <span className="text-red-600" >*</span></label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full bg-transparent border-[0.5px] border-white px-4 py-[11px] mb-7 placeholder:text-[13px] focus:outline-none"
          />

          <label className="block mb-3 para-text2">Primary Email <span className="text-red-600" >*</span></label>
          <input
            type="email"
            placeholder="Corporate E-mail"
            className="w-full bg-transparent border-[0.5px] border-white px-4 py-[11px] mb-7 placeholder:text-[13px] focus:outline-none"
          />

          <label className="block mb-3 para-text2">Primary Contact Number <span className="text-red-600" >*</span></label>
          <div className="flex gap-0 mb-6">
            <CountryCodeSelect />

            <input
              type="text"
              placeholder="Phone number"
              className="w-full bg-transparent border-[0.5px] border-white placeholder:text-[13px] px-4 py-[11px] focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center mb-3 mt-12">
            <label className="para-text2">
              Tell Us About You
            </label>

            <span className="text-[12px] text-[#9A99A2]">
              0 / 500
            </span>
          </div>

          <textarea
            maxLength={500}
            placeholder="Type Your Message"
            className="w-full h-40 bg-transparent border-[0.5px] border-white placeholder:text-[13px] px-4 py-3 focus:outline-none resize-none"
          />


          <button className="mt-[4.3rem] w-full bg-white text-black px-8 py-[1.2rem] flex justify-between font-medium hover:opacity-80 transition">
            <p className="text-md font-inter font-normal" >CONTACT US</p>  <Image
              src="/footer/arrow.svg"
              alt="arrow"
              width={12}
              height={14}
              className="object-contain"
            />
          </button>
        </div>

        {/* RIGHT TEXT BLOCK */}
        <div className="flex flex-col justify-start border-l-[0.5px] border-white pl-10 lg:pl-20">
          <h2 className="section-heading mb-6">
            What Do You Need Help With?
          </h2>

          <p className="text-[#9a99a2] leading-9! normal-text">
            Connect with RIOD for all inquiries related to our EV charging stations and IoT solutions. Share your details through the form below, and our experts will reach out with tailored information and next steps.
          </p>
        </div>

      </div>
    </section>
  );
}
