import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RIOD",
  description:
    "RIOD's privacy policy — how we collect, use, and protect your personal information across our EV charging and energy management platforms.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 bg-white">
      <div className="w-[90%] max-w-[900px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-inter font-semibold text-black mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#9a99a2] font-inter mb-10">
          Last updated: March 2026
        </p>

        <div className="space-y-8 text-[#626262] font-inter leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              1. Introduction
            </h2>
            <p>
              RnD Square Pvt. Ltd. (&quot;RIOD&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website riod.in, use our EV charging products, mobile
              applications, energy management platforms, or engage with any of
              our services (collectively, the &quot;Services&quot;).
            </p>
            <p className="mt-3">
              By accessing or using our Services, you agree to this Privacy
              Policy. If you do not agree with the terms of this policy, please
              do not access the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              2. Information We Collect
            </h2>
            <h3 className="text-base font-semibold text-black mb-2">
              2.1 Personal Information
            </h3>
            <p>We may collect the following personal information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Name, email address, phone number, and postal address when you
                create an account, submit a contact form, or place an order
              </li>
              <li>
                Billing and payment information processed through secure
                third-party payment gateways
              </li>
              <li>
                Company name and designation for business inquiries and
                partnerships
              </li>
              <li>
                Vehicle information (make, model) when using our EV charging
                services
              </li>
            </ul>

            <h3 className="text-base font-semibold text-black mt-4 mb-2">
              2.2 Usage and Device Data
            </h3>
            <p>We automatically collect:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                EV charging session data including start/stop times, energy
                consumed, and charger location
              </li>
              <li>
                Device information such as browser type, operating system, and
                IP address
              </li>
              <li>
                Website usage data through cookies and analytics tools
                (pages visited, time spent, referral sources)
              </li>
              <li>
                Energy consumption and monitoring data from our energy
                management platforms
              </li>
            </ul>

            <h3 className="text-base font-semibold text-black mt-4 mb-2">
              2.3 OCPP and Charger Data
            </h3>
            <p>
              Our EV chargers communicate via the Open Charge Point Protocol
              (OCPP). Data transmitted includes charger status, error codes,
              firmware versions, session logs, and metering values. This data
              is used solely for charger operations, diagnostics, and service
              improvement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide, operate, and maintain our Services</li>
              <li>
                Process transactions, manage your account, and send billing
                communications
              </li>
              <li>
                Monitor and optimize EV charger performance, uptime, and energy
                delivery
              </li>
              <li>
                Provide customer support and respond to inquiries
              </li>
              <li>
                Send product updates, service notifications, and marketing
                communications (with your consent)
              </li>
              <li>
                Improve our products through aggregated usage analytics and
                charger intelligence
              </li>
              <li>
                Comply with legal obligations and enforce our terms of service
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              4. Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell your personal information. We may share your data
              with:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Service providers:</strong> Third-party vendors who
                assist with payment processing, cloud hosting, analytics, and
                customer support
              </li>
              <li>
                <strong>Charge Point Operators (CPOs):</strong> If you use a
                charger managed by a third-party CPO through our platform, we
                share session data necessary for billing and operations
              </li>
              <li>
                <strong>Business partners:</strong> With your consent, for
                co-branded services or joint offerings
              </li>
              <li>
                <strong>Legal requirements:</strong> When required by law,
                regulation, or legal process
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              5. Data Security
            </h2>
            <p>
              We implement industry-standard security measures including TLS
              encryption for data in transit, encrypted storage for sensitive
              data, role-based access controls, and regular security audits.
              Our OCPP communications use secure WebSocket connections with
              certificate-based authentication where supported.
            </p>
            <p className="mt-3">
              While we strive to protect your information, no method of
              electronic transmission or storage is 100% secure. We cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as your account
              is active or as needed to provide Services. Charging session data
              is retained for billing reconciliation and regulatory compliance.
              You may request deletion of your account and associated data at
              any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              7. Cookies and Tracking
            </h2>
            <p>
              Our website uses cookies and similar technologies to enhance your
              experience, analyze usage patterns, and deliver relevant content.
              You can manage cookie preferences through your browser settings.
              Disabling cookies may affect certain features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              8. Your Rights
            </h2>
            <p>
              Under applicable Indian data protection laws, you have the right
              to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:hello@riod.in"
                className="text-black underline hover:text-[#cdf80a] transition-colors"
              >
                hello@riod.in
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              9. Third-Party Links
            </h2>
            <p>
              Our Services may contain links to third-party websites and
              services (including payment gateways and social media platforms).
              We are not responsible for the privacy practices of these third
              parties. We encourage you to review their privacy policies
              independently.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              10. Children&apos;s Privacy
            </h2>
            <p>
              Our Services are not directed to individuals under 18. We do not
              knowingly collect personal information from children. If we
              become aware that we have inadvertently collected data from a
              minor, we will take steps to delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date. Continued
              use of our Services after changes constitutes acceptance of the
              revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-black mb-3">
              12. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="mt-3 space-y-1">
              <p>
                <strong>RnD Square Pvt. Ltd.</strong>
              </p>
              <p>Hyderabad, Telangana, India</p>
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
                  href="https://riod.in"
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
