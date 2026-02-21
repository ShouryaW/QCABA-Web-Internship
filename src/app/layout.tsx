'use client';

import { SessionProvider } from 'next-auth/react'; // Importing SessionProvider for authentication handling
import Link from 'next/link'; // Assuming you're using Next.js Link for navigation
import './globals.css'; // Import global CSS styles
import styles from './Layout.module.css'; // Importing layout-specific styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>QCABA - Québec Association of Behavior Analysis</title>
        <meta name="description" content="QCABA - Promoting Behavior Analysis in Québec" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Wrapping the entire application with SessionProvider to enable authentication handling */}
        <SessionProvider>
          {/* Header Section with Navigation */}
          <header className={styles.header}>
            <Link href="/" className={styles.logo}>
              <img src="/logo.png" alt="QCABA Logo" width={120} height={120} />
            </Link>
            <nav className={styles.nav}>
              <Link href="/about" className={styles.navLink}>About</Link>
              <Link href="/membership" className={styles.navLink}>Membership</Link>
              <Link href="/events" className={styles.navLink}>Events</Link>
              <Link href="/login" className={styles.navLink}>Login</Link>
            </nav>
          </header>

          {/* Main Content */}
          <main>
            {children} {/* Render dynamic page content */}
          </main>

          {/* Footer Section */}
          <footer className={styles.footer}>
            <p>Contact us at <a href="mailto:info@qcaba.org">info@qcaba.org</a></p>
            <p>Location: Montréal, Québec, Canada</p>
            <p>&copy; 2024 Québec Association of Behavior Analysis (QCABA). All rights reserved.</p>
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
