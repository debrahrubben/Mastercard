"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { newsData } from './newsData';

export function HomepageMainBody() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="sticky top-0 z-10 bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Image src="https://mastercardfdn.org/wp-content/themes/mastercard-foundation/assets/img/mc-logo-black.svg" alt="Acme University Logo" width={32} height={32} className="w-8 h-8" />
          <h1 className="text-2xl font-bold">KNUST Mastercard Foundation</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Academics
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Admissions
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Campus Life
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            News
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <main className="flex-1">
        <Carousel className="w-full max-w-7xl mx-auto py-12 md:py-16 lg:py-20">
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
                <img src="/placeholder.svg" width={600} height={400} alt="Carousel Image" className="rounded-lg w-full md:w-1/2 object-cover" />
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-3xl font-bold">Upcoming Campus Event</h2>
                  <p className="text-muted-foreground">Join us for our annual campus event featuring speakers, workshops, and more.</p>
                  <Link href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:underline" prefetch={false}>
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
                <img src="/placeholder.svg" width={600} height={400} alt="Carousel Image" className="rounded-lg w-full md:w-1/2 object-cover" />
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-3xl font-bold">New Degree Program</h2>
                  <p className="text-muted-foreground">Explore our latest degree program in Sustainable Engineering.</p>
                  <Link href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:underline" prefetch={false}>
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
                <img src="/placeholder.svg" width={600} height={400} alt="Carousel Image" className="rounded-lg w-full md:w-1/2 object-cover" />
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-3xl font-bold">Research Highlights</h2>
                  <p className="text-muted-foreground">Discover the latest groundbreaking research from our faculty.</p>
                  <Link href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:underline" prefetch={false}>
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <section className="container mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((article) => (
              <Card key={article.id}>
                <CardContent>
                  <img
                    src={article.imageUrl}
                    width={300}
                    height={200}
                    alt="News Image"
                    className="rounded-lg w-full h-48 object-cover object-center mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{article.headline}</h3>
                  <p className="text-sm text-muted-foreground mb-4">By {article.author} | {article.date}</p>
                  <p className="text-muted-foreground mb-4">{article.content.slice(0, 100)}...</p>
                  <Link href={`/${article.id}`} className="text-primary font-medium hover:underline" prefetch={false}>
                    Read More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-4 px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Acme University. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
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
