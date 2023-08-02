import React from "react";
import Link from "next/link";
import { Button, Input, Select, Option } from "@material-tailwind/react";

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link legacyBehavior href="/">
                <a>CRISTIANISMO FELIZ</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {/*categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link
                    legacyBehavior
                    href={`/category/${category.attributes.slug}`}
                  >
                    <a className="uk-link-reset">{category.attributes.name}</a>
                  </Link>
                </li>
              );
            })*/}
            <div className="relative flex w-full gap-2 md:w-max mr-5">
              <Select size="md" label="Categorías">
                {categories.map((category) => {
                  return (
                    <Option key={category.id}>
                      <Link
                        legacyBehavior
                        href={`/category/${category.attributes.slug}`}
                      >
                        <a className="uk-link-reset">
                          {category.attributes.name}
                        </a>
                      </Link>
                    </Option>
                  );
                })}
              </Select>

              <Input
                type="search"
                label="Tema"
                className="pr-20"
                containerProps={{
                  className: "min-w-[288px]",
                }}
              />
              <Button size="sm" className="!absolute right-1 top-1 rounded">
                Buscar
              </Button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
