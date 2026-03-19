import { MailIcon, MapPin, MessageCircle, PhoneIcon } from "lucide-react";

export default function ContactDetailsSection() {
  return (
    <section className="w-full bg-white pt-20 md:pt-[120px] pb-20 md:pb-[163px] ">
      <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[37%_50%] gap-16">
        {/* LEFT TEXT */}
        <div>
          <h2 className="section-heading leading-[1.6]! lg:leading-22! mb-7 text-black lg:w-[76%]">
            Let’s Build What’s Next, Together
          </h2>

          <p className="para-text max-w-md leading-6.5! text-[#9A99A2] font-inter">
            We’re based at Infopark Koratty, Kerala. Whether you have a technical question, a deployment enquiry, or just want to talk, reach out and we’ll get back to you.
          </p>
        </div>

        {/* RIGHT DETAILS */}
        <div>
          <h3 className="text-xl regular-heading2 font-semibold mb-5 text-black">
            Contact Details
          </h3>
          <p className="para-text leading-6.5! text-[#9A99A2] mb-18 max-w-132 ">
            Our team typically responds within 1 business day.
          </p>

          <div className="border-b-[0.5px] flex gap-x-4.5 border-[#9A99A2] pb-[1.2rem] mb-8">
            <MapPin strokeWidth={0.7} className="size-5 lg:size-6 mt-0.5 shrink-0 text-black" />
            <div>
              <h4 className="regular-heading font-normal! flex items-center gap-2 mb-2">
                Address
              </h4>
              <p className="normal-text text-[#9A99A2] leading-[1.9]!">
                RIOD SDC, Office No. 4A-8, A-Wing, 4th Floor,<br />
                Indeevaram Building, Infopark Thrissur,<br />
                Koratty P.O, Kerala 680 308
              </p>
            </div>
          </div>

          <div className="border-b-[0.5px] flex gap-x-5.5 border-[#9A99A2] pb-[1.2rem] mb-8">
            <PhoneIcon strokeWidth={0.7} className="size-5 lg:size-6 lg:mt-3 text-black" />
            <div>
              <h4 className="regular-heading font-normal! flex items-center gap-2 mb-2">
                Phone
              </h4>
              <div className="flex items-center gap-4">
                <a href="tel:+919067090165" className="normal-text text-[#9A99A2] hover:text-black transition-colors">
                  +91 9067090165
                </a>
                <a
                  href="https://wa.me/919067090165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-[#25D366] hover:opacity-80 transition-opacity"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-x-4.5 border-b-[0.5px] border-[#9A99A2] pb-[1.2rem] mb-8">
            <MailIcon strokeWidth={0.7} className=" size-6 lg:size-7  lg:mt-3 text-black" />
            <div>
              <h4 className="regular-heading font-normal! flex items-center gap-2 mb-2">
                Email
              </h4>
              <p className="normal-text text-[#9A99A2]">hello@riod.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
