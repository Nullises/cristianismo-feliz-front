import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

import Seo from "../../components/seo";
import Layout from "../../components/layout";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import style from "../../assets/css/markdown-styles.module.css";
import Image from "next/image";

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image);

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };

  function LinkRenderer(props) {
    console.log({ props });
    const link = props?.children?.[0];
    return (
      <a href={link} target="_blank" rel="noreferrer">
        {link}
      </a>
    );
  }

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h2 className="title-article text-5xl drop-shadow-2xl">
          {article.attributes.title}
        </h2>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown
            className={style.reactMarkDown}
            components={{ a: LinkRenderer }}
            transformImageUri={(uri) =>
              uri.startsWith("http")
                ? uri
                : `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${uri}`
            }
          >
            {article.attributes.content}
          </ReactMarkdown>
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div className="bg-article">
              {article.attributes.author.data.attributes.picture && (
                <img
                  style={{
                    position: "static",
                    borderRadius: "20%",
                    height: 60,
                  }}
                  src={getStrapiMedia(
                    article.attributes.author.data.attributes.picture
                  )}
                  alt={
                    article.attributes.author.data.attributes.picture.data
                      .attributes.alternativeText
                  }
                />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.attributes.author.data.attributes.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">
                  {article.attributes.published_at}
                </Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["image", "category", "author.picture"],
  });
  const categoriesRes = await fetchAPI("/categories");

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  };
}

export default Article;
