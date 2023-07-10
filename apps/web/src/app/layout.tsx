import type { ReactNode } from 'react';
import { Suspense } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => (
  <html lang="en">
    <body>
      <Suspense>{children}</Suspense>
    </body>
  </html>
);

export default RootLayout;
