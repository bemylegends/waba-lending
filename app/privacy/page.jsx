import PolicyActions from '../PolicyActions';

export const metadata = {
  title: 'Privacy Policy | Legends',
  description: 'How Legends (AVELYTH PLATFORM LTD) collects, uses and protects your personal data.',
};

export default function PrivacyPage() {
  return (
    <div className="privacy-page" id="privacyPageRoot">
      <div className="wrap privacy-wrap">
        <a href="/" className="privacy-back">&larr; Back to Legends</a>
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="privacy-updated">Last updated: 22 September 2026</p>
        <PolicyActions containerId="privacyPageRoot" filename="legends-privacy-policy.txt" title="LEGENDS — PRIVACY POLICY" />

        <div className="privacy-body">
          <h3>1. Who we are</h3>
          <p>This policy applies to this website (the &quot;Site&quot;) and to our WhatsApp communications. The Site and platform are operated by <strong>AVELYTH PLATFORM LTD</strong>, a company registered in Cyprus, with its registered address at Arch. Makariou III, 115, 3021, Limassol, Cyprus (&quot;Legends&quot;, &quot;we&quot;, &quot;us&quot;). This policy explains what personal data we collect, why we collect it, and the choices you have.</p>

          <h3>2. Data we collect</h3>
          <p>When you apply for membership, register for a session, message us, or contact us, we collect information you provide directly &mdash; such as your name, email address, phone number, company, role, and the details of your application. If you message us or opt in to receive messages from us on WhatsApp, we also receive your WhatsApp-registered phone number and the content of that conversation. We may also collect basic technical data (browser type, device, general location) automatically when you visit the Site.</p>

          <h3>3. How we use your data</h3>
          <p>We use your data to review membership and event applications, operate sessions and introductions, respond to enquiries, maintain the security of the Site, and comply with legal obligations.</p>

          <h3>4. WhatsApp &amp; messaging communications</h3>
          <p>We use the WhatsApp Business Platform, provided by Meta Platforms, Inc. / Meta Platforms Ireland Limited (&quot;Meta&quot;), to communicate with applicants and members who message us on WhatsApp or who opt in to receive WhatsApp messages from us. We use your phone number and message content to respond to you, process your application, and, where you have agreed, send you service and membership updates over WhatsApp. Messages you send and receive through WhatsApp are also processed by Meta as an independent processor of the WhatsApp Business Platform, in accordance with <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener">WhatsApp&apos;s own Privacy Policy</a>. <strong>You can stop receiving WhatsApp messages from us at any time</strong> by replying STOP, or by blocking or reporting our business number within WhatsApp.</p>

          <h3>5. Marketing communications</h3>
          <p>With your consent, or where otherwise permitted by law, we may send you emails or WhatsApp messages about upcoming sessions, membership updates, and other Legends content. <strong>You may withdraw this consent and unsubscribe at any time</strong> &mdash; every marketing email includes an unsubscribe link, WhatsApp messages can be stopped as described above, or you can write to us at the contact details below and we will stop sending you marketing communications. Unsubscribing does not affect transactional messages related to an active application or membership.</p>

          <h3>6. Sharing your data</h3>
          <p>We do not sell your personal data. We share it only with service providers who help us operate the Site and our membership and messaging process &mdash; including Meta, which processes messages sent via the WhatsApp Business Platform on our behalf (see section 4) &mdash; and only to the extent necessary for them to perform that work, or where required by law.</p>

          <h3>7. Data retention</h3>
          <p>We keep personal data only for as long as necessary for the purposes described in this policy, including to satisfy legal, accounting, or reporting requirements.</p>

          <h3>8. Your rights</h3>
          <p>Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal data, and to object to or withdraw consent for marketing or WhatsApp messaging. To exercise any of these rights, contact us using the details below.</p>

          <h3>9. Cookies</h3>
          <p>This site uses only the technical data necessary for it to function. It does not set marketing or tracking cookies.</p>

          <h3>10. Contact us</h3>
          <p>AVELYTH PLATFORM LTD<br />Arch. Makariou III, 115, 3021, Limassol, Cyprus<br />Site: coming soon<br />Phone: pending &mdash; to be added</p>

          <p className="privacy-note">This policy is a draft template prepared for review and is not a substitute for legal advice. Please have it reviewed by qualified counsel before publishing it as your site&apos;s binding privacy policy. Before submitting it for WhatsApp Business Platform / Meta review, fill in the final domain and a working contact email or phone number in section 10 &mdash; placeholders there are likely to fail verification.</p>
        </div>
      </div>
    </div>
  );
}
