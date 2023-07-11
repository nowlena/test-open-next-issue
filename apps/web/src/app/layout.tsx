import type { ReactNode } from 'react';
import { Suspense } from 'react';
import Link from 'next/link';

type LayoutProps = {
  children: ReactNode;
};

const links = [
  { label: 'Home', href: '/' },
  { label: 'Request No Cache', href: '/request-no-cache' },
  { label: 'Request Reval 3 Secs', href: '/request-reval-3' },
  { label: 'Route Group: Static', href: '/route-group-static' },
  {
    label: 'Route Group: Request No Cache',
    href: '/route-group-request-no-cache',
  },
  {
    label: 'Route Group: Request Reval 3',
    href: '/route-group-request-reval-3',
  },
];

const RootLayout = ({ children }: LayoutProps) => (
  <html lang="en">
    <body>
      {/* link to our various pages */}
      <nav>
        <ul>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{ marginRight: '8px' }}>
              {label}
            </Link>
          ))}
        </ul>
      </nav>
      {/* render our page content */}
      <main>
        <Suspense>{children}</Suspense>
      </main>
    </body>
  </html>
);

export default RootLayout;
