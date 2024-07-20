// src/app/layout.js

import { Footer } from "@/components/component/Footer";
import { Header } from "@/components/component/Header";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
       <Footer />
      </body>
    </html>
  );
}
