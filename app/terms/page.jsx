import PolicyActions from '../PolicyActions';

export const metadata = {
  title: 'Terms of Use | Legends',
  description: 'The terms governing access to and use of the Legends platform (AVELYTH PLATFORM LTD).',
};

export default function TermsPage() {
  return (
    <div className="privacy-page" id="termsPageRoot">
      <div className="wrap privacy-wrap">
        <a href="/" className="privacy-back">&larr; Back to Legends</a>
        <p className="eyebrow">Legal</p>
        <h1>Terms of Use</h1>
        <p className="privacy-updated">Last updated: 22 September 2026</p>
        <PolicyActions containerId="termsPageRoot" filename="legends-terms-of-use.txt" title="LEGENDS — TERMS OF USE" />

        <div className="privacy-body">
          <h3>1. Who we are &amp; acceptance</h3>
          <p>These terms apply to this website (the &quot;Site&quot;) and platform, operated by <strong>AVELYTH PLATFORM LTD</strong>, a company registered in Cyprus, with its registered address at Arch. Makariou III, 115, 3021, Limassol, Cyprus (&quot;Legends&quot;, &quot;we&quot;, &quot;us&quot;). By accessing the Site, applying for membership, attending a session, or messaging us on WhatsApp, you agree to these Terms of Use.</p>

          <h3>2. Membership eligibility</h3>
          <p>Membership is limited to investors, founders and operators who meet the network&apos;s eligibility criteria. Applications are reviewed at our discretion, and we may request supporting information to verify eligibility before an application is approved.</p>

          <h3>3. The platform &amp; AI-assisted introductions</h3>
          <p>Legends uses AI-assisted matching to help surface relevant introductions within the network. Matches and recommendations are provided as a starting point for human judgment &mdash; we make no warranty that any introduction, session or output will lead to a particular outcome.</p>

          <h3>4. Fees &amp; payment</h3>
          <p>Where a membership or event carries a fee, pricing and payment terms are confirmed at the time of application or registration. Refund terms, where applicable, are set out at checkout or in your membership agreement.</p>

          <h3>5. Confidentiality &amp; member conduct</h3>
          <p>Members agree to treat other members&apos; identities and business information as confidential, to engage with the network in good faith, and not to use the platform to solicit members for unrelated products or services. We may suspend or remove access for conduct that breaches this expectation.</p>

          <h3>6. Recording &amp; communications</h3>
          <p>Some sessions may be recorded for internal quality and network purposes. Where that is the case, it will be indicated at the time of the session. By providing your contact details &mdash; including messaging us on WhatsApp or opting in to WhatsApp updates &mdash; you agree we may contact you about your application, membership, and relevant network updates through that channel, subject to our Privacy Policy and your ability to opt out at any time.</p>

          <h3>7. Intellectual property</h3>
          <p>The Legends name, brand and site content are the property of AVELYTH PLATFORM LTD and may not be reproduced without permission. Content you submit to us in connection with your application or membership remains yours, and you grant us permission to use it to operate the platform.</p>

          <h3>8. Disclaimers &amp; limitation of liability</h3>
          <p>The platform is provided on an &quot;as available&quot; basis. To the extent permitted by law, Legends is not liable for indirect or consequential losses arising from your use of the platform, and our total liability is limited to the fees you have paid us in the twelve months preceding a claim.</p>

          <h3>9. Governing law</h3>
          <p>These terms are governed by the laws applicable to AVELYTH PLATFORM LTD&apos;s place of registration in Cyprus, without prejudice to any mandatory consumer protections that apply in your jurisdiction.</p>

          <h3>10. Changes to these terms</h3>
          <p>We may update these terms from time to time. Where changes are material, we will make reasonable efforts to notify active members.</p>

          <h3>11. Contact us</h3>
          <p>AVELYTH PLATFORM LTD<br />Arch. Makariou III, 115, 3021, Limassol, Cyprus<br />Site: coming soon<br />Phone: pending &mdash; to be added</p>

          <p className="privacy-note">These terms are a draft template prepared for review and are not a substitute for legal advice. Please have them reviewed by qualified counsel before publishing them as your site&apos;s binding terms of use. Fill in the final domain in section 11 once it&apos;s live.</p>
        </div>
      </div>
    </div>
  );
}
