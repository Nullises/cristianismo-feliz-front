import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

const Image = ({ image }) => {
  const { alternativeText, width, height, url } = image.data.attributes;

  return (
    <NextImage
      layout="responsive"
      src={
        url.startsWith("http")
          ? url
          : `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${url}`
      }
      objectFit="contain"
      alt={alternativeText || ""}
      width={width ? width : 600}
      height={height ? height : 400}
    />
  );
};

export default Image;
