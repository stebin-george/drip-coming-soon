// Policy text from "drip.live Legal PoliciesV3.docx" (Nov 17, 2026).
// Each section: { heading, body: [string | string[]] } — a string is a paragraph, an array is a bullet list.

const LAST_UPDATED = 'November 17, 2026';

export const terms = {
  title: 'Terms of Use',
  updated: LAST_UPDATED,
  sections: [
    {
      heading: '1. About these Terms',
      body: [
        'These Terms of Use ("Terms") govern access to and use of drip.live, the drip.live mobile and web applications, the drip.live console, and any drip.live software designed to run on compatible mobile devices and augmented reality (AR) or extended reality (XR) hardware (together, the "Platform"). The Platform is operated by DAMN, XOXO Inc., a company incorporated in Ontario, Canada ("drip.live", "we", "us", "our").',
        'drip.live is a business-to-business software platform. Organizations use it to create and run interactive AR experiences, such as AR scavenger hunts, placed 3D content and live-streamed events, which people view on mobile phones and smart glasses.',
      ],
    },
    {
      heading: '2. Who these Terms apply to',
      body: [
        [
          'Clients: businesses and institutions, including brands, experiential, PR and marketing agencies, venues, event producers and universities, that engage drip.live under an order form, statement of work or other written agreement (an "Agreement").',
          'Participants: individuals who take part in an experience a Client runs on the Platform, for example by joining an AR hunt or viewing content on a phone or smart glasses.',
          'Partners: artists, developers and hardware partners who work with drip.live under a separate partner agreement.',
          'Visitors: anyone browsing drip.live without an account.',
        ],
        "Where a Client's Agreement conflicts with these Terms, the Agreement governs for that Client.",
      ],
    },
    {
      heading: '3. Acceptance',
      body: [
        'By accessing the Platform, creating an account or taking part in an experience, you agree to these Terms and our Privacy Policy. If you use the Platform on behalf of an organization, you confirm you are authorized to accept these Terms for it. If you do not agree, do not use the Platform.',
      ],
    },
    {
      heading: '4. Eligibility',
      body: [
        "Client accounts may only be created by people aged 18 or older acting for an organization. Participants must be at least 13. Participants under the age of majority where they live confirm they have a parent or guardian's consent where local law requires it.",
      ],
    },
    {
      heading: '5. Software, not hardware',
      body: [
        'drip.live is a software and infrastructure layer. We do not manufacture the phones, smart glasses or other devices used to access the Platform.',
        [
          "Hardware warranties are governed solely by the manufacturer's own terms.",
          "Features that depend on smart glasses or other devices rely on that hardware's capabilities and firmware, and may differ between devices.",
          "Where drip.live provides smart glasses as part of a Client deployment, the devices remain our property and are governed by the Client's Agreement and our Refund & Cancellation Policy.",
        ],
      ],
    },
    {
      heading: '6. Licence',
      body: [
        'Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to use the Platform for its intended purpose. You may not:',
        [
          'copy, modify, reverse-engineer, decompile or create derivative works of the Platform;',
          'resell, sublicense or commercially exploit the Platform outside an Agreement;',
          'access the Platform other than through the interfaces we provide.',
        ],
      ],
    },
    {
      heading: '7. Intellectual property',
      body: [
        "The Platform, its software, design, 3D and AR rendering technology, and all content we provide are owned by DAMN, XOXO Inc. or its licensors. The Platform's technology is the subject of pending patent applications in Canada and the United States.",
        'The drip.. mark is registered in Canada (Registration No. TMA1,437,659) and is owned by or licensed to DAMN, XOXO Inc. Without our prior written permission, you may not use our names, logos or marks in a way that implies endorsement, or register any domain, social handle or business name likely to be confused with them.',
        'Client and partner content: you keep ownership of content you upload, such as logos, 3D assets, video and music. You grant us a worldwide, royalty-free licence to host, display and stream that content as needed to deliver your experience. You confirm you have the rights to everything you upload.',
      ],
    },
    {
      heading: '8. Fees and payment',
      body: [
        'Fees, payment terms and deliverables for Clients are set out in each Agreement or invoice. Payments are processed by third-party payment processors. Unless an Agreement says otherwise, invoices are due within 30 days and amounts are in Canadian dollars, plus applicable taxes. Refunds and cancellations are governed by our Refund & Cancellation Policy. Participants are not charged to take part in Client experiences.',
      ],
    },
    {
      heading: '9. Rewards',
      body: [
        'Some experiences include points, badges or rewards. These have no cash value, cannot be transferred, and may be changed or ended by drip.live or the Client running the experience.',
      ],
    },
    {
      heading: '10. Camera and AR data',
      body: [
        "AR features use your device's camera to place content in your surroundings. This camera processing happens on your device; camera images are not sent to or stored on our servers unless a feature clearly tells you otherwise and asks for your consent. We do not use facial recognition or biometric identification.",
      ],
    },
    {
      heading: '11. Prohibited conduct',
      body: [
        'You agree not to:',
        [
          'use GPS spoofing, bots, emulators or other means to fake presence, engagement or results;',
          'hack, exploit or interfere with the Platform, its rewards or its payment systems;',
          'create multiple accounts to get around limits or fraud controls;',
          'harass or threaten other people, or interfere with venue or event staff;',
          "upload content that is unlawful or infringes anyone's rights;",
          'record or redistribute content from the Platform without permission.',
        ],
        'We may suspend access and withdraw rewards for any breach.',
      ],
    },
    {
      heading: '12. Physical safety',
      body: [
        'Stay aware of your surroundings when using AR features. Do not use them while driving, cycling or operating machinery, and do not enter private or restricted areas to reach AR content. Follow the instructions of event and venue staff.',
      ],
    },
    {
      heading: '13. Disclaimers',
      body: [
        'THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT, EXCEPT AS SET OUT IN AN AGREEMENT. WE DO NOT GUARANTEE UNINTERRUPTED SERVICE, THE ACCURACY OF LOCATION OR AR PLACEMENT, OR COMPATIBILITY WITH ANY PARTICULAR DEVICE.',
      ],
    },
    {
      heading: '14. Limitation of liability',
      body: [
        'To the maximum extent permitted by law, drip.live and its officers, directors and employees are not liable for indirect, incidental, special, consequential or punitive damages, or for lost profits, revenue, data or goodwill. Our total liability for any claim is limited to the greater of the fees you paid us in the 12 months before the claim or CAD $100, unless an Agreement sets a different limit.',
      ],
    },
    {
      heading: '15. Indemnity',
      body: [
        'You agree to indemnify DAMN, XOXO Inc. and its officers, directors and employees against claims, losses and reasonable legal costs arising from your breach of these Terms, your content, or your violation of any law or third-party right.',
      ],
    },
    {
      heading: '16. Suspension and termination',
      body: [
        'We may suspend or end access to the Platform for suspected fraud, infringement, safety concerns or breach of these Terms. Clients may end their use as set out in their Agreement. Participants and other users may delete their account at any time from their account settings or by contacting us.',
      ],
    },
    {
      heading: '17. Governing law',
      body: [
        'These Terms are governed by the laws of Ontario and the federal laws of Canada that apply there. Disputes are subject to the exclusive jurisdiction of the courts of Ontario, except where consumer protection law requires otherwise.',
      ],
    },
    {
      heading: '18. Changes',
      body: [
        'We may update these Terms. We will post the new version here with a new "Last updated" date and notify Clients of material changes. Continued use after changes means you accept them.',
      ],
    },
    {
      heading: '19. General',
      body: [
        'If any part of these Terms is found unenforceable, the rest remains in effect. These Terms, together with any Agreement and our Privacy Policy, are the entire agreement between you and us about the Platform.',
      ],
    },
    {
      heading: '20. Contact',
      body: ['DAMN, XOXO Inc. · Toronto, Ontario, Canada · team@drip.live'],
    },
  ],
};

export const privacy = {
  title: 'Privacy Policy',
  updated: LAST_UPDATED,
  sections: [
    {
      heading: '1. Who we are',
      body: [
        "drip.live is operated by DAMN, XOXO Inc., Toronto, Ontario, Canada. This policy explains how we handle personal information across drip.live, our mobile and web applications, our console, and our AR software. We comply with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).",
      ],
    },
    {
      heading: '2. Information we collect',
      body: [
        [
          'Account information: name, email address, phone number and organization details for Client users; name or username and email for Participants who create an account.',
          'Business and billing information: company name, billing contact and invoicing details. Card payments are handled by our payment processor; we do not store full card numbers.',
          "Location data: where an experience depends on location, such as an AR hunt or venue check-in, we use your device's location for that purpose only. We do not keep a continuous location history.",
          'Experience and usage data: which experiences you join, actions taken, rewards earned and time spent. Clients receive this in aggregate to measure their experiences.',
          'Camera data: AR features process camera input on your device to place content. Camera images are not sent to or stored on our servers unless a feature clearly tells you and asks for consent. We do not use facial recognition or biometric identification.',
          'Device data: device type, operating system, app version and connected AR hardware model, for compatibility and support.',
          'Website data: IP address, browser type, referring pages and on-site activity, collected through cookies (see section 9).',
        ],
      ],
    },
    {
      heading: '3. How we use it',
      body: [
        [
          'To provide, secure and support the Platform and your account',
          'To run experiences, rewards and analytics for Clients',
          'To invoice Clients and meet tax and accounting obligations',
          'To prevent fraud, duplicate accounts and abuse',
          'To improve the Platform',
          "To send service messages, and marketing only where you have consented, in line with Canada's Anti-Spam Legislation (CASL)",
        ],
      ],
    },
    {
      heading: '4. Sharing',
      body: [
        'We do not sell personal information. We share it only with:',
        [
          'Service providers that help us run the Platform, including cloud hosting, payment processing, streaming, email and website analytics (Google and Meta), under confidentiality obligations;',
          'The Client running an experience you join, limited to what they need, usually aggregated results;',
          'Authorities, where required by law.',
        ],
      ],
    },
    {
      heading: '5. Where data is stored',
      body: [
        'Platform data is hosted on Amazon Web Services in Canada. Some service providers may process data outside Canada; where they do, it is protected by contract and may be subject to the laws of that country.',
      ],
    },
    {
      heading: '6. Retention and deletion',
      body: [
        'We keep personal information only as long as needed for the purposes above. You can delete your account at any time from your account settings or by contacting us. Some records, such as invoices, are kept as long as Canadian tax law requires, typically seven years.',
      ],
    },
    {
      heading: '7. Your rights',
      body: [
        'You can ask to access or correct your personal information, ask us to delete it, or withdraw consent to optional uses such as marketing. Contact team@drip.live and we will respond within 30 days. You may also contact the Office of the Privacy Commissioner of Canada.',
      ],
    },
    {
      heading: '8. Children',
      body: [
        'The Platform is not intended for children under 13, and we do not knowingly collect their personal information. Where local law sets a higher age for consent, that age applies.',
      ],
    },
    {
      heading: '9. Cookies',
      body: [
        'Our website uses:',
        [
          'Essential cookies for security, logins and core functions. These cannot be turned off without affecting the site.',
          'Analytics cookies to understand how the website is used in aggregate, through Google and Meta analytics tools. Experience metrics on the Platform are measured with our own tools.',
          'Marketing cookies only if we run advertising campaigns, and only with your consent where required.',
        ],
        'You can control cookies through your browser settings or our cookie banner where one is shown.',
      ],
    },
    {
      heading: '10. Security',
      body: [
        'We use encryption in transit (HTTPS/TLS), access controls and secure password storage. No system is completely secure. If a breach creates a real risk of significant harm, we will notify affected people and the Privacy Commissioner as PIPEDA requires.',
      ],
    },
    {
      heading: '11. Changes',
      body: [
        'We may update this policy and will post the new version here with a new "Last updated" date. We will notify account holders of material changes.',
      ],
    },
    {
      heading: '12. Contact',
      body: ['Privacy questions or requests: team@drip.live · DAMN, XOXO Inc., Toronto, Ontario, Canada'],
    },
  ],
};

export const refunds = {
  title: 'Refund & Cancellation Policy',
  updated: LAST_UPDATED,
  intro: [
    'drip.live is a business-to-business platform operated by DAMN, XOXO Inc. All paid services are provided under a signed agreement, order form or approved invoice, which sets out the deliverables, timeline and payment terms. Where that agreement differs from this policy, the agreement applies.',
  ],
  sections: [
    {
      heading: 'Pilots and projects',
      body: [
        'Clients may cancel in writing at least 14 days before the scheduled start date for a full refund, less any non-refundable costs already incurred, such as content production or third-party fees. Cancellations within 14 days of the start date are non-refundable unless agreed otherwise in writing. If we cancel, you receive a full refund of amounts paid for undelivered work.',
      ],
    },
    {
      heading: 'Subscriptions and licensing',
      body: [
        'Clients may cancel at any time, effective at the end of the current billing period. We do not refund partial periods.',
      ],
    },
    {
      heading: 'Smart-glasses hardware',
      body: [
        'Smart glasses provided as part of a deployment remain the property of DAMN, XOXO Inc. and must be returned in working condition at the end of the deployment. The Client is responsible for loss or damage beyond normal wear, as set out in the agreement. Any hardware deposit is refunded once the devices are returned and checked.',
      ],
    },
    {
      heading: 'Participants',
      body: ['Participants are not charged to take part in experiences, so no refunds apply to them.'],
    },
    {
      heading: 'Problems with a service',
      body: [
        'If a service was not delivered as agreed, email team@drip.live within 14 days of delivery. We will work with you to fix it, redeliver it, or issue a full or partial refund.',
      ],
    },
    {
      heading: 'How refunds are paid',
      body: ['Approved refunds are returned to the original payment method within 10 business days.'],
    },
    {
      heading: 'Contact',
      body: ['DAMN, XOXO Inc. · Toronto, Ontario, Canada · team@drip.live'],
    },
  ],
};
