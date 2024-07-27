// src/app/layout.js
import "./globals.css"
import { Footer } from "@/components/component/Footer";
import { Header } from "@/components/component/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <div class="h-2 bg-gradient-to-r from-red-700 to-yellow-500 rounded-full"></div>
        <Footer />
      </body>
    </html>
  );
}
