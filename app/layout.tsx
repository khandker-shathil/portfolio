import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Khandker Shathil — Junior Software Developer', description: 'CSE graduate from North South University, learning and building with Next.js, React, Express.js, and MongoDB.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
