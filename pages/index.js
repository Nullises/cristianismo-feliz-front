import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Spinner } from "@material-tailwind/react";
// dynamic: Lazy Load in Next.js
const DynamicArticles = dynamic(() => import("../components/articles"), {
  loading: () => <Spinner className="h-16 w-16 text-blue-gray-200/50" />,
  suspense: true,
});
const DynamicLayout = dynamic(() => import("../components/layout"), {
  loading: () => <Spinner className="h-16 w-16 text-blue-gray-200/50" />,
  suspense: true,
});
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import es from "../assets/img/es.png";

const Home = ({ articles, categories, homepage }) => {
  return (
    <>
      <DynamicLayout categories={categories}>
        <Seo seo={homepage.attributes.seo} />
        <div className="uk-section">
          <div className="uk-container">
            <div className="flex justify-center mt-1">
              <Image
                src={es}
                width={100}
                height={100}
                className="w-1/8 h-1/8"
                alt="Picture of the author"
              />
            </div>
            <div className="flex justify-center self-center mb-8 mt-2">
              <h1 className="text-5xl text-center">
                {homepage.attributes.hero.title}
              </h1>
            </div>
            <DynamicArticles articles={articles} />
          </div>
        </div>
      </DynamicLayout>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;