"use client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { newsData } from "@/components/component/newsData";
import { carouselData } from "@/components/component/carouselData"; // Import carousel data
import Link from "next/link";

const HomepageMainBody = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 bg-slate-100">
        <div className="w-full max-w-7xl mx-auto py-12 md:py-16 lg:py-20 overflow-hidden relative">
          <Carousel className="relative">
            <CarouselContent className="relative flex">
              {carouselData.map((item) => (
                <CarouselItem key={item.id} className="relative flex items-center justify-center w-full flex-shrink-0">
                  <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-0 w-full max-w-6xl">
                    <Image
                      src={item.imageUrl}
                      width={600}
                      height={400}
                      alt="Carousel Image"
                      className="rounded-lg w-full md:w-1/2 object-cover"
                    />
                    <div className="space-y-4 text-center md:text-left">
                      <h2 className="text-3xl font-bold">{item.headline}</h2>
                      <p className="text-muted-foreground">{item.description}</p>
                      <Link
                        href={`/carousel/${item.id}`}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-amber-500"
                        prefetch={false}
                      >
                        Learn More
                        <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
            <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
          </Carousel>
        </div>
        <section className="container mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8" id="news">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((article) => (
              <Card key={article.id}>
                <CardContent>
                  <Image
                    src={article.imageUrl}
                    width={300}
                    height={200}
                    alt="News Image"
                    className="rounded-lg w-full h-48 object-cover object-center mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{article.headline}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    By {article.author} | {article.date}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {article.content.slice(0, 100)}...
                  </p>
                  <Link href={`/${article.id}`} className="text-primary font-medium hover:underline text-amber-500" prefetch={false}>
                    Read More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
export default HomepageMainBody;

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
