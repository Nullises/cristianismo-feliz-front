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
import jesus from "../assets/img/jesus.png";
import fb_hero from "../assets/img/fb.jpeg";

const Home = ({ articles, categories, homepage }) => {
  return (
    <>
      <DynamicLayout categories={categories}>
        <Seo seo={homepage.attributes.seo} />
        <div className="uk-section">
          <div className="uk-container">
            <div className="flex justify-center mt-1">
              <Image
                src={jesus}
                width={250}
                height={250}
                className="w-1/8 h-1/8"
                alt="Picture of the author"
              />
            </div>
            <div className="flex justify-center self-center mb-8 mt-2">
              <h1 className="text-5xl text-center">
                {homepage.attributes.hero.title}
              </h1>
            </div>
            <div className="uk-section">
              <div className="uk-container">
                <div className="flex justify-center self-center mb-8 mt-2">
                  <h1 className="text-5xl text-center">
                    ¡NUEVO CANAL DE YOUTUBE!
                  </h1>
                </div>
                <span className="text-4xl text-center mb-10">
                  No olvides suscribirte y activar las notificaciones, y
                  compartir los videos para que más y más personas vivan un
                  cristianismo feliz
                </span>
                <div className="flex justify-center mt-1">
                  <iframe
                    width="1200"
                    height="600"
                    src="https://www.youtube.com/embed/JEHA6OE76n4"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="uk-section">
              <div className="uk-container">
                <div className="flex justify-center self-center mb-8 mt-2">
                  <h1 className="text-5xl text-center">
                    ¡NUEVO GRUPO EN FACEBOOK!
                  </h1>
                </div>
                <span className="text-4xl text-center mb-10">
                  No olvides unirte y compartir los artículos para que más y más
                  personas vivan un cristianismo feliz
                </span>
                <a
                  href="https://www.facebook.com/groups/1257994208210335"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={fb_hero} alt="Cristianismo Feliz" />
                </a>
              </div>
            </div>
            <h1 className="text-4xl text-center mb-10">ARTÍCULOS</h1>
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