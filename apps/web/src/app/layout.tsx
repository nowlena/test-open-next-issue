import type { ReactNode } from 'react';
import { Suspense } from 'react';
import Link from 'next/link';

type LayoutProps = {
  children: ReactNode;
};

const links = [
  { label: 'Home', href: '/' },
  { label: 'Request', href: '/request' },
  { label: 'Route Group', href: '/route-group' },
  { label: 'Route Group (Request)', href: '/route-group-request' },
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
