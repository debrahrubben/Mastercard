// components/FullnewsCard.js

import { Button } from "@/components/ui/button";
import Link from "next/link";
import '../../app/globals.css'

export function FullnewsCard({ article }) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-10 flex items-center bg-background px-4 py-3 shadow-sm md:px-6">
        <Button variant="ghost" size="sm" className="mr-4 rounded-full p-1 hover:bg-muted" asChild>
          <Link href="/" aria-label="Go back" prefetch={false}>
            <ArrowLeftIcon className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-lg font-medium">News Article</h1>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
          <img
            src={article.imageUrl}
            width={1200}
            height={600}
            alt="News Article Image"
            className="mx-auto mb-6 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-lg object-cover object-center"
          />
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">{article.headline}</h2>
            <p className="mb-8 text-sm text-muted-foreground">By {article.author} | {article.date}</p>
            <article className="prose prose-gray max-w-none dark:prose-invert">
              {article.content.split("\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}
