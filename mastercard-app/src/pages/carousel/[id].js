// pages/carousel/[id].js

import { FullnewsCard } from "@/components/component/fullnews-card";
import { carouselData } from "@/components/component/carouselData";

export default function CarouselPage({ article }) {
  return <FullnewsCard article={article} />;
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const article = carouselData.find((item) => item.id === parseInt(id)) || {};

  return {
    props: {
      article,
    },
  };
}

