import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import QueryProvider from '@/components/QueryProvider';


export const metadata: Metadata = {
  title: 'Mini-Commerce',
  description: 'Simple e-commerce shop with quality products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <QueryProvider>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main>{children}</main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}