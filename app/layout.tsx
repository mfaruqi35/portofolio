import './globals.css';

export const metadata = {
  title: 'Portfolio Saya',
  description: 'Portfolio menggunakan Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}