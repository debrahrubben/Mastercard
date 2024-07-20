// components/component/HomepageMainBody.js

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { newsData } from "./newsData";
import { carouselData } from "./carouselData"; // Import carousel data

export function HomepageMainBody() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="sticky top-0 z-10 bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between backdrop-blur-md ">
        <div className="flex items-center gap-4">
          <Image src="https://mastercardfdn.org/wp-content/themes/mastercard-foundation/assets/img/mc-logo-black.svg" alt="Acme University Logo" width={32} height={32} className="w-8 h-8" />
          <h1 className="text-2xl font-bold">KNUST Mastercard Foundation</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>About</Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>Academics</Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>Admissions</Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>Campus Life</Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>News</Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>Contact</Link>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <main className="flex-1">
        <Carousel className="w-full max-w-7xl mx-auto py-12 md:py-16 lg:py-20">
          <CarouselContent>
            {carouselData.map((item) => (
              <CarouselItem key={item.id}>
                <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-0">
                  <img src={item.imageUrl} width={600} height={400} alt="Carousel Image" className="rounded-lg w-full md:w-1/2 object-cover" />
                  <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-3xl font-bold">{item.headline}</h2>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Link href={`/carousel/${item.id}`} className="inline-flex items-center gap-2 text-primary font-medium hover:underline" prefetch={false}>
                      Learn More
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
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
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div
          className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link href="#" prefetch={false}>
              History
            </Link>
            <Link href="#" prefetch={false}>
              Mission & Values
            </Link>
            <Link href="#" prefetch={false}>
              Leadership
            </Link>
            <Link href="#" prefetch={false}>
              Accreditations
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Academics</h3>
            <Link href="#" prefetch={false}>
              Undergraduate
            </Link>
            <Link href="#" prefetch={false}>
              Graduate
            </Link>
            <Link href="#" prefetch={false}>
              Online Programs
            </Link>
            <Link href="#" prefetch={false}>
              Research
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Admissions</h3>
            <Link href="#" prefetch={false}>
              Apply
            </Link>
            <Link href="#" prefetch={false}>
              Tuition & Aid
            </Link>
            <Link href="#" prefetch={false}>
              Visit Campus
            </Link>
            <Link href="#" prefetch={false}>
              International Students
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Campus Life</h3>
            <Link href="#" prefetch={false}>
              Housing
            </Link>
            <Link href="#" prefetch={false}>
              Dining
            </Link>
            <Link href="#" prefetch={false}>
              Student Organizations
            </Link>
            <Link href="#" prefetch={false}>
              Athletics
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Library
            </Link>
            <Link href="#" prefetch={false}>
              Career Services
            </Link>
            <Link href="#" prefetch={false}>
              Counseling
            </Link>
            <Link href="#" prefetch={false}>
              Disability Services
            </Link>
          </div>
        </div>
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
