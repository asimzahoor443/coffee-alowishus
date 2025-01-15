import './globals.css';
import { Inter, Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'] });

export const metadata = {
  title: 'Coffee Alowishus',
  description: 'Coffee Shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
