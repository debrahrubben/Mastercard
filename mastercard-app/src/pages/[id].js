// pages/[id].js

import { FullnewsCard } from "@/components/component/fullnews-card";
import { newsData } from "@/components/component/newsData";

export default function NewsPage({ article }) {
  return <FullnewsCard article={article} />;
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const article = newsData.find((article) => article.id === parseInt(id));

  return {
    props: {
      article,
    },
  };
}
