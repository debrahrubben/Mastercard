// src/app/layout.js



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            {/* Navigation bar component or links */}
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          {/* Footer component */}
        </footer>
      </body>
    </html>
  );
}
