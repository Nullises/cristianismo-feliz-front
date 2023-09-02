import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

const Image = ({ image }) => {
  const { alternativeText, width, height, url } = image.data.attributes;

  console.log("image", image);

  return (
    <img
      src={
        url.startsWith("http")
          ? url
          : `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${url}`
      }
      width={width}
      height={height}
    />
  );
};

export default Image;
