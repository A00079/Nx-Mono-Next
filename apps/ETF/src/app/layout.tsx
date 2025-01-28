import { SharedQueryProvider } from '@credence/api';
import './global.css';
import { Footer, Navbar } from '@credence/ui';
import { navbarLinks } from './constants';

export const metadata = {
  title: 'Welcome to etf',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SharedQueryProvider>
          <Navbar appName="ETF" navLinks={navbarLinks}  />
          {children}
          <Footer />
        </SharedQueryProvider>
      </body>
    </html>
  );
}
