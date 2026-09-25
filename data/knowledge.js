// Source: belegends.club/blog.
// TODO: paste the full essay text into `body` (array of blocks) — until then the page shows the summary
// and a link to the original on the live blog.
// Block types: { p: '...' }, { h: '...' }, { quote: '...' }
const B = 'https://belegends.club/blog/';

export const ARTICLES = [
  { slug: 'before-the-numbers-i-read-the-team', tag: 'Essay', author: 'Janneke Niessen', authorRole: 'Founding Partner, CapitalT',
    date: '23 Sept 2026', eventDate: '22 Sept 2026', eventTitle: 'How a Startup With No Revenue Raises Up to €2.5M',
    eventUrl: 'https://belegends.club/events/how-a-startup-with-no-revenue-raises-up-to-2-5m',
    title: 'Before the Numbers, I Read the Team',
    excerpt: 'How CapitalT assesses founding teams before revenue exists: traits, human capital, team dynamics and what drives the founders.',
    img: 'https://belegends.club/api/files/pbc_1687431684/kwj6ys0yl8rpp2z/84lqdbvecvo_jxfp00qtbs.png', body: null },
  { slug: 'slop-is-not-bad-work', tag: 'Essay', author: 'Walied Albasheer', authorRole: 'Founder & Managing Partner',
    date: '19 Sept 2026', eventDate: '15 Sept 2026', eventTitle: 'How a 30-Year Tech Founder Spots Real Companies Behind AI-Perfect Pitches',
    eventUrl: 'https://belegends.club/events/how-to-spot-real-companies-in-the-age-of-ai',
    title: 'Slop Is Not Bad Work',
    excerpt: '265 fund pitches, zero fraudulent submissions. What AI changed about pitch artifacts — and what it did not change about the gatekeeping.',
    img: 'https://belegends.club/api/files/pbc_1687431684/vl5gdqr1s6vdjjp/walied_albasheer_6at4u98zk4.png', body: null },
  { slug: 'your-moat-was-never-the-product', tag: 'Essay', author: 'Varun Malik', authorRole: 'Founder & CEO, Konsälidön',
    date: '13 Sept 2026', eventDate: '8 Sept 2026', eventTitle: 'How to Profit as a Human in an Unforgiving AI World',
    eventUrl: 'https://belegends.club/events/one-business-hundreds-of-independent-minds',
    title: 'Your Moat Was Never the Product',
    excerpt: 'When intermediary services stop being necessary, the value proposition dissolves. Why AI makes distribution the real advantage.',
    img: 'https://belegends.club/api/files/pbc_1687431684/senl9tnhxv04zgw/varun_prev_f85bcua4y1.jpg', body: null },
  { slug: 'what-we-mean-when-we-ask-for-ownership', tag: 'Essay', author: 'Julius Bachmann', authorRole: 'Founder, Bachmann Catalyst',
    date: '9 Sept 2026', eventDate: '25 Aug 2026', eventTitle: 'How to Build Ownership Culture & Care: Insights from 200+ Scale-Up Companies',
    eventUrl: 'https://belegends.club/events/ownership-culture-and-care',
    title: 'What We Mean When We Ask for Ownership',
    excerpt: 'Boards keep asking management to act like owners. The equity mechanisms that turn that expectation into something real.',
    img: 'https://images.lumacdn.com/uploads/bs/ac902c55-d881-468b-bfdb-320677d8a8ec.png', body: null },
  { slug: 'what-is-not-core-i-make-it-my-core', tag: 'Essay', author: 'Vijay Sivaram', authorRole: 'Co-Founder, RVAI Global',
    date: '9 Sept 2026', eventDate: '11 Aug 2026', eventTitle: 'Legends InvestHack #1: How to Build 2B$ Company And Manage 650k+ People',
    eventUrl: 'https://luma.com/gxeiw4sg',
    title: 'What Is Not Core to a Company, I Make It My Core',
    excerpt: 'Managing 600,000 people through trust and values — and how the peripheral functions became the strategic focus.',
    img: 'https://images.lumacdn.com/uploads/2o/559112b4-ca42-4a7d-bfe8-66797fbb0833.png', body: null },
].map((a) => ({ ...a, original: B + a.slug, href: '/knowledge/' + a.slug }));
