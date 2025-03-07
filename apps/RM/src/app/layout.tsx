import { Footer, Navbar } from '@credence/ui';
import './global.css';
import { navbarLinks } from './constants';
import { SharedQueryProvider } from '@credence/api';

export const metadata = {
  title: 'Welcome to RM',
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
          <Navbar appName="RM" navLinks={navbarLinks}  />
          {children}
          <Footer />
        </SharedQueryProvider>
        </body>
    </html>
  );
}
