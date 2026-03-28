import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | RIOD",
  description:
    "Terms and conditions for using RIOD's EV charging products, energy management platforms, and related services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 bg-white">
      <div className="w-[90%] max-w-[900px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-inter font-semibold text-black mb-2">
          Terms and Conditions
        </h1>
        <p className="text-sm text-[#9a99a2] font-inter mb-10">
          Last updated: March 2026
        </p>

        <div className="space-y-8 text-[#626262] font-inter leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your access
              to and use of the website, products, and services provided by RnD
              Square Pvt. Ltd., operating under the brand name RIOD
              (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;). By accessing our website at riod.in, using our
              EV charging products, mobile applications, or energy management
              platforms (collectively, the &quot;Services&quot;), you agree to
              be bound by these Terms.
            </p>
            <p className="mt-3">
              If you do not agree to these Terms, you must not use our
              Services. We reserve the right to modify these Terms at any time,
              and your continued use constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              2. Services Overview
            </h2>
            <p>RIOD provides:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                EV charging hardware (AC Powerpod, Powerpod Go, Powerpod City)
                and related accessories
              </li>
              <li>
                Energy management and infrastructure monitoring platforms
              </li>
              <li>
                Charging management software (CMS), fleet management, and
                operations suites
              </li>
              <li>
                Power Master dynamic load balancing systems
              </li>
              <li>
                Technical support, installation guidance, and maintenance
                services
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              3. Account Registration
            </h2>
            <p>
              Certain Services require you to create an account. You are
              responsible for maintaining the confidentiality of your account
              credentials and for all activities that occur under your account.
              You must provide accurate, current, and complete information
              during registration and keep your account information updated.
            </p>
            <p className="mt-3">
              We reserve the right to suspend or terminate accounts that
              contain false information or are used in violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              4. EV Charging Services
            </h2>
            <h3 className="text-base font-semibold text-black mb-2">
              4.1 Charger Usage
            </h3>
            <p>
              When using RIOD EV chargers, you agree to follow all posted
              instructions, use compatible vehicles and connectors, and not
              tamper with, damage, or modify the charging equipment. You are
              responsible for ensuring your vehicle is compatible with the
              charger specifications before initiating a session.
            </p>

            <h3 className="text-base font-semibold text-black mt-4 mb-2">
              4.2 Charging Sessions and Billing
            </h3>
            <p>
              Charging sessions are metered by the charger hardware. Billing is
              based on energy consumed (kWh), session duration, or a
              combination as determined by the charge point operator. All
              charges are final unless a billing error is identified and
              reported within 7 days.
            </p>

            <h3 className="text-base font-semibold text-black mt-4 mb-2">
              4.3 Availability
            </h3>
            <p>
              While we strive to maintain high charger uptime, we do not
              guarantee uninterrupted availability of any charging station.
              Chargers may be temporarily unavailable due to maintenance,
              technical issues, power outages, or other factors beyond our
              control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              5. Product Purchases
            </h2>
            <h3 className="text-base font-semibold text-black mb-2">
              5.1 Orders and Pricing
            </h3>
            <p>
              All product prices are listed in Indian Rupees (INR) and are
              subject to applicable taxes. We reserve the right to modify
              pricing without prior notice. Orders are subject to acceptance
              and availability. We may cancel orders due to pricing errors,
              stock unavailability, or suspected fraud.
            </p>

            <h3 className="text-base font-semibold text-black mt-4 mb-2">
              5.2 Warranty
            </h3>
            <p>
              RIOD EV chargers come with a standard 2-year manufacturer
              warranty covering defects in materials and workmanship under
              normal use. The warranty does not cover damage from misuse,
              unauthorized modifications, improper installation, power surges,
              or natural disasters. Warranty claims must be submitted with
              proof of purchase.
            </p>

            <h3 className="text-base font-semibold text-black mt-4 mb-2">
              5.3 Installation
            </h3>
            <p>
              Professional installation by a certified electrician is required
              for all RIOD charging products. Installation must comply with
              local electrical codes and regulations. RIOD is not liable for
              damages arising from improper installation by unauthorized
              personnel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              6. Software and Platform Terms
            </h2>
            <h3 className="text-base font-semibold text-black mb-2">
              6.1 License
            </h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license
              to use our software platforms (including CMS, fleet management,
              and energy management tools) solely for their intended purpose in
              connection with RIOD products and services.
            </p>

            <h3 className="text-base font-semibold text-black mt-4 mb-2">
              6.2 Restrictions
            </h3>
            <p>You may not:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Reverse engineer, decompile, or disassemble any RIOD software
              </li>
              <li>
                Copy, modify, or create derivative works based on our platforms
              </li>
              <li>
                Use the software for purposes other than managing RIOD-compatible
                charging infrastructure
              </li>
              <li>
                Attempt to gain unauthorized access to our systems or other
                users&apos; data
              </li>
              <li>
                Use automated scripts, bots, or scrapers against our platforms
              </li>
            </ul>

            <h3 className="text-base font-semibold text-black mt-4 mb-2">
              6.3 OCPP Compliance
            </h3>
            <p>
              Our chargers and platforms support OCPP 1.6J and/or OCPP 2.0.1
              protocols. Interoperability with third-party backends is provided
              on a best-effort basis. We do not guarantee compatibility with
              every OCPP-compliant system.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              7. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos,
              product designs, software, and documentation, is the property of
              RnD Square Pvt. Ltd. and is protected by Indian and international
              intellectual property laws. The RIOD brand name, logo, and
              product names (Powerpod, Powerpod Go, Powerpod City, Power
              Master) are trademarks of RnD Square Pvt. Ltd.
            </p>
            <p className="mt-3">
              You may not use, reproduce, or distribute any content from our
              Services without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, RIOD and its
              directors, employees, and affiliates shall not be liable for any
              indirect, incidental, special, consequential, or punitive
              damages, including but not limited to loss of profits, data, or
              business opportunity, arising from your use of our Services.
            </p>
            <p className="mt-3">
              Our total liability for any claim arising from these Terms or
              your use of the Services shall not exceed the amount you paid to
              RIOD in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              9. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless RIOD and its
              officers, directors, employees, and agents from any claims,
              liabilities, damages, losses, and expenses (including legal fees)
              arising from your use of the Services, violation of these Terms,
              or infringement of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              10. Governing Law and Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising from these Terms or your
              use of the Services shall be subject to the exclusive
              jurisdiction of the courts in Infopark Koratty, Kerala 680308, India.
            </p>
            <p className="mt-3">
              Before initiating legal proceedings, both parties agree to
              attempt resolution through good-faith negotiation for a period of
              30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              11. Force Majeure
            </h2>
            <p>
              RIOD shall not be liable for any failure or delay in performing
              its obligations due to circumstances beyond its reasonable
              control, including natural disasters, acts of government, power
              failures, internet disruptions, pandemics, or supply chain
              disruptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              12. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary, and the remaining provisions shall
              remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              13. Contact Us
            </h2>
            <p>
              For questions about these Terms, please contact us:
            </p>
            <div className="mt-3 space-y-1">
              <p>
                <strong>RnD Square Pvt. Ltd.</strong>
              </p>
              <p>Infopark Koratty, Kerala 680308, India</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@riod.in"
                  className="text-black underline hover:text-[#cdf80a] transition-colors"
                >
                  hello@riod.in
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://riod.energy"
                  className="text-black underline hover:text-[#cdf80a] transition-colors"
                >
                  riod.in
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
