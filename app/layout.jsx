import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Legends — Private investor network',
  description: 'A private network for people who deploy capital. Co-investors, deals and introductions matched to your thesis.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
