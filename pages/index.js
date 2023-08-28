import React from "react";
import Image from "next/image";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import es from "../assets/img/es.png";

const Home = ({ articles, categories, homepage }) => {
  return (
    <>
      <Layout categories={categories}>
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
            <Articles articles={articles} />
          </div>
        </div>
      </Layout>
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