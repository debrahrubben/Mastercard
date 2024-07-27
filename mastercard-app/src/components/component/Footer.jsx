"use client";

import Link from "next/link";

export function Footer() {
  return (
    
    <footer className="hidden md:block bg-muted p-6 md:py-12 w-full bg">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold text-red-700">About</h3>
          <Link href="/about" prefetch={false}>History</Link>
          <Link href="/about" prefetch={false}>Mission & Values</Link>
          <Link href="/about" prefetch={false}>Leadership</Link>
          <Link href="/about" prefetch={false}>Accreditations</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold text-red-700">Academics</h3>
          <Link href="#" prefetch={false}>Undergraduate</Link>
          <Link href="#" prefetch={false}>Graduate</Link>
          <Link href="#" prefetch={false}>Online Programs</Link>
          <Link href="#" prefetch={false}>Research</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold text-red-700">Admissions</h3>
          <Link href="#" prefetch={false}>Apply</Link>
          <Link href="#" prefetch={false}>Tuition & Aid</Link>
          <Link href="#" prefetch={false}>Visit Campus</Link>
          <Link href="#" prefetch={false}>International Students</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold text-red-700">Campus Life</h3>
          <Link href="#" prefetch={false}>Housing</Link>
          <Link href="#" prefetch={false}>Dining</Link>
          <Link href="#" prefetch={false}>Student Organizations</Link>
          <Link href="#" prefetch={false}>Athletics</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold text-red-700">Resources</h3>
          <Link href="#" prefetch={false}>Library</Link>
          <Link href="#" prefetch={false}>Career Services</Link>
          <Link href="#" prefetch={false}>Counseling</Link>
          <Link href="#" prefetch={false}>Disability Services</Link>
        </div>
      </div>
    </footer>
  );
}
