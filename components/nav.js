import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Input,
  Select,
  Option,
  Navbar,
  Typography,
  IconButton,
  MobileNav,
} from "@material-tailwind/react";
import es from "../assets/img/es.svg";
import jesus from "../assets/img/jesus.png";

const Nav = ({ categories }) => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 primary">
      <Select color="blue-gray-200" size="md" label="Categorías">
        {categories.map((category) => {
          return (
            <Option key={category.id}>
              <Link
                legacyBehavior
                href={`/category/${category.attributes.slug}`}
              >
                <a className="uk-link-reset">{category.attributes.name}</a>
              </Link>
            </Option>
          );
        })}
      </Select>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex display: inline-block items-center">
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 mr-2 mt-1"
          >
            <Image width={50} height={50} alt="cf-logo" src={jesus}></Image>
          </Typography>
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            CRISTIANISMO FELIZ
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4">{navList}</div>
        </div>
      </div>
    </Navbar>
  );
};

export default Nav;
