export default function TermsOfUsePage() {
  return (
    <div className="bg-white text-gray-800 px-4 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">STRAQA LIMITED – TERMS OF USE</h1>
      <p className="text-center text-sm text-gray-500 mb-10">Effective Date: May 7, 2025</p>

      <hr className="border-t border-gray-300 mb-6" />

      <section className="space-y-6">
        <p>
          Welcome to Straqa! These Terms of Use (“Terms”) are a binding agreement between you (“you” or “User”) and Straqa Limited
          (“Straqa,” “we,” “our,” or “us”), a Software-as-a-Service (SaaS) company offering digital infrastructure for Hotels, Events,
          E-commerce, Transportation, and Gym/Fitness businesses.
        </p>

        <p>
          These Terms govern your access to and use of all products and services we offer, including but not limited to our websites,
          applications, APIs, dashboards, and associated tools (collectively, the “Services”). By accessing, registering with, or using
          our Services, you agree to be bound by these Terms.
        </p>

        <hr className="border-t border-gray-300" />

        {[
          {
            title: "1. Acceptance of Terms",
            content: `By using Straqa’s Services, you affirm that you have read, understood, and accepted these Terms and our Privacy Policy, and agree to comply 
with all applicable laws and regulations. If you do not agree, please do not use the Services. If you are acting on behalf of an organization, you represent that 
you are authorized to bind that entity to these Terms.`,
          },
          {
            title: "2. Description of Services",
            content: `Straqa provides a modular software platform that enables businesses to efficiently manage and scale operations in the following sectors:\n• 
Hospitality (Hotels): Room reservations, guest check-ins, billing, customer communication, and analytics.\n• Events: Online ticket sales, attendee check-in, QR-code 
access control, and real-time event reporting.\n• E-commerce: Storefront creation, order processing, inventory management, and payment integration.\n• 
Transportation: Vehicle booking, fleet and ticket management, route planning, and customer ticketing.\n• Gyms & Fitness Centers: Membership and class scheduling, 
access control, and performance tracking.`,
          },
          {
            title: "3. Eligibility",
            content: `You must be at least 18 years old (or the legal age of majority in your country) to use our Services. By using the Services, you warrant that 
you meet this requirement.`,
          },
          {
            title: "4. User Accounts",
            content: `To access some features, you must register for an account. You agree to:\n• Provide accurate, current, and complete information,\n• Maintain 
the security of your login credentials,\n• Notify us immediately of any unauthorized use of your account,\n• Take full responsibility for all activities under your 
account.`,
          },
          {
            title: "5. Permitted Use",
            content: `You may use the Services solely for your internal business operations and in compliance with these Terms. You agree not to:\n• Use the 
Services for unlawful, fraudulent, or malicious purposes,\n• Copy, modify, or reverse engineer our platform,\n• Interfere with the performance or integrity of the 
Services,\n• Use the Services to transmit spam, malware, or harmful content.`,
          },
          {
            title: "6. Payment and Billing",
            content: `Some Services may be subject to subscription fees. By purchasing such Services, you agree to:\n• Pay all fees as stated on the platform,\n• 
Authorize us to charge your payment method,\n• Pay applicable taxes, where relevant.\n\nStraqa reserves the right to change its pricing and billing terms at any 
time, with reasonable prior notice.`,
          },
          {
            title: "7. Intellectual Property",
            content: `All content, trademarks, logos, code, designs, and other intellectual property related to the Services are the sole property of Straqa Limited 
or its licensors. You may not use any of these materials without our prior written consent.`,
          },
          {
            title: "8. Data and Privacy",
            content: `We may collect and process data related to your use of the Services as described in our Privacy Policy. By using the Services, you consent to 
our collection, use, and sharing of your data in accordance with that policy.\n\nYou retain ownership of your content, but grant Straqa a license to use, host, and 
display such content as needed to provide the Services.`,
          },
          {
            title: "9. Service Availability and Support",
            content: `We aim to maintain 99.9% uptime but do not guarantee uninterrupted availability. We may occasionally perform maintenance or updates which may 
cause temporary disruptions.\n\nSupport is available via our Help Center or by contacting support@straqa.com.`,
          },
          {
            title: "10. Termination",
            content: `Straqa may suspend or terminate your account and access to the Services if:\n• You violate these Terms,\n• You fail to pay fees owed,\n• Your 
account remains inactive for an extended period,\n• We are required to do so by law or for security reasons.\n\nYou may cancel your subscription or account at any 
time. Upon termination, your right to use the Services will cease immediately.`,
          },
          {
            title: "11. Disclaimers",
            content: `The Services are provided on an “as is” and “as available” basis. Straqa makes no warranties or guarantees about:\n• The accuracy or 
reliability of any data,\n• That the Services will be uninterrupted, secure, or error-free,\n• That any defects will be corrected.\n\nTo the extent permitted by 
law, we disclaim all implied warranties, including merchantability and fitness for a particular purpose.`,
          },
          {
            title: "12. Limitation of Liability",
            content: `To the fullest extent allowed by law, Straqa Limited shall not be liable for:\n• Indirect, incidental, special, or consequential damages,\n• 
Loss of profits, business, data, or goodwill,\n• Damages arising from your use or inability to use the Services.\n\nOur total liability shall not exceed the amount 
paid by you to us for the Services in the preceding 6 months.`,
          },
          {
            title: "13. Modifications to Terms",
            content: `We reserve the right to update or modify these Terms at any time. Changes will be effective upon posting to our website. Your continued use of 
the Services after such changes constitutes your acceptance.`,
          },
          {
            title: "14. Governing Law & Dispute Resolution",
            content: `These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved by arbitration or in the courts of 
competent jurisdiction located in Lagos, Nigeria, unless otherwise agreed in writing.`,
          },
          {
            title: "15. Contact Information",
            content: `If you have any questions or concerns about these Terms, you may contact us at:\n\nStraqa Limited\nEmail: support@straqa.com\nWebsite: 
www.straqa.com`,
          },
        ].map(({ title, content }, i) => (
          <div key={i}>
            <h2 className="text-xl font-semibold mt-8 mb-2">{title}</h2>
            <p className="whitespace-pre-line">{content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

