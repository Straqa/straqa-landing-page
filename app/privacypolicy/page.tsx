// app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">
        Effective Date: May 1, 2025 | Last Updated: May 1, 2025
      </p>

      <section className="space-y-8">
        <p>
          At Straqa Limited (“Straqa,” “we,” “our,” or “us”), we are committed
          to safeguarding your personal data. This Privacy Policy explains how
          we collect, use, store, share, and protect information about users
          (“you” or “your”) when you engage with our platforms and services.
        </p>

        <p>
          By accessing or using any part of the Straqa platform, you acknowledge
          that you have read, understood, and agreed to this Privacy Policy.
        </p>

        <hr className="border-gray-300" />

        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Personal Info:</strong> Name, email, phone, DOB, gender, ID
            docs, etc.
          </li>
          <li>
            <strong>Service-Specific:</strong> Ticketing, health data, ride
            history, etc.
          </li>
          <li>
            <strong>Automatic:</strong> IP, device type, location, logs, etc.
          </li>
          <li>
            <strong>Payment:</strong> Secure third-party payment info (not card
            details).
          </li>
        </ul>

        <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Account registration and management</li>
          <li>Transaction processing</li>
          <li>Customer support and communications</li>
          <li>Platform improvement and security</li>
          <li>Legal compliance</li>
        </ul>

        <h2 className="text-xl font-semibold">3. Legal Basis for Processing</h2>
        <p>
          We rely on consent, contractual necessity, legal obligation, and
          legitimate interest.
        </p>

        <h2 className="text-xl font-semibold">4. Sharing and Disclosure</h2>
        <p>
          Data is shared only with necessary third parties under strict
          contracts, including event or transport partners, authorities, and
          legal entities during business transactions.
        </p>

        <h2 className="text-xl font-semibold">5. Cookies and Tracking</h2>
        <p>
          Cookies help us improve functionality and personalize your experience.
          You may disable them in browser settings.
        </p>

        <h2 className="text-xl font-semibold">6. Data Security</h2>
        <p>
          Measures include encryption, 2FA, secure servers, access controls, and
          regular audits.
        </p>

        <h2 className="text-xl font-semibold">7. Data Retention</h2>
        <p>
          Data is retained as necessary per service type, legal requirements, or
          until deleted by request.
        </p>

        <h2 className="text-xl font-semibold">8. International Transfers</h2>
        <p>
          We comply with NDPR, GDPR, and use mechanisms like SCCs for lawful
          transfers.
        </p>

        <h2 className="text-xl font-semibold">9. Your Rights</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Access, rectification, and erasure</li>
          <li>Data portability</li>
          <li>Objection or withdrawal of consent</li>
        </ul>
        <p>Email requests to support@straqa.com</p>

        <h2 className="text-xl font-semibold">10. Children’s Privacy</h2>
        <p>
          No data is knowingly collected from children under 13. Any such data
          will be deleted immediately.
        </p>

        <h2 className="text-xl font-semibold">11. External Links</h2>
        <p>
          We are not responsible for third-party privacy practices. Please
          review their policies separately.
        </p>

        <h2 className="text-xl font-semibold">12. Policy Changes</h2>
        <p>
          Updates will be posted with a new effective date. Major changes will
          be notified via email or app.
        </p>

        <h2 className="text-xl font-semibold">13. Contact Us</h2>
        <p>
          Straqa Technologies <br />
          Email: support@straqa.com <br />
          Phone: +234 905 155 5542 <br />
          Address: [Insert physical office address]
        </p>
      </section>
    </main>
  );
}

