// app/e-sign-consent/page.tsx
export default function ESignConsentPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">
        Electronic Signature Disclosure and Consent Agreement
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Effective Date: May 1, 2025 | Last Updated: May 1, 2025
      </p>

      <section className="space-y-8">
        <p>
          This Agreement is a legally binding document between you (“you,” “your,” or
          “User”) and Straqa Limited (“Straqa,” “we,” “our,” or “us”). It governs your use
          of electronic records and signatures in interactions with Straqa via our digital
          platforms.
        </p>

        <p>
          By agreeing, you acknowledge the legal validity of electronic signatures under
          Nigerian law, the NDPR, and international laws like the ESIGN Act and eIDAS.
        </p>

        <hr className="border-gray-300" />

        <h2 className="text-xl font-semibold">1. Purpose of this Agreement</h2>
        <p>
          This informs you of your rights and gains your consent to use electronic records
          and signatures instead of paper-based documentation. It applies to:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Registration forms</li>
          <li>Ticketing agreements & confirmations</li>
          <li>Consent and legal forms</li>
          <li>Payment authorizations</li>
          <li>Audit trails and receipts</li>
        </ul>

        <h2 className="text-xl font-semibold">2. Your Consent</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>You agree to receive and sign all records electronically</li>
          <li>You accept that e-signatures have the same legal force as physical ones</li>
          <li>You confirm access to tech to view/save electronic records</li>
        </ul>

        <h2 className="text-xl font-semibold">3. Delivery of Communications</h2>
        <p>
          Communications will be sent via email, Straqa's web/app platforms, or secure
          e-signature tools. Keep your contact details current and allow emails from Straqa.
        </p>

        <h2 className="text-xl font-semibold">4. Types of Electronic Records Covered</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Terms of use, policies, legal documents</li>
          <li>Service contracts, vendor agreements</li>
          <li>Authorizations, invoices, receipts</li>
        </ul>
        <p>Some notices may still be sent via paper when legally required.</p>

        <h2 className="text-xl font-semibold">5. Your Responsibilities</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Maintain internet access and a secure browser</li>
          <li>Keep a working email address</li>
          <li>Be able to open, save, and print PDF documents</li>
        </ul>

        <h2 className="text-xl font-semibold">6. Requesting Paper Copies</h2>
        <p>
          You may request paper copies via email. Straqa may charge for printing and
          postage (where lawful).
        </p>

        <h2 className="text-xl font-semibold">7. Withdrawal of Consent</h2>
        <p>
          You can withdraw your consent by emailing support@straqa.com with your name and
          account details. This may impact your access to digital services.
        </p>

        <h2 className="text-xl font-semibold">8. Duration and Scope of Consent</h2>
        <p>
          Consent remains valid until withdrawn or your relationship with Straqa ends. It
          applies to all current/future digital interactions unless noted otherwise.
        </p>

        <h2 className="text-xl font-semibold">9. Legal Effect</h2>
        <p>
          Your e-signature (clicking, typing, checking a box, or touch-based signing) is
          legally binding. Straqa may use audit logs and timestamps to verify consent.
        </p>

        <h2 className="text-xl font-semibold">10. Amendments to this Agreement</h2>
        <p>
          Straqa may update this Agreement at any time. You’ll be notified via email or in
          your account. Continued use constitutes renewed consent.
        </p>

        <h2 className="text-xl font-semibold">11. Contact Us</h2>
        <p>
          Straqa Limited <br />
          Email: support@straqa.com <br />
          Phone: +234 905 155 5542
        </p>
      </section>
    </main>
  );
}

