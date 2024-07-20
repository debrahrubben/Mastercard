"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between backdrop-blur-md">
      <div className="flex items-center gap-4">
        <Image src="https://mastercardfdn.org/wp-content/themes/mastercard-foundation/assets/img/mc-logo-black.svg" alt="Acme University Logo" width={32} height={32} className="w-8 h-8" />
        <h1 className="text-2xl font-bold">KNUST Mastercard Foundation</h1>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/about" className="text-sm font-medium hover:underline" prefetch={false}>About</Link>
        <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>Academics</Link>
        <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>Admissions</Link>
        <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>Campus Life</Link>
        <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>News</Link>
        <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>Contact</Link>
      </nav>
      <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMenu}>
        <MenuIcon className="w-6 h-6" />
        <span className="sr-only">Toggle navigation</span>
      </Button>
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-primary-foreground py-4 px-6 flex flex-col items-start">
          <Link href="/about" className="text-sm font-medium hover:underline py-1" prefetch={false}>About</Link>
          <Link href="#" className="text-sm font-medium hover:underline py-1" prefetch={false}>Academics</Link>
          <Link href="#" className="text-sm font-medium hover:underline py-1" prefetch={false}>Admissions</Link>
          <Link href="#" className="text-sm font-medium hover:underline py-1" prefetch={false}>Campus Life</Link>
          <Link href="#" className="text-sm font-medium hover:underline py-1" prefetch={false}>News</Link>
          <Link href="#" className="text-sm font-medium hover:underline py-1" prefetch={false}>Contact</Link>
        </div>
      )}
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
